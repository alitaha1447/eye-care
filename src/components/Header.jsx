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

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="container-clinic flex h-[70px] items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90"
          onClick={() => setMobileMenuOpen(false)}
        >
          {/* Stylized Eye Logo matching reference */}
          <div className="relative flex h-10 w-10 items-center justify-center">
            <svg viewBox="0 0 100 70" className="h-9 w-11" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <div className="text-[17px] font-extrabold tracking-tight text-clinic-navy">
              Child Eye Care
            </div>
            <div className="text-[12px] font-bold tracking-normal text-clinic-green">
              &amp; Squint Clinic
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 xl:gap-5 lg:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              // key={to}
              // to={to}
              className={({ isActive }) =>
                `text-[12px] font-semibold tracking-normal transition-colors duration-150 ${isActive
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
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            // to="/contact"
            className="primary-btn !rounded-md !px-4 !py-2 !text-[11px] shadow-sm font-semibold"
          >
            <CalendarDays size={13} className="text-white" />
            Book Appointment
          </Link>

          <a
            href="tel:+919010888066"
            className="hidden items-center gap-1.5 text-[12px] font-bold text-clinic-green transition-colors hover:text-clinic-green-dark 2xl:flex"
          >
            <Phone size={13} className="fill-clinic-green text-clinic-green" />
            +91 90108 88066
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-clinic-navy transition-colors hover:bg-slate-50 lg:hidden"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map(({ to, label }) => (
              <NavLink
                // key={to}
                // to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3.5 py-2.5 text-sm font-medium transition ${isActive
                    ? 'bg-clinic-mint font-bold text-clinic-green'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-clinic-navy'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <div className="mt-3 grid gap-2 pt-2 border-t border-slate-100">
              <Link
                // to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="primary-btn !w-full justify-center !py-3 text-sm"
              >
                <CalendarDays size={16} /> Book Appointment
              </Link>
              <a
                href="tel:+919010888066"
                className="outline-btn !w-full justify-center !py-2.5 text-sm"
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

