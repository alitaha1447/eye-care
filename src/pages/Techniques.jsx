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

const methods = [
  'Adjustable suture strabismus surgery',
  'High-precision prism & orthoptic evaluation',
  'Micro-incisional muscle surgery (MISS)',
  'Digital binocular vision mapping',
  'Non-surgical vision therapy & patching',
]

const advantages = [
  'Pinpoint millimeter accuracy',
  'Minimal tissue trauma & quick healing',
  'Reduced post-operative discomfort',
  'Tailored personalized surgical plans',
]

export default function Techniques() {
  return (
    <main className="w-full">
      {/* Banner */}
      <PageBanner
        title="Advanced Techniques"
        subtitle="Modern diagnostic and surgical techniques for personalised squint care."
        imageSrc="/images/techniques/techniques-hero.jpg"
        imageAlt="Advanced squint surgical techniques"
      />

      {/* Top 3-Part Section: Surgical Anatomy, Techniques Overview, Consultation Form */}
      <section className="container-clinic py-10 lg:py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.1fr_1.3fr_330px] lg:items-start xl:gap-8">
          {/* Column 1: Eye Anatomy & Diagram */}
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <img
                src="/images/techniques/surgical-diagram.jpg"
                alt="High precision eye muscle surgical techniques"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-2 text-center text-[11px] font-medium text-slate-500">
              High precision microscopic ocular realignment
            </p>
          </div>

          {/* Column 2: Overview & 4 Feature Pills */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-black tracking-tight text-[#082852] sm:text-2xl">
              Our Advanced Techniques
            </h2>

            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              We employ world-class microscopic surgical techniques including adjustable sutures,
              minimally invasive strabismus surgery (MISS), and sophisticated binocular vision assessment
              tools to deliver predictable and lasting realignment.
            </p>

            {/* 4 Feature Pills */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Eye size={14} />
                </div>
                <span className="mt-2 text-[10px] font-bold leading-tight text-slate-700">
                  Microscopic Precision
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <HeartPulse size={14} />
                </div>
                <span className="mt-2 text-[10px] font-bold leading-tight text-slate-700">
                  Adjustable Sutures
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <ShieldAlert size={14} />
                </div>
                <span className="mt-2 text-[10px] font-bold leading-tight text-slate-700">
                  Safety First Protocol
                </span>
              </div>

              <div className="flex flex-col items-center rounded-lg bg-[#F2F7FB] p-2.5 text-center">
                <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-clinic-green shadow-xs">
                  <Clock size={14} />
                </div>
                <span className="mt-2 text-[10px] font-bold leading-tight text-slate-700">
                  Fast Healing &amp; Return
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

      {/* Bottom 3 Cards: Methods, Clinical Advantages, Tech Infrastructure */}
      <section className="container-clinic pb-14 pt-2">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Key Methods */}
          <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:shadow-soft">
            <h3 className="text-sm font-bold text-[#082852]">
              Key Diagnostic &amp; Surgical Methods
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-600 font-medium">
              {methods.map(item => (
                <li key={item} className="flex items-start gap-2">
                  <ChevronRight size={15} className="shrink-0 text-clinic-green mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Clinical Advantages */}
          <div className="rounded-xl border border-emerald-200/60 bg-[#EDF8F2] p-5 shadow-xs">
            <h3 className="flex items-center gap-2 text-sm font-bold text-[#082852]">
              <CheckSquare size={16} className="text-clinic-green" />
              Clinical Advantages
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-700 font-medium">
              {advantages.map(item => (
                <li key={item} className="flex items-center gap-2">
                  <div className="grid h-4 w-4 shrink-0 place-items-center rounded bg-clinic-green text-white">
                    <svg viewBox="0 0 12 12" className="h-3 w-3 fill-none stroke-white" strokeWidth="2">
                      <path d="M2.5 6L4.5 8.5L9.5 3.5" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: World-Class Facility */}
          <div className="flex flex-col justify-center rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs text-center transition hover:shadow-soft">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-clinic-green/30 bg-clinic-mint text-clinic-green">
              <HeartHandshake size={24} />
            </div>
            <h3 className="mt-3 text-sm font-bold text-[#082852]">
              State-of-the-Art Infrastructure
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Equipped with precision surgical microscopes, sterile modular operation suites, and orthoptic diagnostics.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
