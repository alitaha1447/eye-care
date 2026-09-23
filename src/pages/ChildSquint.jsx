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
  'One eye turns in, out, up or down',
  'Child closes one eye in bright light',
  'Tilting head while looking',
  'Complaints of headache or eye strain',
  'Poor concentration in studies',
]

const treatments = [
  'Observation & Regular Monitoring',
  'Glasses & Patching Therapy',
  'Vision Therapy & Exercises',
  'Squint Surgery (if needed)',
]

export default function ChildSquint() {
  return (
    <main className="w-full">
      {/* Banner */}
      <PageBanner
        title="Child Squint"
        subtitle="Early diagnosis and treatment can help your child see better, learn better and live better."
        imageSrc="/images/child-squint/child-squint-hero.jpg"
        imageAlt="Child Squint clinic photography"
      />

      {/* Top 3-Part Section: Eye Diagram, What is Child Squint, Consultation Form */}
      <section className="container-clinic py-10 lg:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_330px] lg:items-start xl:gap-8">
          {/* Column 1: Eye Anatomy & Squint Medical Diagram */}
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <img
                src="/images/child-squint/eye-squint-diagram.jpg"
                alt="Eye anatomy cross section and strabismus misalignment diagram"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-2 text-center text-xs font-medium text-slate-500">
              Corneal light reflection &amp; ocular alignment
            </p>
          </div>

          {/* Column 2: What is Child Squint & 4 Feature Pills */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-black tracking-tight text-clinic-navy sm:text-2xl">
              What is Child Squint?
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Squint (Strabismus) is a condition in which the eyes do not align properly. It can affect
              one eye or both eyes and may lead to lazy eye (amblyopia) and poor vision development if
              not treated early.
            </p>

            {/* 4 Feature Pills */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Eye size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Affects Vision Development
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <HeartPulse size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  May Cause Lazy Eye
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <ShieldAlert size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Can Impact Confidence
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Clock size={14} />
                </div>
                <span className="mt-2 text-xs font-bold leading-tight text-slate-700">
                  Early Treatment Gives Best Results
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

      {/* Bottom 3 Cards: Signs of Squint, Treatment Options, We Care for Your Child */}
      <section className="container-clinic pb-14 pt-2">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Signs of Squint in Children */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:shadow-soft">
            <h3 className="text-base font-bold text-clinic-navy">
              Signs of Squint in Children
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

          {/* Card 3: We Care for Your Child */}
          <div className="flex flex-col justify-center rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs text-center transition hover:shadow-soft">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-clinic-green/30 bg-clinic-mint text-clinic-green">
              <HeartHandshake size={24} />
            </div>
            <h3 className="mt-3 text-base font-bold text-clinic-navy">
              We Care for Your Child
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Our child-friendly environment and expert care ensure a comfortable experience for your little one.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
