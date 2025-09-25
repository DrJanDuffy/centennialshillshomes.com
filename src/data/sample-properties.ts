export interface PropertyMarker {
  id: string;
  lat: number;
  lng: number;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'for-sale' | 'sold' | 'pending';
  image?: string;
}

export const centennialHillsProperties: PropertyMarker[] = [
  {
    id: '1',
    lat: 36.3080,
    lng: -115.2980,
    price: '675000',
    address: '1234 Mountain View Dr, Las Vegas, NV',
    beds: 4,
    baths: 3,
    sqft: 2800,
    status: 'for-sale'
  },
  {
    id: '2',
    lat: 36.3050,
    lng: -115.2950,
    price: '725000',
    address: '5678 Centennial Pkwy, Las Vegas, NV',
    beds: 5,
    baths: 4,
    sqft: 3200,
    status: 'for-sale'
  },
  {
    id: '3',
    lat: 36.3100,
    lng: -115.2920,
    price: '650000',
    address: '9012 Hillside Ave, Las Vegas, NV',
    beds: 3,
    baths: 2,
    sqft: 2400,
    status: 'sold'
  },
  {
    id: '4',
    lat: 36.3020,
    lng: -115.3000,
    price: '750000',
    address: '3456 Valley Ridge St, Las Vegas, NV',
    beds: 4,
    baths: 3,
    sqft: 2900,
    status: 'pending'
  },
  {
    id: '5',
    lat: 36.3150,
    lng: -115.3050,
    price: '620000',
    address: '7890 Desert Vista Way, Las Vegas, NV',
    beds: 3,
    baths: 2,
    sqft: 2200,
    status: 'for-sale'
  },
  {
    id: '6',
    lat: 36.2980,
    lng: -115.2880,
    price: '680000',
    address: '2468 Canyon Crest Dr, Las Vegas, NV',
    beds: 4,
    baths: 3,
    sqft: 2600,
    status: 'for-sale'
  }
];

export const luxuryProperties: PropertyMarker[] = [
  {
    id: 'lux1',
    lat: 36.1200,
    lng: -115.1800,
    price: '1,250,000',
    address: '1000 Red Rock Country Club Dr, Las Vegas, NV',
    beds: 5,
    baths: 6,
    sqft: 4500,
    status: 'for-sale'
  },
  {
    id: 'lux2',
    lat: 36.1250,
    lng: -115.1750,
    price: '1,450,000',
    address: '1200 The Ridges Blvd, Las Vegas, NV',
    beds: 6,
    baths: 7,
    sqft: 5200,
    status: 'for-sale'
  },
  {
    id: 'lux3',
    lat: 36.1300,
    lng: -115.1700,
    price: '1,100,000',
    address: '1400 Summerlin West Dr, Las Vegas, NV',
    beds: 5,
    baths: 5,
    sqft: 4100,
    status: 'sold'
  }
];





