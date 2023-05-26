import axios from 'axios';

async function fetchProductsData() {
  const baseURL = 'https://hszdwnlvuixsdptclrte.supabase.co';
  const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemR3bmx2dWl4c2RwdGNscnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5ODM2MTksImV4cCI6MjAwMDU1OTYxOX0.cT2jJZJ9jalNJwBlz4pdzcI_jHJDTgRd5JFd81a1nC0';

  try {
    const response = await axios.get(`${baseURL}/products`, {
      headers: {
        apikey: apiKey,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching SupaBase data:', error);
    throw error;
  }
}

export default fetchProductsData;
