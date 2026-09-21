import PageBanner from '../components/PageBanner'

const faqs = [
  [
    'What is squint (strabismus)?',
    'Squint is a condition where the eyes do not look in the same direction at the same time. One eye may turn in, out, up, or down while the other looks straight ahead.',
  ],
  [
    'Can squint be cured completely?',
    'Yes! Depending on the type and cause, squint can be effectively corrected with glasses, patching therapy, vision exercises, or microsurgical realignment.',
  ],
  [
    'At what age should squint treatment begin?',
    'Treatment should begin as early as possible. Early detection in children prevents lazy eye (amblyopia) and restores 3D stereoscopic vision.',
  ],
  [
    'Is squint surgery safe for children?',
    'Squint surgery is a very common, highly refined microsurgical procedure performed under gentle general anesthesia with rapid recovery.',
  ],
  [
    'Do adults also benefit from squint surgery?',
    'Yes, adults of any age can undergo successful squint realignment to restore straight eyes, eliminate double vision, and boost self-confidence.',
  ],
]

export default function Faq() {
  return (
    <main className="w-full">
      <PageBanner
        title="FAQ"
        subtitle="Clear answers to common questions about pediatric and adult squint treatment."
        imageSrc="/images/faq/faq-hero.jpg"
        imageAlt="FAQ clinic assistance"
      />
      <section className="container-clinic max-w-4xl py-12 lg:py-16">
        <div className="grid gap-3.5">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-clinic-green/50"
            >
              <summary className="cursor-pointer text-sm font-bold text-[#082852] outline-none marker:text-clinic-green">
                {q}
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
