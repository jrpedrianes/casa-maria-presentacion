'use client'

import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        onNext()
      } else if (e.key === 'ArrowLeft') {
        onPrev()
      }
    },
    [onClose, onNext, onPrev]
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {/* Previous button */}
      <button
        onClick={onPrev}
        className="absolute left-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <div
          className="relative max-w-7xl max-h-full w-full h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 z-10 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
        aria-label="Next image"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
