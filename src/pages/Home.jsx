import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CalendarDays,
  Phone,
  Award,
  Users,
  Sparkles,
  ThumbsUp,
  CheckCircle2,
  UserCheck,
  Microscope,
  ClipboardList,
  Building2,
  CreditCard,
  Eye,
  Scissors,
  Baby,
  Glasses,
  Smile,
  HeartHandshake,
  ChevronRight,
  ChevronLeft,
  Play,
  HelpCircle,
  MapPin,
  ExternalLink,
  ChevronDown,
  Activity,
  FileText,
  Stethoscope,
  X,
  Check,
  Clock,
  FlaskConical,
  ShieldCheck,
  Globe,
} from 'lucide-react'
import ConsultationForm from '../components/ConsultationForm'

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

// YouTube SVG Icon
function YoutubeIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

const stats = [
  { value: '15+', label: 'Years Experience', Icon: Award },
  { value: '5000+', label: 'Happy Patients', Icon: Users },
  { value: '2000+', label: 'Successful Surgeries', Icon: Sparkles },
  { value: '95%', label: 'Patient Satisfaction', Icon: ThumbsUp },
]

const features = [
  {
    title: 'Pediatric & Adult',
    subtitle: 'Squint Specialists',
    Icon: Users,
  },
  {
    title: 'Advanced',
    subtitle: 'Microsurgical Techniques',
    Icon: Microscope,
  },
  {
    title: 'Personalized',
    subtitle: 'Treatment Plans',
    Icon: UserCheck,
  },
  {
    title: 'Modern OT &',
    subtitle: 'World Class Infrastructure',
    Icon: Building2,
  },
  {
    title: 'Cashless Insurance',
    subtitle: 'Facilities Available',
    Icon: CreditCard,
  },
  {
    title: 'Child Friendly',
    subtitle: 'Environment',
    Icon: Smile,
  },
]

const techniques = [
  { name: 'Adjustable Suture\nTechnique', Icon: Scissors },
  { name: 'Micro Surgical\nSquint Correction', Icon: Eye },
  { name: 'Pediatric Squint\nManagement', Icon: Baby },
  { name: 'Prism & Orthoptic\nEvaluation', Icon: Glasses },
  { name: 'Binocular Vision\nAssessment', Icon: Smile },
  { name: 'Personalized\nTreatment Plan', Icon: HeartHandshake },
]

const consultationSteps = [
  { step: '01', name: 'Book\nAppointment', Icon: CalendarDays },
  { step: '02', name: 'Detailed Eye\nExamination', Icon: Eye },
  { step: '03', name: 'Diagnosis &\nAssessment', Icon: FileText },
  { step: '04', name: 'Treatment\nPlanning', Icon: ClipboardList },
  { step: '05', name: 'Treatment / Surgery\n(If Needed)', Icon: Activity },
  { step: '06', name: 'Recovery &\nFollow-up', Icon: Stethoscope },
]

const galleryThumbs = [
  { src: '/images/gallery/clinic-reception.jpg', alt: 'Clinic Reception' },
  { src: '/images/about/about-hero.jpg', alt: 'Waiting Area' },
  { src: '/images/gallery/pediatric-care.jpg', alt: 'Pediatric Care Unit' },
  { src: '/images/about/doctor-portrait.jpg', alt: 'Consultation Room' },
  { src: '/images/home/clinic-virtual-tour.jpg', alt: 'Examination Room' },
  { src: '/images/gallery/diagnostic-lab.jpg', alt: 'Diagnostic Equipment' },
]

const beforeAfterSlides = [
  {
    id: 1,
    title: 'Kids Squint Correction',
    category: 'Kids (Pediatric)',
    categoryColor: 'bg-blue-50 text-clinic-navy border-blue-100',
    before: '/images/home/squint-before.jpg',
    after: '/images/home/squint-after.jpg',
  },
  {
    id: 2,
    title: 'Adult Squint Correction',
    category: 'Adults (Age 18+)',
    categoryColor: 'bg-emerald-50 text-clinic-green border-emerald-100',
    before: '/images/home/adult-squint-before.jpg',
    after: '/images/home/adult-squint-after.jpg',
  },
  {
    id: 3,
    title: 'Pediatric Eye Alignment',
    category: 'Kids (Pediatric)',
    categoryColor: 'bg-blue-50 text-clinic-navy border-blue-100',
    before: '/images/home/squint-before-full.jpg',
    after: '/images/home/squint-after-full.jpg',
  },
  {
    id: 4,
    title: 'Adult Strabismus Surgery',
    category: 'Adults (Age 18+)',
    categoryColor: 'bg-emerald-50 text-clinic-green border-emerald-100',
    before: '/images/home/adult-squint-before.jpg',
    after: '/images/home/adult-squint-after.jpg',
  },
  {
    id: 5,
    title: 'Pediatric Precision Alignment',
    category: 'Kids (Pediatric)',
    categoryColor: 'bg-blue-50 text-clinic-navy border-blue-100',
    before: '/images/home/squint-before-eyes.jpg',
    after: '/images/home/squint-after-eyes.jpg',
  },
]

