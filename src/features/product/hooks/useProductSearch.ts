import { useState } from 'react';
import { searchTaobaoProducts } from '../../../services/api/taobao';
import { search1688Products } from '../../../services/api/1688';
import type { Product } from '../../../types/product';

export function useProductSearch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [results, setResults] = useState<Product[]>([]);

  const searchProducts = async (query: string, sources: ('taobao' | '1688' | 'local')[]) => {
    setLoading(true);
    setError(null);

    try {
      const searchPromises = [
        sources.includes('taobao') ? searchTaobaoProducts(query) : [],
        sources.includes('1688') ? search1688Products(query) : [],
        sources.includes('local') ? [] : [] // Local search implementation
      ];

      const results = await Promise.all(searchPromises);
      const combinedResults = results.flat();
      setResults(combinedResults);
    } catch (err) {
      setError('Failed to fetch products. Please try again.');
    } finally {
      setLoading(false);
    }

    return results;
  };

  return {
    loading,
    error,
    results,
    searchProducts
  };
}