import { useLocale } from 'next-intl'

export function LegalContent() {
  const locale = useLocale()

  const content = {
    es: {
      title: 'Aviso Legal y Política de Privacidad',
      lastUpdate: 'Última actualización: Marzo 2026',
      sections: [
        {
          title: 'Titularidad',
          content:
            'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa a los usuarios que el titular del sitio web es Casa María Presentación, con domicilio en El Castillo, 38787, Garafía, La Palma, Santa Cruz de Tenerife, Islas Canarias, España. Correo electrónico de contacto: info@casitasrosheli.com.',
        },
        {
          title: 'Normativa aplicable',
          content:
            'El presente sitio web se rige por la normativa vigente en materia de protección de datos personales: el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD), la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), y la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE).',
        },
        {
          title: 'Condiciones de uso',
          content:
            'El acceso al sitio web es libre y gratuito. La navegación por el mismo atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe y al ordenamiento legal vigente.',
        },
        {
          title: 'Protección de datos personales',
          content:
            'El responsable del tratamiento de los datos personales es Casa María Presentación, con domicilio en El Castillo, 38787, Garafía, La Palma. Los datos personales que pudieran recabarse directamente del usuario serán tratados de forma confidencial y quedarán incorporados a la correspondiente actividad de tratamiento. La recogida y tratamiento de los datos personales tiene como finalidad la gestión, prestación, ampliación y mejora de los servicios solicitados, así como la atención de consultas. La base legal para el tratamiento de sus datos es el consentimiento del usuario y/o la ejecución de un contrato de alojamiento. No se cederán datos a terceros salvo por obligación legal.',
        },
        {
          title: 'Conservación de los datos',
          content:
            'Los datos personales del usuario se conservarán durante el tiempo necesario para la prestación del servicio solicitado o mientras exista una relación contractual. Una vez finalizada la relación, los datos serán conservados durante los plazos legalmente establecidos para atender posibles responsabilidades derivadas del tratamiento, y serán suprimidos cuando ya no sean necesarios para dicha finalidad.',
        },
        {
          title: 'Medidas de seguridad',
          content:
            'El sitio web está alojado en Vercel. Se han implementado las medidas de seguridad técnicas y organizativas necesarias para garantizar la seguridad de los datos de carácter personal del usuario y evitar su alteración, pérdida, tratamiento y/o acceso no autorizado.',
        },
        {
          title: 'Derechos del usuario',
          content:
            'El usuario podrá ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, dirigiendo una comunicación escrita a info@casitasrosheli.com indicando en el asunto "Protección de Datos" y adjuntando copia de su documento de identidad. Asimismo, el usuario tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
        },
        {
          title: 'Política de cookies',
          content:
            'Este sitio web utiliza únicamente cookies estrictamente necesarias para su funcionamiento. En concreto, se emplea una cookie técnica (NEXT_LOCALE) para recordar el idioma seleccionado por el usuario durante un año. No se emplean cookies de análisis, publicidad ni de seguimiento. Las cookies estrictamente necesarias no requieren consentimiento del usuario según el artículo 22.2 de la LSSICE.',
        },
        {
          title: 'Servicios externos',
          content:
            'Cuando el usuario hace clic en el enlace del mapa, será redirigido a Google Maps, que tiene sus propias políticas de privacidad y cookies. Puede consultarlas en: https://policies.google.com/privacy?hl=es.',
        },
        {
          title: 'Propiedad intelectual',
          content:
            'Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, logotipos, iconos, tecnología, software, así como su diseño gráfico y códigos fuente) son propiedad de Casa María Presentación o de sus legítimos titulares, quedando reservados todos los derechos. Queda prohibida la reproducción, distribución, comunicación pública o transformación total o parcial de los contenidos sin autorización expresa del titular.',
        },
        {
          title: 'Limitación de responsabilidad',
          content:
            'Casa María Presentación no se hace responsable de los daños y perjuicios que pudieran derivarse del uso del sitio web por parte del usuario, incluyendo errores u omisiones en los contenidos, falta de disponibilidad del sitio web o la transmisión de virus o programas maliciosos.',
        },
        {
          title: 'Legislación aplicable y jurisdicción',
          content:
            'Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, el usuario y Casa María Presentación acuerdan someterse a los Juzgados y Tribunales del domicilio del usuario, de conformidad con la legislación vigente en materia de consumidores y usuarios.',
        },
        {
          title: 'Modificaciones',
          content:
            'Casa María Presentación se reserva el derecho de modificar el presente aviso legal y política de privacidad para adaptarlos a novedades legislativas o jurisprudenciales. Cualquier modificación será publicada en esta misma página con la correspondiente fecha de actualización.',
        },
      ],
    },
    en: {
      title: 'Legal Notice and Privacy Policy',
      lastUpdate: 'Last update: March 2026',
      sections: [
        {
          title: 'Ownership',
          content:
            'In compliance with Article 10 of Spanish Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), users are informed that the owner of the website is Casa María Presentación, with registered address at El Castillo, 38787, Garafía, La Palma, Santa Cruz de Tenerife, Canary Islands, Spain. Contact email: info@casitasrosheli.com.',
        },
        {
          title: 'Applicable regulations',
          content:
            'This website is governed by the current regulations on personal data protection: Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR), Spanish Organic Law 3/2018 on Personal Data Protection and guarantee of digital rights (LOPDGDD), and Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSICE).',
        },
        {
          title: 'Terms of use',
          content:
            'Access to the website is free of charge. Browsing the site confers the status of user and implies full and unreserved acceptance of all provisions included in this legal notice. The user agrees to make proper use of the content and services offered and not to use them for unlawful activities.',
        },
        {
          title: 'Personal data protection',
          content:
            "The data controller is Casa María Presentación, with registered address at El Castillo, 38787, Garafía, La Palma. Any personal data collected directly from the user will be treated confidentially. The collection and processing of personal data is intended for the management, provision, expansion and improvement of the requested services, as well as handling enquiries. The legal basis for processing your data is the user's consent and/or the execution of an accommodation contract. Data will not be transferred to third parties except when legally required.",
        },
        {
          title: 'Data retention',
          content:
            "The user's personal data will be retained for the time necessary to provide the requested service or while a contractual relationship exists. Once the relationship has ended, the data will be retained for the legally established periods and will be deleted when no longer necessary.",
        },
        {
          title: 'Security measures',
          content:
            "The website is hosted on Vercel. The necessary technical and organisational security measures have been implemented to guarantee the security of the user's personal data and to prevent its alteration, loss, processing and/or unauthorised access.",
        },
        {
          title: 'User rights',
          content:
            'The user may exercise at any time their rights of access, rectification, erasure, restriction of processing, portability and objection by sending a written communication to info@casitasrosheli.com, indicating "Data Protection" in the subject line. The user also has the right to lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).',
        },
        {
          title: 'Cookie policy',
          content:
            'This website uses only strictly necessary cookies for its operation. Specifically, a technical cookie (NEXT_LOCALE) is used to remember the language selected by the user for one year. No analytics, advertising or tracking cookies are used. Strictly necessary cookies do not require user consent under Article 22.2 of the LSSICE.',
        },
        {
          title: 'External services',
          content:
            'When the user clicks on the map link, they will be redirected to Google Maps, which has its own privacy and cookie policies. You can consult them at: https://policies.google.com/privacy?hl=en.',
        },
        {
          title: 'Intellectual property',
          content:
            'All content on the website (texts, photographs, graphics, images, logos, icons, technology, software, as well as its graphic design and source codes) are the property of Casa María Presentación or their legitimate owners, with all rights reserved. The total or partial reproduction, distribution, public communication or transformation of the content without express authorisation is prohibited.',
        },
        {
          title: 'Limitation of liability',
          content:
            "Casa María Presentación shall not be held liable for any damages that may arise from the user's use of the website, including errors or omissions in the content, lack of availability of the website, or the transmission of viruses or malicious software.",
        },
        {
          title: 'Applicable law and jurisdiction',
          content:
            "These terms are governed by Spanish law. For the resolution of any dispute that may arise from the access or use of this website, the user and Casa María Presentación agree to submit to the Courts and Tribunals of the user's domicile, in accordance with current consumer protection legislation.",
        },
        {
          title: 'Modifications',
          content:
            'Casa María Presentación reserves the right to modify this legal notice and privacy policy to adapt them to legislative or jurisprudential developments. Any modification will be published on this same page with the corresponding update date.',
        },
      ],
    },
    de: {
      title: 'Rechtliche Hinweise und Datenschutz',
      lastUpdate: 'Letzte Aktualisierung: März 2026',
      sections: [
        {
          title: 'Eigentümer',
          content:
            'Gemäß Artikel 10 des spanischen Gesetzes 34/2002 vom 11. Juli über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSICE) wird den Benutzern mitgeteilt, dass der Eigentümer der Website Casa María Presentación ist, mit Sitz in El Castillo, 38787, Garafía, La Palma, Santa Cruz de Tenerife, Kanarische Inseln, Spanien. Kontakt-E-Mail: info@casitasrosheli.com.',
        },
        {
          title: 'Anwendbare Vorschriften',
          content:
            'Diese Website unterliegt den geltenden Vorschriften zum Schutz personenbezogener Daten: der Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates (DSGVO), dem spanischen Organgesetz 3/2018 zum Schutz personenbezogener Daten und zur Gewährleistung digitaler Rechte (LOPDGDD) sowie dem spanischen Gesetz 34/2002 über Dienste der Informationsgesellschaft und den elektronischen Geschäftsverkehr (LSSICE).',
        },
        {
          title: 'Nutzungsbedingungen',
          content:
            'Der Zugang zur Website ist kostenlos. Das Navigieren auf der Website verleiht den Status eines Benutzers und impliziert die vollständige und vorbehaltlose Akzeptanz aller in diesem Rechtshinweis enthaltenen Bestimmungen. Der Benutzer verpflichtet sich, die angebotenen Inhalte und Dienste ordnungsgemäß zu nutzen.',
        },
        {
          title: 'Schutz personenbezogener Daten',
          content:
            'Der Verantwortliche für die Datenverarbeitung ist Casa María Presentación, mit Sitz in El Castillo, 38787, Garafía, La Palma. Personenbezogene Daten, die direkt vom Benutzer erhoben werden, werden vertraulich behandelt. Die Erhebung und Verarbeitung personenbezogener Daten dient der Verwaltung, Erbringung, Erweiterung und Verbesserung der angeforderten Dienstleistungen. Die Rechtsgrundlage für die Verarbeitung ist die Einwilligung des Benutzers und/oder die Erfüllung eines Beherbergungsvertrags. Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist gesetzlich vorgeschrieben.',
        },
        {
          title: 'Datenaufbewahrung',
          content:
            'Die personenbezogenen Daten des Benutzers werden so lange aufbewahrt, wie es für die Erbringung der angeforderten Dienstleistung erforderlich ist oder solange eine Vertragsbeziehung besteht. Nach Beendigung der Beziehung werden die Daten für die gesetzlich vorgeschriebenen Zeiträume aufbewahrt und gelöscht, wenn sie nicht mehr erforderlich sind.',
        },
        {
          title: 'Sicherheitsmaßnahmen',
          content:
            'Die Website wird bei Vercel gehostet. Es wurden die erforderlichen technischen und organisatorischen Sicherheitsmaßnahmen umgesetzt, um die Sicherheit der personenbezogenen Daten des Benutzers zu gewährleisten und deren Veränderung, Verlust, Verarbeitung und/oder unbefugten Zugriff zu verhindern.',
        },
        {
          title: 'Benutzerrechte',
          content:
            'Der Benutzer kann jederzeit seine Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch ausüben, indem er eine schriftliche Mitteilung an info@casitasrosheli.com sendet, im Betreff „Datenschutz" angibt. Der Benutzer hat außerdem das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde (www.aepd.es) einzureichen.',
        },
        {
          title: 'Cookie-Richtlinie',
          content:
            'Diese Website verwendet ausschließlich streng notwendige Cookies für ihren Betrieb. Konkret wird ein technisches Cookie (NEXT_LOCALE) verwendet, um die vom Benutzer ausgewählte Sprache ein Jahr lang zu speichern. Es werden keine Analyse-, Werbe- oder Tracking-Cookies verwendet. Streng notwendige Cookies erfordern gemäß Artikel 22.2 der LSSICE keine Zustimmung des Benutzers.',
        },
        {
          title: 'Externe Dienste',
          content:
            'Wenn der Benutzer auf den Kartenlink klickt, wird er zu Google Maps weitergeleitet, das seine eigenen Datenschutz- und Cookie-Richtlinien hat. Sie können diese einsehen unter: https://policies.google.com/privacy?hl=de.',
        },
        {
          title: 'Geistiges Eigentum',
          content:
            'Alle Inhalte der Website (Texte, Fotografien, Grafiken, Bilder, Logos, Symbole, Technologie, Software sowie deren grafisches Design und Quellcodes) sind Eigentum von Casa María Presentación oder deren rechtmäßigen Inhabern, wobei alle Rechte vorbehalten sind. Die vollständige oder teilweise Vervielfältigung, Verbreitung, öffentliche Wiedergabe oder Umgestaltung der Inhalte ohne ausdrückliche Genehmigung ist untersagt.',
        },
        {
          title: 'Haftungsbeschränkung',
          content:
            'Casa María Presentación haftet nicht für Schäden, die sich aus der Nutzung der Website durch den Benutzer ergeben können, einschließlich Fehler oder Auslassungen in den Inhalten, mangelnde Verfügbarkeit der Website oder die Übertragung von Viren oder Schadsoftware.',
        },
        {
          title: 'Anwendbares Recht und Gerichtsstand',
          content:
            'Diese Bedingungen unterliegen spanischem Recht. Für die Beilegung von Streitigkeiten, die sich aus dem Zugang oder der Nutzung dieser Website ergeben können, vereinbaren der Benutzer und Casa María Presentación, sich den Gerichten am Wohnsitz des Benutzers zu unterwerfen.',
        },
        {
          title: 'Änderungen',
          content:
            'Casa María Presentación behält sich das Recht vor, diesen Rechtshinweis und diese Datenschutzrichtlinie anzupassen, um sie an gesetzliche oder rechtsprechungsbezogene Entwicklungen anzupassen. Jede Änderung wird auf dieser Seite mit dem entsprechenden Aktualisierungsdatum veröffentlicht.',
        },
      ],
    },
  }

  const currentContent = content[locale as keyof typeof content] || content.es

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">{currentContent.title}</h1>

      <div className="prose prose-lg max-w-none">
        {currentContent.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">{currentContent.lastUpdate}</p>
      </div>
    </div>
  )
}
