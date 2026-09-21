import {
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  ThumbsUp,
  Target,
  Eye,
  HeartHandshake,
} from 'lucide-react'
import PageBanner from '../components/PageBanner'

const stats = [
  { value: '15+', label: 'Years Experience', Icon: Award },
  { value: '5000+', label: 'Happy Patients', Icon: Users },
  { value: '2000+', label: 'Successful Surgeries', Icon: Sparkles },
  { value: '95%', label: 'Patient Satisfaction', Icon: ThumbsUp },
]

const checklist = [
  'Experienced Squint Specialists',
  'Advanced Diagnostic & Treatment Technology',
  'Child Friendly Environment',
  'Comprehensive Care & Follow-up',
]

const pillars = [
  {
    title: 'Our Mission',
    text: 'To provide compassionate, advanced and ethical eye care that enhances vision and improves quality of life.',
    Icon: Target,
  },
  {
    title: 'Our Vision',
    text: 'To be a trusted leader in squint care, recognized for excellence, innovation and patient satisfaction.',
    Icon: Eye,
  },
  {
    title: 'Our Values',
    text: 'Compassion, Integrity, Excellence, Innovation, Patient First.',
    Icon: HeartHandshake,
  },
]

export default function About() {
  return (
    <main className="w-full">
      {/* Top Banner with Reception Photo */}
      <PageBanner
        title="About Us"
        subtitle="Trusted experts dedicated to bringing clarity to your vision."
        imageSrc="/images/about/about-hero.jpg"
        imageAlt="Child Eye Care & Squint Clinic modern reception interior"
      />

      {/* World-Class Care Section: 3-column layout (Text, 2x2 Stats, Doctor Photo) */}
      <section className="container-clinic py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr_1.1fr] lg:items-center xl:gap-10">
          {/* Left Column: Heading, intro, checklist, Know More button */}
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#082852] sm:text-3xl">
              World-Class Care for
              <span className="block">Better Vision</span>
            </h2>

            <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
              At Child Eye Care &amp; Squint Clinic, we are committed to providing world-class squint
              treatment for children and adults. With advanced technology and expertise, we ensure
              the best possible outcomes for our patients.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {checklist.map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="shrink-0 text-clinic-green fill-clinic-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                type="button"
                className="green-btn !rounded-md !py-2.5 !px-6 text-xs font-bold"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Middle Column: 2x2 Stat Cards */}
          <div className="grid grid-cols-2 gap-3.5">
            {stats.map(({ value, label, Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 text-center shadow-xs transition hover:shadow-soft"
              >
                <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-50 text-[#082852]">
                  <Icon size={20} />
                </div>
                <div className="mt-2 text-xl font-black text-[#082852] sm:text-2xl">
                  {value}
                </div>
                <div className="mt-1 text-[11px] font-medium text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Doctor Portrait Photo */}
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-slate-50 shadow-soft">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/images/about/doctor-portrait.jpg"
                alt="Expert squint surgeon specialist in clinic"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom 3 Cards: Our Mission, Our Vision, Our Values */}
      <section className="border-t border-slate-100 bg-white py-10 lg:py-12">
        <div className="container-clinic">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(({ title, text, Icon }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-xl border border-slate-200/70 bg-white p-5 shadow-xs transition hover:border-clinic-green/40 hover:shadow-soft"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-clinic-green/30 bg-clinic-mint text-clinic-green">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#082852]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

