import SeoServicePage from '../components/seo-service-page';

export const metadata = {
  title: 'Same Day Movers Chicago | Every Side Movers',
  description: 'Same day movers in Chicago for urgent local moves, last-minute help, and rapid response service.'
};

export default function SameDayMoversChicagoPage() {
  return (
    <SeoServicePage
      title="Same Day Movers Chicago"
      intro="Need emergency moving help today? Our same-day movers in Chicago respond quickly with trained crews and premium care."
      bullets={[
        'Fast dispatch for urgent apartment, condo, and office moves',
        'Short-notice packing and furniture protection',
        'Evening and weekend move availability when possible',
        'Transparent pricing without surprise add-ons'
      ]}
      faqs={[
        {
          question: 'How quickly can you provide same-day movers?',
          answer: 'In many cases we can dispatch within hours, depending on location, crew availability, and move scope.'
        },
        {
          question: 'Do same-day moves cost more?',
          answer: 'Rates depend on timing and complexity, but we always provide a clear quote before work begins.'
        }
      ]}
    />
  );
}
