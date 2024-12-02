import axios from 'axios';
import type { Product } from '../../types/product';

const API_1688_BASE = 'https://api.1688.com/api';

export async function search1688Products(query: string): Promise<Product[]> {
  try {
    // Note: In a real implementation, you would use actual 1688 API credentials
    const response = await axios.get(`${API_1688_BASE}/search`, {
      params: { q: query }
    });
    
    return response.data.items.map(transform1688Product);
  } catch (error) {
    console.error('Error fetching 1688 products:', error);
    return [];
  }
}

function transform1688Product(item: any): Product {
  return {
    id: `1688-${item.offerId}`,
    name: item.subject,
    price: item.price,
    originalPrice: item.originalPrice,
    image: item.imageUrl,
    description: item.description,
    category: item.categoryName,
    source: '1688',
    sourceId: item.offerId,
    stock: item.amountOnSale,
    specifications: item.attributes,
    variants: item.skuInfos?.map((sku: any) => ({
      id: sku.skuId,
      name: sku.name,
      price: sku.price,
      stock: sku.canBookCount,
      attributes: sku.attributes
    })),
    shipping: {
      weight: item.weight,
      dimensions: {
        length: item.length,
        width: item.width,
        height: item.height
      },
      methods: item.freightTemplates
    }
  };
}