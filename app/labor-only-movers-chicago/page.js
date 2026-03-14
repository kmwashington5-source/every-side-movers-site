import SeoServicePage from '../components/seo-service-page';

export const metadata = {
  title: 'Labor Only Movers Chicago | Every Side Movers',
  description: 'Hire labor only movers in Chicago for loading, unloading, and in-home moving help.'
};

export default function LaborOnlyMoversChicagoPage() {
  return (
    <SeoServicePage
      title="Labor Only Movers Chicago"
      intro="When you already have a truck or container, our labor-only movers in Chicago provide the muscle and strategy to load or unload safely."
      bullets={[
        'Professional loading and unloading for rental trucks and pods',
        'In-home furniture rearranging and heavy item moving',
        'Disassembly and reassembly of common furniture',
        'Careful handling of fragile and oversized items'
      ]}
      faqs={[
        {
          question: 'Do labor-only movers bring tools and equipment?',
          answer: 'Yes. Our crew arrives with dollies, straps, and standard tools to perform loading and setup efficiently.'
        },
        {
          question: 'Can I book labor-only moving service by the hour?',
          answer: 'Yes. We offer flexible hourly labor options based on your move size and timing.'
        }
      ]}
    />
  );
}
