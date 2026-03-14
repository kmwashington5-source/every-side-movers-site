import Link from 'next/link';

const ctas = [
  { href: 'tel:3128574696', label: 'Call Now' },
  { href: 'sms:3128574696', label: 'Text for Quote' },
  { href: '/#quote-form', label: 'Get Quote' }
];

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-400/30 bg-black/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_rgba(0,0,0,0.55)] md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
        {ctas.map((cta) => (
          <Link
            key={cta.label}
            href={cta.href}
            className="rounded-lg bg-gold-400 px-2 py-3 text-center text-xs font-bold text-black transition hover:bg-gold-500"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
