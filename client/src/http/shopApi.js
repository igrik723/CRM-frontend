import { $host } from "./index";

export const createProduct = async (product) => {
  const { data } = await $host.post('api/list_shop/', product);
  return data
}

export const deleteProduct = async (id) => {
  const { data } = await $host.delete(`api/list_shop/${id}`, id);
  return data;
}

export const fetchProducts = async () => {
  try {
      const { data } = await $host.get('api/list_shop/');
      return data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};