import SeoServicePage from '../components/seo-service-page';

export const metadata = {
  title: 'Furniture Movers Chicago | Every Side Movers',
  description: 'Furniture movers in Chicago for couches, beds, antiques, and heavy-item transport with premium protection.'
};

export default function FurnitureMoversChicagoPage() {
  return (
    <SeoServicePage
      title="Furniture Movers Chicago"
      intro="From single-item deliveries to full-room transfers, our Chicago furniture movers protect your pieces and your property every step of the way."
      bullets={[
        'Single-item or multi-item furniture moving services',
        'Protective wrapping for delicate and luxury furniture',
        'Stair carry and elevator-safe transport methods',
        'Assembly, placement, and setup at destination'
      ]}
      faqs={[
        {
          question: 'Can you move oversized furniture in tight spaces?',
          answer: 'Yes. We plan the route, remove obstacles, and use proper lifting techniques to move large pieces safely.'
        },
        {
          question: 'Do you offer furniture-only moving without a full move?',
          answer: 'Absolutely. We can move one item or several pieces without requiring a full-home relocation package.'
        }
      ]}
    />
  );
}
