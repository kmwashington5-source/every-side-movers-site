import SeoServicePage from '../components/seo-service-page';

export const metadata = {
  title: 'Apartment Movers Chicago | Every Side Movers',
  description: 'Apartment movers in Chicago for fast, careful, and stress-free relocations.'
};

export default function ApartmentMoversChicagoPage() {
  return (
    <SeoServicePage
      title="Apartment Movers Chicago"
      intro="Need reliable apartment movers in Chicago? Every Side Movers handles tight hallways, elevator bookings, and protected transport for a smooth city move."
      bullets={[
        'Packing and unpacking for studio to multi-bedroom apartments',
        'Building-compliant moving plans and COI support',
        'Furniture wrapping and floor/wall protection',
        'Efficient loading and unloading for high-rise moves'
      ]}
      faqs={[
        {
          question: 'How far in advance should I book apartment movers in Chicago?',
          answer: 'For best availability, book 1-2 weeks ahead. Same-week options may be available during non-peak days.'
        },
        {
          question: 'Can you move me in and out of elevator buildings?',
          answer: 'Yes. We coordinate timing and access requirements for elevator and loading dock buildings.'
        }
      ]}
    />
  );
}
