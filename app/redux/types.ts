export interface SearchResult {
  id: number | string | any;
  name: string;
  location: {
    lat: number;
    lon: number;
  };
  details?: {
    description: string;
    website: string;
    avgStoreTraffic: {} | string | any;
  };
  images: [];
}
