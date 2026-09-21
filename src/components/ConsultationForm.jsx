import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock, CheckCircle2 } from 'lucide-react'

export default function ConsultationForm({ className = '', variant = 'default' }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const formBody = new URLSearchParams()
      formBody.append('name', formData.name)
      formBody.append('phone', formData.phone)
      formBody.append('age', formData.age)

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
      })

      // Successful submission
      setSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        age: '',
      })

      // Redirect user to the designated Thanks page
      setTimeout(() => {
        navigate('/thanks')
      }, 500)
    } catch (err) {
      console.error('Form submission failed:', err)
      setError('Unable to submit your consultation request. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // White Card Variant matching the reference screenshot exactly
  if (variant === 'white') {
    return (
      <div className={`flex flex-col justify-between rounded-2xl bg-white p-6 text-slate-800 shadow-card border border-slate-100 ${className}`}>
        <div>
          <h3 className="text-center text-lg sm:text-[21px] font-extrabold tracking-tight text-[#082852]">
            Book Your Consultation
          </h3>
          <p className="mt-0.5 text-center text-[11px] sm:text-xs text-slate-500 font-medium">
            Take the first step towards better vision
          </p>

          <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your full name"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green shadow-xs transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="Enter your mobile number"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green shadow-xs transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                placeholder="Enter your age"
                min="1"
                max="120"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green shadow-xs transition"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-lg bg-[#268054] py-2.5 text-xs font-bold text-white transition-all duration-150 hover:bg-[#1C6944] active:scale-[0.99] shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-medium text-slate-500">
          <Lock size={12} className="text-clinic-green" />
          <span>Your information is safe with us.</span>
        </div>
      </div>
    )
  }

  // Default Navy Card Variant (used across other sub-pages)
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl bg-[#082852] p-5 sm:p-6 text-white shadow-card ${className}`}
    >
      <h3 className="text-center text-lg sm:text-[21px] font-extrabold tracking-tight text-white mb-1">
        Book Your Consultation
      </h3>

      <div className="mt-3.5 rounded-xl bg-white p-4 sm:p-5 shadow-sm text-slate-800">
        {submitted ? (
          <div className="py-8 text-center">
            <CheckCircle2
              size={36}
              className="mx-auto text-clinic-green mb-2"
            />
            <p className="text-base font-bold text-[#082852]">Thank You!</p>
            <p className="mt-1 text-xs text-slate-500">
              Our clinic team will contact you shortly.
            </p>
          </div>
        ) : (
          <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Full Name"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="Mobile Number"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
              />
            </div>

            <div>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    age: e.target.value,
                  }))
                }
                placeholder="Age"
                min="1"
                max="120"
                required
                className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:border-clinic-green focus:outline-none focus:ring-1 focus:ring-clinic-green"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full rounded-lg bg-clinic-green py-2.5 text-xs font-bold text-white transition-colors duration-150 hover:bg-clinic-green-dark active:scale-[0.99] shadow-sm disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>

      <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[11px] font-medium text-blue-100/90">
        <Lock size={12} className="text-blue-100/90" />
        <span>Your information is safe with us.</span>
      </div>
    </div>
  )
}