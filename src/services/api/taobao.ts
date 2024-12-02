import axios from 'axios';
import type { Product } from '../../types/product';

const TAOBAO_API_BASE = 'https://api.taobao.com/api';

export async function searchTaobaoProducts(query: string): Promise<Product[]> {
  try {
    // Note: In a real implementation, you would use actual Taobao API credentials
    const response = await axios.get(`${TAOBAO_API_BASE}/search`, {
      params: { q: query }
    });
    
    return response.data.items.map(transformTaobaoProduct);
  } catch (error) {
    console.error('Error fetching Taobao products:', error);
    return [];
  }
}

function transformTaobaoProduct(item: any): Product {
  return {
    id: `taobao-${item.num_iid}`,
    name: item.title,
    price: item.price,
    originalPrice: item.original_price,
    image: item.pic_url,
    description: item.description,
    category: item.category,
    source: 'taobao',
    sourceId: item.num_iid,
    stock: item.num,
    rating: item.rating,
    reviews: item.review_count,
    specifications: item.props_list,
    shipping: {
      weight: item.weight,
      dimensions: {
        length: item.length,
        width: item.width,
        height: item.height
      },
      methods: item.shipping_methods
    }
  };
}