import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-gold-400">Every Side Movers</h3>
          <p className="mt-2 text-sm text-white/70">
            Premium moving experiences for homes and businesses throughout the region.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <div className="mt-2 flex flex-col gap-1 text-sm text-white/70">
            <Link href="/services" className="hover:text-gold-400">
              Services
            </Link>
            <Link href="/pricing" className="hover:text-gold-400">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-gold-400">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <p className="mt-2 text-sm text-white/70">
            <a href="tel:3128574696" className="hover:text-gold-400">
              (312) 857-4696
            </a>
          </p>
          <p className="text-sm text-white/70">hello@everysidemovers.com</p>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Every Side Movers. All rights reserved.</p>
    </footer>
  );
}
