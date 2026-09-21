export default function DummyImage({ src, alt, className = '', label = 'Clinic Image' }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-200 via-blue-100 to-emerald-100 ${className}`}>
      {src ? (
        <img src={src} alt={alt || label} className="h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 opacity-50"
            style={{backgroundImage: 'linear-gradient(135deg, rgba(9,44,97,.12) 25%, transparent 25%, transparent 50%, rgba(59,141,98,.12) 50%, rgba(59,141,98,.12) 75%, transparent 75%)', backgroundSize: '34px 34px'}} />
          <div className="absolute inset-0 grid place-items-center">
            <div className="rounded-xl border border-white/70 bg-white/70 px-5 py-3 text-center shadow-sm backdrop-blur">
              <div className="text-sm font-bold text-clinic-navy">{label}</div>
              <div className="mt-1 text-xs text-slate-500">Replace with clinic photo</div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
