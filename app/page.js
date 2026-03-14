import Link from 'next/link';

const services = [
  {
    title: 'Residential Moves',
    description: 'White-glove packing, transportation, and setup for apartments, condos, and homes.'
  },
  {
    title: 'Commercial Relocation',
    description: 'Minimize downtime with strategic office moves, equipment handling, and post-move support.'
  },
  {
    title: 'Long-Distance Moving',
    description: 'Cross-state relocation with dedicated routes, live updates, and secure inventory handling.'
  }
];

const reviews = [
  {
    name: 'A. Johnson',
    text: 'Professional from quote to final box. The team handled our designer furniture flawlessly.'
  },
  {
    name: 'M. Chen',
    text: 'Best move we have ever had. Clean trucks, punctual crew, and zero surprises on pricing.'
  },
  {
    name: 'S. Patel',
    text: 'Our office move was completed overnight and we opened on time the next day.'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full border border-gold-400/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gold-400">
            Premium Moving Experience
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Move smarter with <span className="gold-text">Every Side Movers</span>
          </h1>
          <p className="mt-5 max-w-xl text-white/75">
            From careful packing to final placement, we deliver concierge-level moving services designed for comfort,
            speed, and complete peace of mind.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:3128574696" className="rounded-md bg-gold-400 px-5 py-3 font-medium text-black transition hover:bg-gold-500">
              Call Now
            </a>
            <a href="sms:3128574696" className="rounded-md border border-white/30 px-5 py-3 font-medium transition hover:border-gold-400 hover:text-gold-400">
              Text for Quote
            </a>
            <Link href="/#quote-form" className="rounded-md border border-gold-400/50 px-5 py-3 font-medium text-gold-400 transition hover:bg-gold-400 hover:text-black">
              Get Quote
            </Link>
          </div>
        </div>

        <div id="quote-form" className="rounded-2xl border border-gold-400/40 bg-white/5 p-6 shadow-glow scroll-mt-24">
          <h2 className="text-2xl font-semibold">Request Your Quote</h2>
          <p className="mt-2 text-sm text-white/70">Receive a custom moving estimate within one business day.</p>
          <form
            className="mt-6 grid gap-4"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input name="fullName" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Full Name" required />
            <input name="phone" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Phone" type="tel" required />
            <input name="email" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Email" type="email" required />
            <input name="moveDate" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" type="date" aria-label="Move Date" required />
            <input name="serviceType" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Service Type" required />
            <input name="pickupLocation" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Pickup Location" required />
            <input name="dropoffLocation" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Dropoff Location" required />
            <input name="moveSize" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Move Size" required />
            <input name="stairsElevator" className="rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Stairs/Elevator" required />
            <textarea name="message" className="min-h-24 rounded-md border border-white/20 bg-black/50 px-4 py-3 text-sm" placeholder="Message" />
            <button type="submit" className="rounded-md bg-gold-400 px-5 py-3 font-medium text-black transition hover:bg-gold-500">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="text-3xl font-semibold">Featured Services</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-gold-400">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Customer Reviews</h2>
            <p className="mt-2 text-white/75">Trusted by Chicago-area homeowners and businesses.</p>
          </div>
          <a
            href="https://www.google.com/search?q=Every+Side+Movers+reviews"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-gold-400/50 px-5 py-3 font-medium text-gold-400 transition hover:bg-gold-400 hover:text-black"
          >
            See More Reviews
          </a>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.name} className="rounded-xl border border-gold-400/20 bg-black/70 p-6">
              <p className="text-white/80">“{review.text}”</p>
              <footer className="mt-4 text-sm text-gold-400">— {review.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-2xl border border-gold-400/40 bg-gradient-to-r from-gold-400/20 to-white/5 p-8 text-center">
          <h2 className="text-3xl font-semibold">Ready for a seamless move?</h2>
          <p className="mt-3 text-white/75">Let our elite team handle the heavy lifting while you focus on your next chapter.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/pricing" className="rounded-md bg-gold-400 px-5 py-3 font-medium text-black hover:bg-gold-500">
              View Pricing
            </Link>
            <Link href="/contact" className="rounded-md border border-white/40 px-5 py-3 font-medium hover:border-gold-400 hover:text-gold-400">
              Book Your Move
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
