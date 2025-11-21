export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  description: string;
  imageUrl: string;
  features: string[];
}

export enum ProductCategory {
  FILTER_CLOTH = 'Filter Cloth',
  FILTER_BAG = 'Filter Bags',
  FILTER_CARTRIDGE = 'Filter Cartridges',
  FILTER_CAGE = 'Filter Cages',
  ACCESSORIES = 'Accessories'
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  category: 'Company News' | 'Industry Insight';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type Language = 'en' | 'zh' | 'es' | 'ru' | 'ar';