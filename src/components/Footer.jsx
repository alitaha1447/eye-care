import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Search } from 'lucide-react'

// WhatsApp SVG Icon
function WhatsappIcon({ size = 13, className = '' }) {
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

export default function Footer() {
  return (
    <footer className="bg-[#061C39] text-white">
      <div className="container-clinic py-9 lg:py-11">
        <div className="grid gap-6 sm:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.4fr_1.35fr_1.1fr_1fr] items-start">
          {/* Column 1: Brand & Description & Socials */}
          <div className="lg:pr-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <svg viewBox="0 0 100 70" className="h-8 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 8C27 8 9 35 9 35C9 35 27 62 50 62C73 62 91 35 91 35C91 35 73 8 50 8Z"
                    stroke="#ffffff"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="50" cy="35" r="18" fill="#268054" />
                  <circle cx="50" cy="35" r="8" fill="#ffffff" />
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-[16px] font-extrabold tracking-tight text-white">
                  Child Eye Care
                </div>
                <div className="text-[12px] font-bold text-clinic-green">
                  &amp; Squint Clinic
                </div>
              </div>
            </Link>

            <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-blue-100/80 max-w-[240px]">
              Specialized care for squint (strabismus) in children and adults.
            </p>

            {/* Social Icons with blue circular backgrounds matching reference */}
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-7 w-7 place-items-center rounded-full bg-[#124B8B] text-white transition hover:bg-[#1862b5]"
              >
                <Facebook size={13} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-7 w-7 place-items-center rounded-full bg-[#124B8B] text-white transition hover:bg-[#1862b5]"
              >
                <Instagram size={13} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-7 w-7 place-items-center rounded-full bg-[#124B8B] text-white transition hover:bg-[#1862b5]"
              >
                <Youtube size={13} />
              </a>
              <a
                href="https://wa.me/919010888066"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-7 w-7 place-items-center rounded-full bg-[#124B8B] text-white transition hover:bg-[#1862b5]"
              >
                <WhatsappIcon size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS (2 subcolumns) */}
          <div className="lg:border-l lg:border-white/10 lg:pl-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-2.5">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-[13px] text-blue-100/80">
              <Link
                to="/"
                className="transition hover:text-white">Home</Link>
              <Link
                // to="/gallery"
                className="transition hover:text-white">Gallery</Link>

              <Link
                //  to="/about"
                className="transition hover:text-white">About Us</Link>
              <Link
                // to="/faq" 
                className="transition hover:text-white">FAQ</Link>

              <Link
                // to="/child-squint" 
                className="transition hover:text-white">Child Squint</Link>
              <Link
                // to="/contact" 
                className="transition hover:text-white">Contact Us</Link>

              <Link
                // to="/adult-squint"
                className="transition hover:text-white">Adult Squint</Link>
              <Link
                //  to="/contact"
                className="transition hover:text-white">Privacy Policy</Link>


              <Link
                //  to="/techniques"
                className="transition hover:text-white">Techniques</Link>
              <Link
                // to="/contact"
                className="transition hover:text-white">Terms &amp; Conditions</Link>
            </div>
          </div>

          {/* Column 3: CONTACT US */}
          <div className="lg:border-l lg:border-white/10 lg:pl-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-2.5">
              CONTACT US
            </h3>
            <div className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-blue-100/80">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="shrink-0 text-blue-200 mt-0.5" />
                <div className="leading-tight">
                  <div className="text-white font-medium">Child Eye Care &amp; Squint Clinic</div>
                  <div>3rd Floor, Plot No. 12, Road No. 2,</div>
                  <div>Banjara Hills, Hyderabad – 500034</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={13} className="shrink-0 text-blue-200" />
                <a href="tel:+919010888066" className="hover:text-white transition">
                  +91 90108 88066
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={13} className="shrink-0 text-blue-200" />
                <a href="mailto:info@childeyecare.com" className="hover:text-white transition">
                  info@childeyecare.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: OUR LOCATION (Map preview with View on Google Maps pill) */}
          <div className="lg:border-l lg:border-white/10 lg:pl-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-2.5">
              OUR LOCATION
            </h3>
            <div className="relative w-full max-w-[185px] overflow-hidden rounded-xl border border-white/20 shadow-md">
              <img
                src="/images/contact/clinic-map.jpg"
                alt="Clinic Map Location in Banjara Hills"
                className="h-20 w-full object-cover"
              />
              <a
                href="https://maps.google.com/?q=Child+Eye+Care+and+Squint+Clinic+Banjara+Hills+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-[#082852] py-1.5 px-2 text-[11px] font-bold text-white transition hover:bg-[#0c3972]"
              >
                <Search size={11} className="text-blue-200" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Column 5: WORKING HOURS */}
          <div className="lg:border-l lg:border-white/10 lg:pl-6">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-white mb-2.5">
              WORKING HOURS
            </h3>
            <div className="text-xs sm:text-[13px] leading-snug">
              <div className="font-semibold text-white">Monday – Saturday</div>
              <div className="text-blue-100/80">10:00 AM – 7:00 PM</div>

              <div className="mt-2.5 font-semibold text-white">Sunday</div>
              <div className="text-blue-100/80">By Appointment Only</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#04152D] py-3">
        <div className="container-clinic flex flex-col items-center justify-between gap-1.5 text-xs text-blue-100/70 sm:flex-row">
          <div>
            &copy; 2025 Child Eye Care &amp; Squint Clinic. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <span className="text-white text-xs">❤</span>
            <span>for better vision</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