const faqs = [
  {
    q: 'What is squint?',
    a: 'A squint, or strabismus, is a condition in which the eyes do not align properly. One eye turns inwards, upwards, downwards, or outwards, while the other one focuses at one spot.',
    iconColor: 'blue',
  },
  {
    q: 'How to judge at home if your child has squint?',
    a: 'In children affected eye might turn in towards the nose or outwards or less commonly upwards or downwards. Infant sometimes look like this from birth, they need an eye evaluation to rule out true or pseudosquint around 3-4 months of age. If the squint is constant, might need early examination.',
    iconColor: 'green',
  },
  {
    q: 'Why early correction is advised?',
    a: 'Squint in children less than 7 years old may impair visual development of the affected eye. Unless treated before the age of 7–8 years, this can become permanent. The fixating eye will see clearly, while the deviating eye will have reduced visual acuity permanently and underdeveloped 3D vision.',
    iconColor: 'blue',
  },
  {
    q: 'What are the treatment options?',
    a: (
      <div>
        <p className="mb-1 font-medium text-slate-700">Treatment options:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Glasses &ndash; some type of squint can be corrected by glasses only, others need surgical correction.</li>
          <li>Special glasses in some cases &ndash; prismatic glasses.</li>
          <li>Exercises.</li>
          <li>Surgery.</li>
        </ul>
      </div>
    ),
    iconColor: 'green',
  },
  {
    q: 'Can it be corrected?',
    a: 'Yes. Treatment for squint is possible but the treatment must begin as early as possible for best chances of improvement.',
    iconColor: 'blue',
  },
  {
    q: 'Is there any age bar to treat squint?',
    a: 'Squint can also be corrected in adulthood but giving cosmetic results only with no improvement in vision or 3-D perception (if treated timely in adulthood).',
    iconColor: 'green',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 40

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length)
    }
  }

  function toggleFaq(index) {
    setOpenFaq(prev => (prev === index ? null : index))
  }

  function scrollToForm(e) {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const target =
      document.getElementById('consultation-form-mobile') ||
      document.getElementById('consultation-form')
    if (target) {
      const headerOffset = 80
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
    }
  }

  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Floating Action Buttons pinned to Right Margin (Desktop only) */}
      <div className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
        <a
          href="https://wa.me/919010888066"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-l-full bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white shadow-card transition-transform hover:-translate-x-1"
        >
          <WhatsappIcon size={16} />
          <span>WhatsApp</span>
        </a>

        <a
          href="tel:+919010888066"
          className="flex items-center gap-2 rounded-l-full bg-clinic-navy px-3.5 py-2 text-xs font-bold text-white shadow-card transition-transform hover:-translate-x-1"
        >
          <Phone size={14} />
          <span>Call Now</span>
        </a>

        <a
          href="https://www.google.com/maps?ll=22.70521,75.908882&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=9105442730508839869"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-l-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-card transition-transform hover:-translate-x-1"
        >
          <MapPin size={14} className="text-clinic-navy" />
          <span>Directions</span>
        </a>
      </div>

      {/* =========================================================================
          HERO SECTION: Mobile View (Screen 1) & Desktop View (3 Columns)
          ========================================================================= */}
      <section className="hero-gradient border-b border-slate-100/80 pt-5 pb-7 sm:pt-8 sm:pb-10 lg:pt-9 lg:pb-12">
        <div className="container-clinic">
          {/* MOBILE HERO VIEW (< lg): Matches desktop content with Kids & Adults */}
          <div className="flex flex-col gap-4 lg:hidden">
            {/* 1. Centered Title & Subtitle matching Desktop */}
            <div className="text-center px-1">
              <span className="inline-block text-[11px] sm:text-xs font-black tracking-[0.18em] text-clinic-green uppercase mb-1">
                REAL RESULTS. REAL CONFIDENCE.
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-clinic-navy leading-tight">
                Expert Squint Treatment &amp; Management
                <span className="block text-clinic-green font-extrabold mt-0.5">
                  (for Adults &amp; Kids)
                </span>
              </h1>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 max-w-md mx-auto">
                Advanced technology, expert surgeons and compassionate care to help you see better,
                look better and live better.
              </p>
            </div>

            {/* 2. Before / After: Both Kids (Pediatric) & Adults (Age 18+) */}
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-2.5 sm:p-3 shadow-xs border border-slate-200/80">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 items-center">
                {/* Column 1: Kids (Pediatric) */}
                <div className="flex flex-col gap-1.5">
                  <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-clinic-navy border border-blue-100">
                      Kids (Pediatric)
                    </span>
                  </div>

                  {/* Kids Before Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/11] border border-slate-200/70 shadow-xs">
                    <img
                      src="/images/home/squint-before.jpg"
                      alt="Child squint eyes before surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-before px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white shadow-sm">
                        BEFORE
                      </span>
                    </div>
                  </div>

                  {/* Kids After Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/11] border border-slate-200/70 shadow-xs">
                    <img
                      src="/images/home/squint-after.jpg"
                      alt="Child aligned eyes after squint surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-after px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white shadow-sm">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Adults (Age 18+) */}
                <div className="flex flex-col gap-1.5">
                  <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-clinic-green border border-emerald-100">
                      Adults (Age 18+)
                    </span>
                  </div>

                  {/* Adult Before Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/11] border border-slate-200/70 shadow-xs">
                    <img
                      src="/images/home/adult-squint-before.jpg"
                      alt="Adult squint eyes before surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-before px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white shadow-sm">
                        BEFORE
                      </span>
                    </div>
                  </div>

                  {/* Adult After Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[16/11] border border-slate-200/70 shadow-xs">
                    <img
                      src="/images/home/adult-squint-after.jpg"
                      alt="Adult aligned eyes after squint surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-after px-1.5 py-0.5 text-[8px] font-bold tracking-wider text-white shadow-sm">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-1 text-center text-[10px] text-slate-400 italic">
                * Results may vary from person to person
              </p>
            </div>

            {/* 3. 4-item Stats Row */}
            <div className="grid grid-cols-4 gap-1 py-1 text-center">
              {stats.map(({ value, label, Icon }) => (
                <div key={label} className="flex flex-col items-center">
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 bg-white text-clinic-navy shadow-xs mb-1">
                    <Icon size={13} strokeWidth={2} />
                  </div>
                  <div className="text-xs font-black text-clinic-navy leading-tight">
                    {value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-semibold text-slate-500 leading-tight mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Consultation Form */}
            <div id="consultation-form-mobile" className="scroll-mt-20">
              <ConsultationForm variant="white" />
            </div>

            {/* 5. Action Buttons (Call Now & WhatsApp) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href="tel:+919010888066"
                className="flex items-center justify-center gap-2 rounded-xl bg-clinic-green py-2.5 px-3 text-xs font-bold text-white shadow-sm transition hover:bg-clinic-green-dark"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919010888066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-clinic-green bg-white py-2.5 px-3 text-xs font-bold text-clinic-green shadow-sm transition hover:bg-emerald-50"
              >
                <WhatsappIcon size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* DESKTOP HERO VIEW (hidden lg:grid) */}
          <div className="hidden lg:grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1.25fr_335px] lg:items-stretch xl:gap-7">
            {/* Left Column: Heading, text, stats, CTA buttons */}
            <div className="flex flex-col justify-center">
              <span className="text-[11px] sm:text-xs font-black tracking-[0.18em] text-clinic-green uppercase">
                REAL RESULTS. REAL CONFIDENCE.
              </span>

              <h1 className="mt-2 text-3xl font-black tracking-tight text-clinic-navy sm:text-4xl lg:text-[40px] lg:leading-[1.12]">
                Expert Squint Treatment &amp; Management
                <span className="block text-clinic-green font-extrabold mt-0.5">
                  (for Adults &amp; Kids)
                </span>
              </h1>

              <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Advanced technology, expert surgeons and compassionate care to help you see better,
                look better and live better.
              </p>

              {/* Stats Row */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
                {stats.map(({ value, label, Icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-clinic-navy shadow-xs">
                      <Icon size={15} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm font-black text-clinic-navy leading-tight">
                        {value}
                      </div>
                      <div className="text-xs font-semibold text-slate-500 leading-tight">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-clinic-navy px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-clinic-navy-light shadow-sm active:scale-[0.99] cursor-pointer"
                >
                  <CalendarDays size={14} />
                  Book Appointment
                </button>

                <a
                  href="tel:+919010888066"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-clinic-navy bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-clinic-navy transition hover:bg-slate-50 shadow-sm active:scale-[0.99]"
                >
                  <Phone size={14} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Middle Column: Two Side-by-Side Before & After Columns (Kids & Adults) */}
            <div className="flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 flex-1 items-center">
                {/* Column 1: Kids (Pediatric) */}
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-clinic-navy border border-blue-100">
                      Kids (Pediatric)
                    </span>
                  </div>

                  {/* Kids Before Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200/70 aspect-[16/11]">
                    <img
                      src="/images/home/squint-before.jpg"
                      alt="Child squint eyes before surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-before px-2 py-0.5 text-[9px] font-bold tracking-wider text-white shadow-sm">
                        BEFORE
                      </span>
                    </div>
                  </div>

                  {/* Kids After Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200/70 aspect-[16/11]">
                    <img
                      src="/images/home/squint-after.jpg"
                      alt="Child aligned eyes after squint surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-after px-2 py-0.5 text-[9px] font-bold tracking-wider text-white shadow-sm">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Adults (18+ Years) */}
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-clinic-green border border-emerald-100">
                      Adults (Age 18+)
                    </span>
                  </div>

                  {/* Adult Before Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200/70 aspect-[16/11]">
                    <img
                      src="/images/home/adult-squint-before.jpg"
                      alt="Adult squint eyes before surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-before px-2 py-0.5 text-[9px] font-bold tracking-wider text-white shadow-sm">
                        BEFORE
                      </span>
                    </div>
                  </div>

                  {/* Adult After Card */}
                  <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-sm border border-slate-200/70 aspect-[16/11]">
                    <img
                      src="/images/home/adult-squint-after.jpg"
                      alt="Adult aligned eyes after squint surgery"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="inline-flex items-center rounded-md bg-clinic-badge-after px-2 py-0.5 text-[9px] font-bold tracking-wider text-white shadow-sm">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-2 text-center text-xs text-slate-400 italic">
                * Results may vary from person to person
              </p>
            </div>

            {/* Right Column: White Card Consultation Form */}
            <div id="consultation-form" className="md:col-span-2 lg:col-span-1 h-full flex flex-col scroll-mt-24">
              <ConsultationForm variant="white" className="h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT US & WHY CHOOSE US
          ========================================================================= */}
      <section className="pt-8 pb-0 lg:py-14">
        {/* MOBILE VIEW (< lg): Matches Screen 2 exactly */}
        <div className="flex flex-col lg:hidden">
          {/* About Us Content */}
          <div className="container-clinic">
            <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
              ABOUT US
            </span>

            {/* <h2 className="mt-2 text-2xl font-black tracking-tight text-clinic-navy leading-tight">
              Trusted Experts in <br />
              Squint Treatment
            </h2> */}

            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
              Child Eye Care & Squint Clinic, Indore is a specialized eye care centre dedicated to comprehensive pediatric eye care and squint management for children and adults. Led by Dr. Rishika Mutha, Pediatric Ophthalmologist & Adult Squint Surgeon, the clinic provides evaluation and treatment for conditions such as squint (strabismus), pediatric squint, double vision, nystagmus, lazy eye (amblyopia), myopia, and other childhood eye problems. We focus on accurate diagnosis, personalized treatment planning, and clear counselling to help every patient understand their condition and available treatment options. Our aim is to provide compassionate, advanced, and patient-focused eye care for Kids and Adults in a comfortable environment.
            </p>

            {/* Doctor Card with 15+ badge */}
            <div className="relative mx-auto mt-4 w-full max-w-[240px]">
              <div className="relative z-10 overflow-hidden rounded-2xl bg-white aspect-[4/5] shadow-sm border border-slate-100">
                <img
                  src="/images/about/doctor-portrait-clean.jpg"
                  alt="Squint Specialist Doctor"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -left-2 z-20 rounded-xl bg-clinic-navy px-3.5 py-2 text-white shadow-lg border border-white/20">
                <div className="text-xl font-black leading-none">15+</div>
                <div className="text-[10px] font-medium text-white/90 leading-tight mt-0.5">
                  Years of<br />Experience
                </div>
              </div>
            </div>

            {/* 4 Checkmarks */}
            {/* <div className="mt-6 flex flex-col gap-2">
              {[
                'Experienced Squint Specialists',
                'Advanced Diagnostic & Treatment Technology',
                'Child Friendly Environment',
                'Comprehensive Care & Follow-up',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-clinic-green text-clinic-green">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{text}</span>
                </div>
              ))}
            </div> */}

            <div className="mt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md bg-clinic-navy px-5 py-2.5 text-xs font-bold text-white transition hover:bg-clinic-navy-light shadow-sm"
              >
                Know More About Us
              </Link>
            </div>
          </div>

          {/* Why Choose Us? 2x3 Grid */}
          <div className="mt-8 bg-[#EAF3FA] py-8">
            <div className="container-clinic">
              <h3 className="text-center text-xl font-black tracking-tight text-clinic-navy">
                Why Choose Us?
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {features.map(({ title, subtitle, Icon }) => (
                  <div
                    key={subtitle}
                    className="flex flex-col items-center text-center p-3.5 rounded-2xl border border-slate-100 bg-white shadow-xs"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-clinic-navy mb-2">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className="text-xs font-bold text-clinic-navy leading-tight">{title}</div>
                    <div className="text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                      {subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (lg:grid): Preserved exactly */}
        <div className="container-clinic hidden lg:grid gap-6 lg:grid-cols-[290px_340px_1fr] xl:grid-cols-[320px_360px_1fr] items-center">
          {/* Column 1: Doctor Portrait with Green Offset Background Card */}
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[260px]">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[32px] bg-[#268054] -z-0" />
            <div className="relative z-10 overflow-hidden rounded-[28px] bg-white aspect-[4/5] shadow-sm">
              <img
                src="/images/about/doctor-portrait-clean.jpg"
                alt="Squint Specialist Doctor"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-2 -left-3 z-20 rounded-xl bg-clinic-navy px-4 py-2.5 text-white shadow-xl border border-white/20">
              <div className="text-2xl sm:text-3xl font-black leading-none">15+</div>
              <div className="text-xs font-medium text-white/90 leading-tight mt-1">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Column 2: About Us Text Content */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-black tracking-[0.16em] text-clinic-green uppercase">
              ABOUT US
            </span>

            {/* <h2 className="mt-1.5 text-2xl sm:text-[26px] xl:text-[28px] font-black tracking-tight text-clinic-navy leading-[1.2]">
              Trusted Experts in{' '}
              <span className="text-clinic-green">Squint</span> Treatment
            </h2> */}

            {/* <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              At Child Eye Care &amp; Squint Clinic, we are committed to providing world-class
              squint treatment for children and adults. With advanced technology and expertise,
              we ensure the best possible outcomes for our patients.
            </p> */}
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">
              Child Eye Care & Squint Clinic, Indore is a specialized eye care centre dedicated to comprehensive pediatric eye care and squint management for children and adults. Led by Dr. Rishika Mutha, Pediatric Ophthalmologist & Adult Squint Surgeon, the clinic provides evaluation and treatment for conditions such as squint (strabismus), pediatric squint, double vision, nystagmus, lazy eye (amblyopia), myopia, and other childhood eye problems. We focus on accurate diagnosis, personalized treatment planning, and clear counselling to help every patient understand their condition and available treatment options. Our aim is to provide compassionate, advanced, and patient-focused eye care for Kids and Adults in a comfortable environment.
            </p>

            {/* 4 Checkmark List */}
            {/* <div className="mt-4 flex flex-col gap-2.5">
              {[
                'Experienced Squint Specialists',
                'Advanced Diagnostic & Treatment Technology',
                'Child Friendly Environment',
                'Comprehensive Care & Follow-up',
              ].map((text) => (
                <div key={text} className="flex items-center gap-2.5">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-clinic-green text-clinic-green">
                    <Check size={11} strokeWidth={3} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{text}</span>
                </div>
              ))}
            </div> */}

            <div className="mt-5">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-clinic-navy px-6 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-clinic-navy-light shadow-sm active:scale-[0.99]"
              >
                Know More About Us
              </Link>
            </div>
          </div>

          {/* Column 3: Wide Light-Blue Panel with Top Features and Inset White 4 Stats */}
          <div className="flex flex-col gap-4 rounded-[28px] bg-[#F5F8FC] p-5 sm:p-6 border border-slate-200/60 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 items-center">
              {features.map(({ title, subtitle, Icon }) => (
                <div key={subtitle} className="flex items-center gap-2">
                  <div className="text-clinic-navy shrink-0">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-bold text-slate-800">{title}</div>
                    <div className="text-[11px] font-medium text-slate-500">{subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Inset White 4-column Stats Box */}
            <div className="rounded-2xl border border-slate-100 bg-white py-5 px-4 shadow-sm">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 divide-slate-100 sm:divide-x text-center">
                <div className="flex flex-col items-center">
                  <Users size={24} className="text-clinic-navy mb-1.5" strokeWidth={1.75} />
                  <span className="text-2xl xl:text-3xl font-black text-clinic-green">5000+</span>
                  <span className="text-xs font-semibold text-slate-500 mt-0.5">
                    Happy Patients
                  </span>
                </div>

                <div className="flex flex-col items-center sm:pl-3">
                  <Sparkles size={24} className="text-clinic-navy mb-1.5" strokeWidth={1.75} />
                  <span className="text-2xl xl:text-3xl font-black text-clinic-green">2000+</span>
                  <span className="text-xs font-semibold text-slate-500 mt-0.5">
                    Successful Surgeries
                  </span>
                </div>

                <div className="flex flex-col items-center sm:pl-3">
                  <Award size={24} className="text-clinic-navy mb-1.5" strokeWidth={1.75} />
                  <span className="text-2xl xl:text-3xl font-black text-clinic-green">15+</span>
                  <span className="text-xs font-semibold text-slate-500 mt-0.5">
                    Years Experience
                  </span>
                </div>

                <div className="flex flex-col items-center sm:pl-3">
                  <ThumbsUp size={24} className="text-clinic-navy mb-1.5" strokeWidth={1.75} />
                  <span className="text-2xl xl:text-3xl font-black text-clinic-green">95%</span>
                  <span className="text-xs font-semibold text-slate-500 mt-0.5">
                    Patient Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DUAL JOURNEY (Advanced Techniques + Consultation Journey)
          ========================================================================= */}
      <section className="border-t border-slate-100 bg-white py-8 lg:py-14">
        <div className="container-clinic">
          {/* MOBILE VIEW (< lg): Matches Screen 3 exactly */}
          <div className="flex flex-col gap-8 lg:hidden">
            {/* Our Advanced Techniques (Vertical List) */}
            <div>
              <div className="text-center mb-4">
                <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
                  OUR ADVANCED TECHNIQUES
                </span>
                <h2 className="mt-1.5 text-xl sm:text-2xl font-black tracking-tight text-clinic-navy">
                  Advanced Techniques<br />for Better Results
                </h2>
              </div>

              <div className="flex flex-col gap-2.5">
                {techniques.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-slate-50 text-clinic-navy">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <span className="text-xs font-bold text-slate-800">
                        {name.replace('\n', ' ')}
                      </span>
                    </div>
                    <div className="grid h-6 w-6 place-items-center rounded-full border border-slate-200 text-slate-400">
                      <ChevronRight size={13} strokeWidth={2} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Consultation Journey (Navy Vertical Timeline) */}
            <div className="-mx-4 sm:-mx-6 lg:mx-0 rounded-t-3xl lg:rounded-2xl rounded-b-none lg:rounded-b-2xl bg-clinic-navy p-6 text-white shadow-card">
              <div className="text-center mb-6">
                <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green px-3 py-1 rounded-full uppercase">
                  OUR CONSULTATION JOURNEY
                </span>
                <h2 className="mt-1.5 text-xl font-black tracking-tight text-white">
                  Your Journey to<br />Better Vision
                </h2>
              </div>

              <div className="relative flex flex-col gap-5 pl-2">
                {/* Vertical connecting line */}
                <div className="absolute left-[17px] top-4 bottom-4 w-px border-l-2 border-dashed border-white/25" />
                {consultationSteps.map(({ step, name }) => (
                  <div key={step} className="relative z-10 flex items-center gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white font-black text-xs text-clinic-navy shadow-sm">
                      {step}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {name.replace('\n', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW (lg:grid): Preserved exactly */}
          <div className="hidden lg:grid gap-6 lg:grid-cols-[1fr_auto_1fr] items-center">
            {/* Left: Our Advanced Techniques */}
            <div>
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
                <h2 className="text-center text-xs font-black tracking-[0.16em] text-clinic-green uppercase">
                  OUR ADVANCED TECHNIQUES
                </h2>
                <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 sm:gap-1.5">
                {techniques.map(({ name, Icon }, i) => (
                  <div key={name} className="flex items-center">
                    <div className="flex flex-col items-center text-center w-[72px] sm:w-[84px]">
                      <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-clinic-navy bg-white text-clinic-navy shadow-xs transition hover:border-clinic-green hover:text-clinic-green">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <p className="mt-2 text-xs font-bold leading-tight text-slate-700 whitespace-pre-line">
                        {name}
                      </p>
                    </div>

                    {/* Chevron separator */}
                    {i < techniques.length - 1 && (
                      <div className="hidden sm:block text-clinic-green shrink-0 px-0.5">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Vertical Divider */}
            <div className="hidden lg:block h-32 w-px bg-slate-200/80 mx-2" />

            {/* Right: Our Consultation Journey */}
            <div>
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6">
                <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
                <h2 className="text-center text-xs sm:text-sm font-black tracking-[0.16em] text-clinic-green uppercase">
                  OUR CONSULTATION JOURNEY
                </h2>
                <div className="h-px flex-1 max-w-[80px] bg-slate-200" />
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-1 sm:gap-1.5">
                {consultationSteps.map(({ step, name, Icon }, i) => (
                  <div key={step} className="flex items-center">
                    <div className="flex flex-col items-center text-center w-[72px] sm:w-[84px]">
                      <div className="relative grid h-12 w-12 place-items-center rounded-full border-2 border-dashed border-clinic-navy/70 bg-white text-clinic-navy shadow-xs transition hover:border-clinic-green hover:text-clinic-green">
                        <span className="absolute -top-1.5 rounded-full bg-clinic-mint px-1 text-[9px] font-black text-clinic-green border border-clinic-green/30">
                          {step}
                        </span>
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <p className="mt-2 text-xs font-bold leading-tight text-slate-700 whitespace-pre-line">
                        {name}
                      </p>
                    </div>

                    {/* Chevron separator */}
                    {i < consultationSteps.length - 1 && (
                      <div className="hidden sm:block text-clinic-green shrink-0 px-0.5">
                        <ChevronRight size={14} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: STORIES, VIRTUAL TOUR & PHOTO GALLERY
          ========================================================================= */}
      <section className="container-clinic pt-8 pb-6 lg:pt-14 lg:pb-7">
        {/* MOBILE VIEW (< lg): Matches Screen 4 exactly */}
        <div className="flex flex-col gap-7 lg:hidden">
          {/* Card 1: Before & After Results Carousel (Working Carousel with Kids & Adults) */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
              BEFORE &amp; AFTER RESULTS
            </span>
            <h3 className="mt-1.5 text-xl font-black text-clinic-navy">
              Real Results. Real Stories.
            </h3>
            <div className="w-8 h-0.5 bg-clinic-green mx-auto mt-2 rounded-full" />

            {/* Current Slide Category Tag */}
            <div className="mt-2.5">
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${beforeAfterSlides[currentSlide].categoryColor}`}>
                {beforeAfterSlides[currentSlide].category}
              </span>
            </div>

            {/* Carousel Container with Touch & Arrow Support */}
            <div
              className="relative mt-3 w-full max-w-sm select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Previous Arrow */}
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length)}
                className="absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/95 shadow-md text-clinic-navy hover:bg-white hover:text-clinic-green transition cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>

              {/* Next Arrow */}
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length)}
                className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/95 shadow-md text-clinic-navy hover:bg-white hover:text-clinic-green transition cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>

              {/* Side-by-Side Images for Current Slide */}
              <div className="grid grid-cols-2 gap-2 w-full">
                {/* Before Image */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] border border-slate-200/70 shadow-xs">
                  <img
                    key={`before-${currentSlide}`}
                    src={beforeAfterSlides[currentSlide].before}
                    alt={`${beforeAfterSlides[currentSlide].title} Before`}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center rounded-md bg-clinic-badge-before px-2 py-0.5 text-[9px] font-bold text-white shadow-sm">
                      Before
                    </span>
                  </div>
                </div>

                {/* After Image */}
                <div className="relative overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] border border-slate-200/70 shadow-xs">
                  <img
                    key={`after-${currentSlide}`}
                    src={beforeAfterSlides[currentSlide].after}
                    alt={`${beforeAfterSlides[currentSlide].title} After`}
                    className="h-full w-full object-cover transition-opacity duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-flex items-center rounded-md bg-clinic-badge-after px-2 py-0.5 text-[9px] font-bold text-white shadow-sm">
                      After
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 5 Pagination Dots */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              {beforeAfterSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 cursor-pointer ${currentSlide === idx
                    ? 'h-1.5 w-5 rounded-full bg-clinic-navy'
                    : 'h-1.5 w-1.5 rounded-full bg-slate-300 hover:bg-slate-400'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <p className="mt-1 text-center text-[10px] text-slate-400 italic">
              * Swipe or tap dots to view more cases (Kids &amp; Adults)
            </p>
          </div>

          {/* Card 2: Patient Success Stories */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
              PATIENT SUCCESS STORIES
            </span>
            <h3 className="mt-1.5 text-xl font-black text-clinic-navy">
              Hear From Our Patients
            </h3>

            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative mt-3.5 w-full max-w-sm overflow-hidden rounded-2xl bg-slate-100 aspect-[16/10] cursor-pointer group shadow-sm"
            >
              <img
                src="/images/gallery/pediatric-care.jpg"
                alt="Patient Success Story"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-clinic-navy shadow-md transition-transform group-hover:scale-110">
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 transition"
            >
              <YoutubeIcon size={15} />
              <span>Watch more on YouTube</span>
            </button>
          </div>

          {/* Card 3: Virtual Clinic Tour */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
              VIRTUAL CLINIC TOUR
            </span>
            <h3 className="mt-1.5 text-xl font-black text-clinic-navy">
              Take a 360° Tour<br />of Our Clinic
            </h3>

            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative mt-3.5 w-full max-w-sm overflow-hidden rounded-2xl bg-slate-100 aspect-[16/10] cursor-pointer group shadow-sm"
            >
              <img
                src="/images/home/clinic-virtual-tour.jpg"
                alt="Virtual Clinic Tour"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-clinic-navy shadow-md transition-transform group-hover:scale-110">
                  <Play size={20} fill="currentColor" className="ml-0.5" />
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-clinic-navy hover:text-clinic-green transition"
            >
              <Globe size={15} />
              <span>Explore Our Clinic</span>
            </Link>
          </div>

          {/* Card 4: Photo Gallery */}
          <div className="flex flex-col items-center text-center">
            <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase">
              PHOTO GALLERY
            </span>
            <h3 className="mt-1.5 text-xl font-black text-clinic-navy">
              Inside Our Clinic
            </h3>

            <div className="mt-3.5 grid grid-cols-3 gap-2 w-full max-w-sm">
              {galleryThumbs.map(({ src, alt }, idx) => (
                <div key={idx} className="overflow-hidden rounded-xl bg-slate-100 aspect-square shadow-xs">
                  <img
                    src={src}
                    alt={alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <Link
              to="/gallery"
              className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-clinic-navy hover:text-clinic-green transition"
            >
              <Eye size={15} />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>

        {/* DESKTOP VIEW (hidden lg:grid): Exactly preserved */}
        <div className="hidden lg:grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* Card 1: Patient Success Stories with Playable Video */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md">
            <div>
              <h3 className="text-sm sm:text-base font-black text-clinic-navy uppercase tracking-wide">
                PATIENT SUCCESS STORIES
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">Real stories. Real results.</p>

              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative mt-3 overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] cursor-pointer group"
              >
                <img
                  src="/images/gallery/pediatric-care.jpg"
                  alt="Patient Success Story"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-clinic-navy shadow-md transition-transform group-hover:scale-110">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="mt-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 transition"
            >
              <YoutubeIcon size={16} />
              <span>Watch more on YouTube</span>
            </button>
          </div>

          {/* Card 2: Virtual Clinic Tour */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md">
            <div>
              <h3 className="text-sm sm:text-base font-black text-clinic-navy uppercase tracking-wide">
                VIRTUAL CLINIC TOUR
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">Take a 360° tour of our clinic</p>

              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative mt-3 overflow-hidden rounded-xl bg-slate-100 aspect-[16/10] cursor-pointer group"
              >
                <img
                  src="/images/home/clinic-virtual-tour.jpg"
                  alt="Virtual Clinic Tour"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-white text-clinic-navy shadow-md transition-transform group-hover:scale-110">
                    <Play size={18} fill="currentColor" className="ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className="mt-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-clinic-navy hover:text-clinic-green transition"
            >
              <ExternalLink size={14} />
              <span>Explore Virtual Tour</span>
            </Link>
          </div>

          {/* Card 3: Photo Gallery */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition hover:shadow-md md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-sm sm:text-base font-black text-clinic-navy uppercase tracking-wide">
                PHOTO GALLERY
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">A glimpse of our clinic</p>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {galleryThumbs.map(({ src, alt }, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg bg-slate-100 aspect-square">
                    <img
                      src={src}
                      alt={alt}
                      className="h-full w-full object-cover transition duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/gallery"
              className="mt-3.5 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-clinic-navy hover:text-clinic-green transition"
            >
              <Eye size={14} />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FAQ & BOOK APPOINTMENT CTA (2 COLUMNS)
          ========================================================================= */}
      <section className="container-clinic pt-2 pb-10 sm:pb-16">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 items-start">
          {/* Card: Frequently Asked Questions */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md">
            <div>
              <div className="border-b border-slate-100 pb-3 text-center sm:text-left">
                <span className="inline-block text-[11px] font-black tracking-wider text-clinic-green uppercase mb-1.5 sm:hidden">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="text-base sm:text-lg font-black text-clinic-navy uppercase tracking-wide">
                  FREQUENTLY ASKED QUESTIONS
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  Quick answers to common questions about squint and pediatric eye care
                </p>
              </div>

              <div className="mt-3 flex flex-col divide-y divide-slate-100">
                {faqs.map((faq, idx) => (
                  <div key={faq.q} className="py-2.5">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between gap-3 text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-clinic-green transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle
                          size={15}
                          className={`shrink-0 ${faq.iconColor === 'green' ? 'text-clinic-green' : 'text-clinic-navy'}`}
                        />
                        <span className="leading-snug">{faq.q}</span>
                      </div>
                      <ChevronDown
                        size={15}
                        className={`shrink-0 text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-clinic-green' : ''}`}
                      />
                    </button>
                    {openFaq === idx && (
                      <div className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 pl-6">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center">
              <Link
                to="/faq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-clinic-navy lg:bg-transparent py-2.5 lg:py-0 px-4 text-xs sm:text-sm font-bold text-white lg:text-clinic-navy hover:text-clinic-green transition"
              >
                <HelpCircle size={14} />
                <span>View All FAQs</span>
              </Link>
            </div>
          </div>

          {/* Card: "Don't Ignore Misaligned Eyes" & Book Appointment CTA */}
          <div
            style={{
              background: 'linear-gradient(108deg, #085694 0%, #0c6ea6 32%, #1181a3 65%, #1ca4b7 100%)'
            }}
            className="relative overflow-hidden -mx-4 sm:-mx-6 lg:mx-0 rounded-t-3xl lg:rounded-2xl rounded-b-none lg:rounded-b-2xl p-5 sm:p-7 text-white shadow-card self-start h-auto"
          >
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="grid grid-cols-[1.25fr_1fr] sm:grid-cols-[1.15fr_0.85fr] gap-3 sm:gap-6 items-center">
              {/* Left side text and buttons */}
              <div className="flex flex-col justify-center z-10 text-left">
                <span className="hidden sm:inline-block text-xs font-extrabold uppercase tracking-widest text-sky-100/90">
                  Early Care Matters
                </span>
                <h3 className="text-lg sm:text-2xl font-black leading-tight text-white">
                  Don&apos;t Ignore<br className="sm:hidden" /> Misaligned Eyes
                </h3>
                <p className="mt-1.5 text-[11px] sm:text-sm md:text-base text-blue-50/95 leading-relaxed">
                  Early diagnosis and treatment can make a lifetime of difference.
                </p>

                <div className="mt-3.5 sm:mt-5 flex flex-col sm:flex-row gap-2 sm:gap-2.5 sm:flex-wrap">
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-bold text-[#0b5d9b] shadow-xs hover:bg-slate-50 transition active:scale-[0.98] cursor-pointer whitespace-nowrap"
                  >
                    <CalendarDays size={13} className="text-[#0b5d9b] shrink-0" />
                    <span>Book Appointment</span>
                  </button>

                  <a
                    href="tel:+919010888066"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/70 bg-white/10 px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-bold text-white hover:bg-white/20 transition active:scale-[0.98] whitespace-nowrap"
                  >
                    <Phone size={13} className="shrink-0" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right side: Smiling girl wearing trial frames */}
              <div className="relative flex items-center justify-center sm:justify-end">
                <img
                  src="/images/home/girl-trial-frames.jpg"
                  alt="Child with optometry trial frames"
                  className="h-36 sm:h-48 md:h-52 w-full object-cover object-center rounded-xl shadow-md border-2 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DUMMY YOUTUBE VIDEO MODAL
          ========================================================================= */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between bg-clinic-navy px-4 py-2.5 text-white">
              <div className="flex items-center gap-2">
                <YoutubeIcon size={16} className="text-red-500" />
                <span className="text-xs font-bold">
                  Patient Success Story – Squint Eye Treatment
                </span>
              </div>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="rounded-full p-1 text-slate-300 hover:bg-white/10 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Embedded Responsive YouTube Video */}
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VN_5jz1Za3U?autoplay=1"
                title="Child Eye Care & Squint Clinic Patient Success Story"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
