import { supabase } from '../../api/instances.js';

export const getProductsByPartner = async partner => {
  const AllProducts = await supabase
    .from('products')
    .select('*')
    .order('id', { ascending: true })
    .eq('partners', partner);
  console.log(AllProducts);
  return AllProducts;
};

// const update = async (id, fieldName, fieldValue) => {
//   const UpdatedProduct = await apiProducts
//     .from('product')
//     .update({ [fieldName]: fieldValue })
//     .eq('id', id);
//   return UpdatedProduct;
// };

// const create = async data => {
//   const CreatedProduct = await apiProducts
//     .from('product')
//     .insert(data)
//     .select();
//   return CreatedProduct;
// };
