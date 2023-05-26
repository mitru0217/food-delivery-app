import axios from 'axios';
import { Authorization } from '../../utils/authorization';

const supabaseUrl =
  'https://hszdwnlvuixsdptclrte.supabase.co/rest/v1/Partners?select=*';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzemR3bmx2dWl4c2RwdGNscnRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5ODM2MTksImV4cCI6MjAwMDU1OTYxOX0.cT2jJZJ9jalNJwBlz4pdzcI_jHJDTgRd5JFd81a1nC0';

async function getPartners() {
  try {
    const response = await axios.get(supabaseUrl, {
      headers: {
        apikey: supabaseKey,
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

// import supabase from '../../utils/supabase';
// import Sider from '../../components/Sider/Sider';

// async function getPartners() {
//   const { data: partners, error } = await supabase.from('Parners').select('*');

//   if (error) {
//     throw new Error(error);
//   }
//   console.log(partners);
//   return <Sider partners={partners} />;
// }
