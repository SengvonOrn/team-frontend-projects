export interface deals {
  id: number;
  name: string;
  description: string;
  image?: string;
  price?: number;
  rating?: number;
}

export interface TopDealProps {
  topDeals: deals[];
}
