import { component$ } from '@builder.io/qwik';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: 'NEWEST' | 'OLDEST' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH';
  listingStatus?: 'For Sale' | 'Sold' | 'Pending';
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  height?: string;
}

export default component$<RealScoutOfficeListingsProps>((props) => {
  const {
    agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout agent ID
    sortOrder = 'NEWEST',
    listingStatus = 'For Sale',
    propertyTypes = ',SFR', // Single Family Residential
    priceMin = '500000',
    priceMax = '600000', // Fixed: was 60000, now 600K for luxury homes
    height = 'auto'
  } = props;

  return (
    <div style={{ height: height }} class="realscout-office-listings-container">
      <realscout-office-listings 
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin}
        price-max={priceMax}
      ></realscout-office-listings>
    </div>
  );
});
