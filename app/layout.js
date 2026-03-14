import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import MobileCtaBar from './components/mobile-cta-bar';

export const metadata = {
  title: 'Every Side Movers | Premium Moving Services',
  description: 'Luxury-level residential and commercial moving services with transparent pricing.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
