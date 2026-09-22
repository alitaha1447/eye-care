import { useState } from 'react'
import { Clock3, Mail, MapPin, Phone, Search, CheckCircle2 } from 'lucide-react'
import PageBanner from '../components/PageBanner'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', email: '', message: '' })
    }, 4000)
  }

  return (
    <main className="w-full">
      {/* Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="We are here to help you. Reach out to us for any queries or appointments."
        imageSrc="/images/contact/contact-hero.jpg"
        imageAlt="Child Eye Care & Squint Clinic coordinator"
      />

      {/* 3-Column Layout: Get in Touch, Send Us a Message, Map */}
      <section className="container-clinic py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.25fr_1.15fr] xl:gap-10">
          {/* Column 1: Get in Touch */}
          <div>
            <h2 className="text-xl font-black tracking-tight text-[#082852] sm:text-2xl">
              Get in Touch
            </h2>

            <div className="mt-6 flex flex-col gap-5">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EDF8F2] text-clinic-green">
                  <MapPin size={17} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#082852]">Address</div>
                  <div className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    3rd Floor, Plot No. 12, Road No. 2,<br />
                    Banjara Hills, Hyderabad - 500034
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EDF8F2] text-clinic-green">
                  <Phone size={17} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#082852]">Phone</div>
                  <a
                    href="tel:+919010888066"
                    className="mt-1 block text-xs sm:text-sm font-semibold text-slate-700 hover:text-clinic-green"
                  >
                    +91 90108 88066
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EDF8F2] text-clinic-green">
                  <Mail size={17} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#082852]">Email</div>
                  <a
                    href="mailto:info@childeyecare.com"
                    className="mt-1 block text-xs sm:text-sm font-semibold text-slate-700 hover:text-clinic-green"
                  >
                    info@childeyecare.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EDF8F2] text-clinic-green">
                  <Clock3 size={17} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#082852]">Working Hours</div>
                  <div className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    Mon - Sat: 10:00 AM - 7:00 PM<br />
                    Sunday: By Appointment Only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Send Us a Message */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs sm:p-6">
            <h3 className="text-base font-bold text-[#082852]">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="my-8 rounded-lg bg-clinic-mint p-5 text-center">
                <CheckCircle2 size={32} className="mx-auto text-clinic-green mb-2" />
                <h4 className="text-base font-bold text-[#082852]">Message Sent!</h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-600">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Mobile Number"
                    required
                    className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Email Address"
                    required
                    className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Your Message"
                    required
                    className="w-full resize-none rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 w-full rounded-md bg-clinic-green py-2.5 text-sm font-bold text-white transition-colors duration-150 hover:bg-clinic-green-dark shadow-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Map Card */}
          {/* Column 3: Google Map */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs">
            <div className="relative h-full min-h-[300px] w-full overflow-hidden sm:min-h-[360px]">
              <iframe
                title="Child Eye Care & Squint Clinic Location"
                src="https://www.google.com/maps?q=Banjara+Hills+Road+No+2+Hyderabad&output=embed"
                className="h-full min-h-[300px] w-full border-0 sm:min-h-[360px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

