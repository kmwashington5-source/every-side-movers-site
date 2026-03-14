const offerings = [
  {
    title: 'Packing & Unpacking',
    detail: 'Premium materials, labeled inventory, and room-by-room unpacking assistance.'
  },
  {
    title: 'Furniture Protection',
    detail: 'Protective wraps, custom crating, and careful handling for high-value items.'
  },
  {
    title: 'Storage Solutions',
    detail: 'Climate-controlled short and long-term storage for flexible move timelines.'
  },
  {
    title: 'Specialty Items',
    detail: 'Pianos, antiques, artwork, and fragile electronics moved by trained specialists.'
  }
];

export default function ServicesPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-bold">Our Services</h1>
      <p className="mt-4 max-w-2xl text-white/75">
        Every Side Movers provides tailored relocation services that blend efficiency with luxury-level care.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {offerings.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-gold-400">{item.title}</h2>
            <p className="mt-3 text-white/75">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
