import {
  Eye,
  HeartPulse,
  ShieldAlert,
  Clock,
  ChevronRight,
  CheckSquare,
  HeartHandshake,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ConsultationForm from '../components/ConsultationForm'

const signs = [
  'Visible misalignment or turning of one eye',
  'Double vision (diplopia) or blurred vision',
  'Eye fatigue, straining, or frequent headaches',
  'Difficulty in depth perception and driving',
  'Head tilting to achieve single vision',
]

const treatments = [
  'Prism Spectacles for Double Vision',
  'Vision Therapy & Eye Muscle Exercises',
  'Adjustable Suture Squint Surgery',
  'Botox Injections for Muscle Balancing',
]

export default function AdultSquint() {
  return (
    <main className="w-full">
      {/* Banner */}
      <PageBanner
        title="Adult Squint"
        subtitle="Specialised evaluation and treatment options for adults with squint."
        imageSrc="/images/adult-squint/adult-squint-hero.jpg"
        imageAlt="Adult Squint specialist clinic photography"
      />

      {/* Top 3-Part Section: Eye Anatomy, What is Adult Squint, Consultation Form */}
      <section className="container-clinic py-10 lg:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_330px] lg:items-start xl:gap-8">
          {/* Column 1: Eye Anatomy & Squint Diagram */}
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <img
                src="/images/adult-squint/adult-consultation.jpg"
                alt="Adult squint specialist consultation"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-2 text-center text-xs font-medium text-slate-500">
              Personalized evaluation for adult ocular alignment
            </p>
          </div>

          {/* Column 2: What is Adult Squint & 4 Feature Pills */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-black tracking-tight text-clinic-navy sm:text-2xl">
              What is Adult Squint?
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Adult squint can be a continuation of childhood strabismus or acquired later due to trauma,
              neurological conditions, diabetes, or thyroid eye disease. It often causes troublesome double
              vision and significant cosmetic or professional concerns.
            </p>

            {/* 4 Feature Pills */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Eye size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Restores Alignment
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <HeartPulse size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Treats Double Vision
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <ShieldAlert size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Boosts Self-Confidence
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Clock size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Rapid Day-Care Recovery
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Consultation Form */}
          <div className="md:col-span-2 lg:col-span-1">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* Bottom 3 Cards: Symptoms, Treatment Options, We Care for You */}
      <section className="container-clinic pb-14 pt-2">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Symptoms in Adults */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:shadow-soft">
            <h3 className="text-base font-bold text-clinic-navy">
              Signs &amp; Symptoms in Adults
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              {signs.map(sign => (
                <li key={sign} className="flex items-start gap-2">
                  <ChevronRight size={15} className="shrink-0 text-clinic-green mt-0.5" />
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Treatment Options */}
          <div className="rounded-xl border border-emerald-200/60 bg-[#EDF8F2] p-5 shadow-xs">
            <h3 className="flex items-center gap-2 text-base font-bold text-clinic-navy">
              <CheckSquare size={16} className="text-clinic-green" />
              Treatment Options
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
              {treatments.map(opt => (
                <li key={opt} className="flex items-center gap-2">
                  <div className="grid h-4 w-4 shrink-0 place-items-center rounded bg-clinic-green text-white">
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-white" strokeWidth="2">
                      <path d="M2.5 6L4.5 8.5L9.5 3.5" />
                    </svg>
                  </div>
                  <span>{opt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: We Care for You */}
          <div className="flex flex-col justify-center rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs text-center transition hover:shadow-soft">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-clinic-green/30 bg-clinic-mint text-clinic-green">
              <HeartHandshake size={24} />
            </div>
            <h3 className="mt-3 text-base font-bold text-clinic-navy">
              Experienced Adult Care
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Adult squint correction is safe and highly successful at any age, restoring natural appearance and vision comfort.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
