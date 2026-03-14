import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide text-gold-400">
          Every Side Movers
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-gold-400">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
