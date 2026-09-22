import PageBanner from '../components/PageBanner'

const faqs = [
  {
    q: 'What is squint?',
    a: 'A squint, or strabismus, is a condition in which the eyes do not align properly. One eye turns inwards, upwards, downwards, or outwards, while the other one focuses at one spot.',
  },
  {
    q: 'How to judge at home if your child has squint?',
    a: 'In children affected eye might turn in towards the nose or outwards or less commonly upwards or downwards. Infant sometimes look like this from birth, they need an eye evaluation to rule out true or pseudosquint around 3-4 months of age. If the squint is constant, might need early examination.',
  },
  {
    q: 'Why early correction is advised?',
    a: 'Squint in children less than 7 years old may impair visual development of the affected eye. Unless treated before the age of 7–8 years, this can become permanent. The fixating eye will see clearly, while the deviating eye will have reduced visual acuity permanently and underdeveloped 3D vision.',
  },
  {
    q: 'What are the treatment options?',
    a: (
      <div>
        <p className="mb-1.5 font-medium text-slate-700">Treatment options:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Glasses &ndash; some type of squint can be corrected by glasses only, others need surgical correction.</li>
          <li>Special glasses in some cases &ndash; prismatic glasses.</li>
          <li>Exercises.</li>
          <li>Surgery.</li>
        </ul>
      </div>
    ),
  },
  {
    q: 'Can it be corrected?',
    a: 'Yes. Treatment for squint is possible but the treatment must begin as early as possible for best chances of improvement.',
  },
  {
    q: 'Is there any age bar to treat squint?',
    a: 'Squint can also be corrected in adulthood but giving cosmetic results only with no improvement in vision or 3-D perception (if treated timely in adulthood).',
  },
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
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-clinic-green/50"
            >
              <summary className="cursor-pointer text-sm sm:text-base font-bold text-[#082852] outline-none marker:text-clinic-green">
                {q}
              </summary>
              <div className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600">{a}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
