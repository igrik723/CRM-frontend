import { $host } from "./index";

export const createNeed = async (product) => {
  const { data } = await $host.post('api/list_invoice/', product);
  return data
}

export const deleteNeed = async (id) => {
  const { data } = await $host.delete(`api/list_invoice/${id}`, id);
  return data;
}

export const fetchNeeds = async () => {
  try {
      const { data } = await $host.get('api/list_invoice/');
      return data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};