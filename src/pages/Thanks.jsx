import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, Calendar, ArrowLeft, Clock, MapPin } from 'lucide-react'

// WhatsApp SVG Icon
function WhatsappIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.55C8.84 7.55 8.52 7.62 8.25 7.91C7.98 8.2 7.23 8.9 7.23 10.33C7.23 11.76 8.27 13.13 8.42 13.33C8.56 13.52 10.45 16.44 13.35 17.7C14.04 18 14.58 18.18 15 18.31C15.7 18.53 16.33 18.5 16.83 18.42C17.39 18.34 18.55 17.72 18.79 17.03C19.03 16.34 19.03 15.75 18.96 15.63C18.89 15.51 18.7 15.44 18.41 15.3C18.12 15.15 16.7 14.45 16.44 14.36C16.18 14.26 16 14.21 15.81 14.5C15.62 14.79 15.08 15.44 14.92 15.63C14.75 15.82 14.59 15.84 14.3 15.7C14.01 15.55 12.78 15.15 11.32 13.85C10.18 12.83 9.42 11.58 9.2 11.2C8.98 10.82 9.18 10.61 9.33 10.47C9.46 10.34 9.62 10.12 9.77 9.95C9.92 9.77 9.97 9.65 10.07 9.45C10.17 9.25 10.12 9.08 10.05 8.94C9.97 8.79 9.42 7.42 9.18 6.87C8.95 6.34 8.71 6.41 8.54 6.41C8.38 6.41 8.21 6.41 8.04 6.41C7.87 6.41 7.6 6.48 7.37 6.72C7.14 6.96 6.5 7.55 6.5 8.98C6.5 10.41 7.54 11.78 7.69 11.98C7.84 12.18 9.73 15.1 12.63 16.36C13.32 16.66 13.86 16.84 14.28 16.97C14.98 17.19 15.61 17.16 16.11 17.08C16.67 17 17.83 16.38 18.07 15.69C18.31 15 18.31 14.41 18.24 14.29C18.17 14.17 17.98 14.1 17.69 13.96L9.04 7.55Z" />
    </svg>
  )
}

export default function Thanks() {
  return (
    <main className="w-full min-h-[80vh] bg-gradient-to-b from-[#F5F9FD] via-white to-[#EDF8F2]/30 py-12 sm:py-16 lg:py-20">
      <div className="container-clinic max-w-3xl">
        <div className="rounded-3xl border border-slate-100 bg-white p-7 sm:p-10 lg:p-12 shadow-card text-center relative overflow-hidden">
          {/* Subtle top decoration bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-clinic-navy via-clinic-green to-[#329965]" />

          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EDF8F2] text-clinic-green ring-8 ring-[#EDF8F2]/50 animate-bounce-once">
            <CheckCircle2 size={46} strokeWidth={2.2} />
          </div>

          <span className="mt-6 inline-block rounded-full bg-clinic-mint px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-clinic-green">
            Consultation Request Received
          </span>

          <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#082852]">
            Thank You for Contacting Us!
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl mx-auto">
            Our clinic care team has received your information. One of our squint &amp; pediatric eye care specialists will reach out to you shortly to confirm your consultation schedule.
          </p>

          {/* Key Next Steps Card */}
          <div className="mt-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 p-5 sm:p-6 text-left">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#082852] mb-3">
              What Happens Next?
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinic-green text-[11px] font-bold text-white">
                  1
                </span>
                <span>Our coordinator will review your request and call within clinic working hours.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinic-green text-[11px] font-bold text-white">
                  2
                </span>
                <span>We will help you select the most suitable appointment slot with our squint surgeon.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinic-green text-[11px] font-bold text-white">
                  3
                </span>
                <span>You will receive an appointment confirmation via SMS and WhatsApp.</span>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-clinic-mint text-clinic-green">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-400">Clinic Hours</div>
                <div className="text-xs font-bold text-[#082852]">Mon – Sat: 10:00 AM – 7:00 PM</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-clinic-navy">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-400">Location</div>
                <div className="text-xs font-bold text-[#082852]">Indore, Madhya Pradesh</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-clinic-navy px-5 py-2.5 text-xs font-bold text-white transition hover:bg-clinic-navy-light shadow-sm"
            >
              <ArrowLeft size={15} />
              Return to Homepage
            </Link>

            <a
              href="tel:+919010888066"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-clinic-navy bg-white px-5 py-2.5 text-xs font-bold text-[#082852] transition hover:bg-slate-50 shadow-sm"
            >
              <Phone size={15} />
              Call Now: +91 90108 88066
            </a>

            <a
              href="https://wa.me/919010888066?text=Hi%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20Squint%20treatment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#20ba5a] shadow-sm"
            >
              <WhatsappIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
