import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, CalendarDays } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/child-squint', label: 'Child Squint' },
  { to: '/adult-squint', label: 'Adult Squint' },
  { to: '/techniques', label: 'Techniques' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function scrollToForm(e) {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    setMobileMenuOpen(false)
    const target = document.getElementById('consultation-form')
    if (target) {
      const headerOffset = 85
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })

      target.scrollIntoView({ behavior: 'smooth', block: 'start' })

      const firstInput = target.querySelector('input')
      if (firstInput) {
        setTimeout(() => firstInput.focus({ preventScroll: true }), 400)
      }
    } else {
      window.location.href = '/#consultation-form'
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container-clinic flex h-[74px] sm:h-[78px] items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
          onClick={() => {
            setMobileMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          {/* Stylized Eye Logo matching reference */}
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center">
            <svg viewBox="0 0 100 70" className="h-9 w-11 sm:h-10 sm:w-12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 8C27 8 9 35 9 35C9 35 27 62 50 62C73 62 91 35 91 35C91 35 73 8 50 8Z"
                stroke="#082852"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="35" r="18" fill="#268054" />
              <circle cx="50" cy="35" r="8" fill="#082852" />
              <circle cx="46" cy="31" r="3" fill="#ffffff" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-[18px] sm:text-[20px] font-extrabold tracking-tight text-clinic-navy">
              Child Eye Care
            </div>
            <div className="text-[13px] sm:text-[13.5px] font-bold tracking-normal text-clinic-green mt-0.5">
              &amp; Squint Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-3.5 xl:gap-5 2xl:gap-6 lg:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={({ isActive }) =>
                `text-[13.5px] xl:text-[14.5px] font-semibold tracking-normal transition-colors duration-150 ${isActive
                  ? 'text-clinic-green font-bold'
                  : 'text-slate-700 hover:text-clinic-green'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={scrollToForm}
            className="primary-btn !rounded-lg !px-4.5 !py-2.5 !text-[13px] sm:!text-[13.5px] shadow-sm font-bold cursor-pointer transition active:scale-[0.98]"
          >
            <CalendarDays size={15} className="text-white" />
            Book Appointment
          </button>

          <a
            href="tel:+919010888066"
            className="hidden items-center gap-2 text-[13.5px] font-bold text-clinic-green transition-colors hover:text-clinic-green-dark 2xl:flex"
          >
            <Phone size={14} className="fill-clinic-green text-clinic-green" />
            +91 90108 88066
          </a>
        </div>

        {/* Mobile Header Actions: Phone Call + Hamburger Toggle */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href="tel:+919010888066"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082852] text-white shadow-xs transition hover:bg-[#0c3972]"
            aria-label="Call Clinic"
          >
            <Phone size={15} />
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-clinic-navy transition-colors hover:bg-slate-50"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => {
                  setMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={({ isActive }) =>
                  `rounded-md px-3.5 py-2.5 text-[15px] font-medium transition ${isActive
                    ? 'bg-clinic-mint font-bold text-clinic-green'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-clinic-navy'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-3 grid gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={scrollToForm}
                className="primary-btn !w-full justify-center !py-3 text-[14px] font-bold cursor-pointer"
              >
                <CalendarDays size={16} /> Book Appointment
              </button>
              <a
                href="tel:+919010888066"
                className="outline-btn !w-full justify-center !py-2.5 text-[14px] font-bold"
              >
                <Phone size={15} /> Call: +91 90108 88066
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

