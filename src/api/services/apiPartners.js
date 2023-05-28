import { supabase } from '../../api/instances.js';

export const getAllPartners = async () => {
  const AllPartners = await supabase
    .from('partners')
    .select('*')
    .order('id', { ascending: true });

  return AllPartners;
};

// const update = async (id, fieldName, fieldValue) => {
//   const UpdatePartners = await apiPartners
//     .from('partners')
//     .update({ [fieldName]: fieldValue })
//     .eq('id', id);
//   return UpdatePartners;
// };

// const create = async data => {
//   const CreatedPartner = await apiPartners
//     .from('partners')
//     .insert(data)
//     .select();
//   return CreatedPartner;
// };
