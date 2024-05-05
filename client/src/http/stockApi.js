import { $host } from "./index";

export const createStock = async (stock) => {
  const { data } = await $host.post('api/list_stock/', stock);
  return data
}

export const deleteStock = async (id) => {
  const { data } = await $host.delete(`api/list_stock/${id}`, id);
  return data;
}

export const fetchStocks= async () => {
  try {
      const { data } = await $host.get('api/list_stock/');
      return data
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
};