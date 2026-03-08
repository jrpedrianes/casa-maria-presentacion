'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Lightbox } from './Lightbox'

const images = Array.from({ length: 26 }, (_, i) => ({
  src: `/img/gallery/gallery-${i + 1}.jpg`,
  alt: `Casa María Presentación - Image ${i + 1}`,
}))

export function Gallery() {
  const t = useTranslations('gallery')
  const sectionRef = useRef<HTMLElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [showSwipeHint, setShowSwipeHint] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const updateIndex = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    const hideHint = () => setShowSwipeHint(false)

    // Initialize and subscribe to changes
    updateIndex()
    emblaApi.on('select', updateIndex)
    emblaApi.on('reInit', updateIndex)
    emblaApi.on('scroll', hideHint)

    return () => {
      emblaApi.off('select', updateIndex)
      emblaApi.off('reInit', updateIndex)
      emblaApi.off('scroll', hideHint)
    }
  }, [emblaApi])

  // Hide hint after 3 seconds, but only when the gallery is visible
  useEffect(() => {
    const section = sectionRef.current
    if (!section) {
      return
    }

    let timer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the gallery is visible, start the timer
          if (entry.isIntersecting && showSwipeHint) {
            timer = setTimeout(() => setShowSwipeHint(false), 3000)
            // Once the timer is started, we can stop observing
            observer.disconnect()
          }
        })
      },
      {
        threshold: 0.1, // Element must be at least 10% visible
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [showSwipeHint])

  return (
    <section id="gallery" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Swipe Hint - Only visible on mobile */}
          {showSwipeHint && (
            <div className="sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
              <div className="bg-black/70 text-white px-6 py-3 rounded-full flex items-center gap-2 animate-pulse">
                <ChevronLeft size={20} />
                <span className="text-sm font-medium">{t('swipeHint')}</span>
                <ChevronRight size={20} />
              </div>
            </div>
          )}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                >
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all hidden sm:block cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-gray-900" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all hidden sm:block cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-gray-900" />
          </button>

          {/* Pagination Dots - Visible on mobile */}
          <div className="flex justify-center gap-2 mt-6 sm:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer hover:scale-125 ${
                  index === selectedIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-600'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  )
}
