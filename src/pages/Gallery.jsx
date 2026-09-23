import PageBanner from '../components/PageBanner'

const galleryItems = [
  { title: 'Clinic Reception', src: '/images/gallery/clinic-reception.jpg' },
  { title: 'Doctor Consultation Room', src: '/images/gallery/doctor-consultation.jpg' },
  { title: 'Pediatric Care & Patch Therapy', src: '/images/gallery/pediatric-care.jpg' },
  { title: 'Diagnostic & Orthoptic Lab', src: '/images/gallery/diagnostic-lab.jpg' },
  { title: 'Post-Op Successful Correction', src: '/images/gallery/squint-after.jpg' },
  { title: 'Pre-Op Clinical Assessment', src: '/images/gallery/squint-before.jpg' },
]

export default function Gallery() {
  return (
    <main className="w-full">
      <PageBanner
        title="Gallery"
        subtitle="A glimpse of our clinic environment, advanced equipment, and patient care."
        imageSrc="/images/gallery/gallery-hero.jpg"
        imageAlt="Clinic Gallery"
      />
      <section className="container-clinic py-12 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map(({ title, src }) => (
            <div
              key={title}
              className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-sm font-bold text-clinic-navy">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
