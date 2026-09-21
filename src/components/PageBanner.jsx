import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

const ROUTE_TITLES = {
  '/about': 'About Us',
  '/child-squint': 'Child Squint',
  '/adult-squint': 'Adult Squint',
  '/techniques': 'Advanced Techniques',
  '/gallery': 'Gallery',
  '/faq': 'FAQ',
  '/contact': 'Contact Us',
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumb = 'Home',
  imageSrc,
  imageAlt = 'Clinic Photo',
}) {
  const { pathname } = useLocation()
  const displayTitle = title || ROUTE_TITLES[pathname] || 'Services'

  return (
    <section className="dark-banner relative overflow-hidden text-white">
      <div className="container-clinic grid min-h-[190px] items-center gap-6 py-6 md:min-h-[220px] md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr] md:py-0">
        <div className="relative z-10 py-4 sm:py-6">
          <div className="mb-2.5 flex items-center gap-1.5 text-[12px] font-medium text-blue-200">
            <Link to="/" className="hover:text-white transition-colors">
              {breadcrumb}
            </Link>
            <ChevronRight size={13} className="text-blue-300" />
            <span className="text-white font-semibold">{displayTitle}</span>
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
            {displayTitle}
          </h1>
          {subtitle && (
            <p className="mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-blue-100/90 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {imageSrc ? (
          <div className="relative h-44 w-full overflow-hidden rounded-lg shadow-md md:h-[190px] lg:h-[210px]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#072244]/60 via-transparent to-transparent md:block hidden" />
          </div>
        ) : null}
      </div>
    </section>
  )
}

