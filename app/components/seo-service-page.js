import Link from 'next/link';

export default function SeoServicePage({ title, intro, bullets, faqs }) {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-4xl rounded-2xl border border-gold-400/30 bg-white/5 p-8">
        <h1 className="text-4xl font-bold text-gold-400">{title}</h1>
        <p className="mt-4 text-white/75">{intro}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">What&apos;s Included</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Service Areas</h2>
            <p className="mt-4 text-white/80">
              We serve downtown Chicago, the North Side, South Loop, West Loop, Lincoln Park, Wicker Park, Hyde Park,
              Logan Square, and nearby suburbs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:3128574696" className="rounded-md bg-gold-400 px-4 py-2 font-medium text-black hover:bg-gold-500">
                Call Now
              </a>
              <a href="sms:3128574696" className="rounded-md border border-white/30 px-4 py-2 font-medium hover:border-gold-400 hover:text-gold-400">
                Text for Quote
              </a>
              <Link href="/#quote-form" className="rounded-md border border-gold-400/50 px-4 py-2 font-medium text-gold-400 hover:bg-gold-400 hover:text-black">
                Get Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-white/10 bg-black/50 p-4">
                <h3 className="font-semibold text-gold-400">{faq.question}</h3>
                <p className="mt-2 text-sm text-white/75">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4 border-t border-white/10 pt-6 text-sm">
          <Link href="/" className="text-gold-400 hover:text-gold-500">
            Back to Homepage
          </Link>
          <Link href="/contact" className="text-gold-400 hover:text-gold-500">
            Contact Every Side Movers
          </Link>
        </div>
      </div>
    </section>
  );
}
