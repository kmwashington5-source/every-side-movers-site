const plans = [
  { name: 'Essentials', price: '$349', info: 'Studio or small one-bedroom moves. 2 movers, truck, and protective wraps.' },
  { name: 'Signature', price: '$699', info: '2-3 bedroom homes, full packing support, and furniture assembly.' },
  { name: 'Elite', price: 'Custom', info: 'Large estates, business relocations, and long-distance concierge service.' }
];

export default function PricingPage() {
  return (
    <section className="section-shell">
      <h1 className="text-4xl font-bold">Transparent Pricing</h1>
      <p className="mt-4 max-w-2xl text-white/75">Choose a moving package built around your space, timeline, and service level.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-xl border border-gold-400/25 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="mt-3 text-3xl font-bold text-gold-400">{plan.price}</p>
            <p className="mt-4 text-white/75">{plan.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
