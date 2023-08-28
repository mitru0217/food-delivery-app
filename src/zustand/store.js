import { create } from 'zustand';

export const useBadgeCountStore = create(set => ({
  badgeCount: 0,
  setBadgeCount: count => set({ badgeCount: count }),
}));

export const useShopStore = create(set => ({
  partners: [],
  products: [],
  selectedPartner: null,
  isLoading: false,
  error: null,
  setPartners: partners => set({ partners }),
  setProducts: products => set({ products }),
  setSelectedPartner: partnerId => set({ selectedPartner: partnerId }),
  setIsLoading: loading => set({ isLoading: loading }),
  setError: error => set({ error }),
}));
