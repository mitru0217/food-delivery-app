import { supabase } from './instances';
import { apiPartners } from './services/apiPartners';
import { apiProducts } from './services/apiProducts';

export const supabaseApi = {
  partners: apiPartners(supabase),
  products: apiProducts(supabase),
};
