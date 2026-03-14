import Link from 'next/link';

const ctas = [
  { href: 'tel:3128574696', label: 'Call Now' },
  { href: 'sms:3128574696', label: 'Text for Quote' },
  { href: '/#quote-form', label: 'Get Quote' }
];

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-400/30 bg-black/95 p-2 shadow-[0_-8px_24px_rgba(0,0,0,0.45)] md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
        {ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="rounded-md border border-gold-400/40 bg-white/5 px-2 py-3 text-center text-xs font-semibold text-gold-400 transition hover:border-gold-400 hover:bg-gold-400 hover:text-black"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
