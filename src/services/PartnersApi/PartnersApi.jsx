import axios from 'axios';
import { Authorization } from '../../utils/authorization';

const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

async function getPartners() {
  try {
    const response = await axios.get(supabaseUrl, {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: Authorization,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching SupaBase data:', error);
    throw error;
  }
}

export default getPartners;
