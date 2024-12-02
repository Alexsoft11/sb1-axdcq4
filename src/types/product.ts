export interface Product {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  category: string;
  source?: 'taobao' | '1688' | 'local';
  sourceId?: string;
  stock?: number;
  rating?: number;
  reviews?: number;
  specifications?: Record<string, string>;
  variants?: ProductVariant[];
  shipping?: ShippingInfo;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  stock: number;
  attributes: Record<string, string>;
}

export interface ShippingInfo {
  weight: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  methods: ShippingMethod[];
}

export interface ShippingMethod {
  name: string;
  price: number;
  estimatedDays: number;
}

export interface CartItem extends Product {
  quantity: number;
}