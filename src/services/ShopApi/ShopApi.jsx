import axios from 'axios';

// import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  'https://hszdwnlvuixsdptclrte.supabase.co/rest/v1/Shops?select=*';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemR3bmx2dWl4c2RwdGNscnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5ODM2MTksImV4cCI6MjAwMDU1OTYxOX0.cT2jJZJ9jalNJwBlz4pdzcI_jHJDTgRd5JFd81a1nC0';
// const supabase = createClient(supabaseUrl, supabaseKey);

async function getShops() {
  const baseURL = supabaseUrl;
  const apiKey = supabaseKey;

  try {
    const response = await axios.get(`${baseURL}/shops`, {
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

export default getShops;
