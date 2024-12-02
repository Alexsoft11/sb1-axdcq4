import create from 'zustand';
import { searchTaobaoProducts } from '../services/api/taobao';
import { search1688Products } from '../services/api/1688';
import type { Product } from '../types/product';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  selectedSources: ('taobao' | '1688' | 'local')[];
  categories: string[];
  selectedCategory: string;
  priceRange: { min: number; max: number };
  setSearchQuery: (query: string) => void;
  toggleSource: (source: 'taobao' | '1688' | 'local') => void;
  setSelectedCategory: (category: string) => void;
  setPriceRange: (range: { min: number; max: number }) => void;
  searchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  error: null,
  searchQuery: '',
  selectedSources: ['taobao', '1688', 'local'],
  categories: ['electronics', 'accessories', 'clothing', 'home'],
  selectedCategory: '',
  priceRange: { min: 0, max: Infinity },

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleSource: (source) => {
    const currentSources = get().selectedSources;
    const newSources = currentSources.includes(source)
      ? currentSources.filter(s => s !== source)
      : [...currentSources, source];
    set({ selectedSources: newSources });
  },

  setSelectedCategory: (category) => set({ selectedCategory: category }),

  setPriceRange: (range) => set({ priceRange: range }),

  searchProducts: async () => {
    const { searchQuery, selectedSources } = get();
    
    set({ loading: true, error: null });

    try {
      const results = await Promise.all([
        selectedSources.includes('taobao') ? searchTaobaoProducts(searchQuery) : [],
        selectedSources.includes('1688') ? search1688Products(searchQuery) : [],
        selectedSources.includes('local') ? [] : [] // Add local product search here
      ]);

      const allProducts = results.flat();
      
      // Update categories based on fetched products
      const uniqueCategories = Array.from(
        new Set(allProducts.map(product => product.category))
      );
      
      set({ 
        products: allProducts, 
        categories: uniqueCategories,
        loading: false 
      });
    } catch (error) {
      set({ 
        error: 'Failed to fetch products. Please try again.',
        loading: false 
      });
    }
  }
}));