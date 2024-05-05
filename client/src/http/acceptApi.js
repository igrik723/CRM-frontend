import { $host } from "./index";

export const createAccept = async (product) => {
  const { data } = await $host.post('api/list_acceptance/', product);
  return data
}

export const deleteAccept = async (id) => {
  const { data } = await $host.delete(`api/list_acceptance/${id}`, id);
  return data;
}

export const fetchAccepts = async () => {
  try {
      const { data } = await $host.get('api/list_acceptance/');
      return data
  } catch (error) {
    console.error("Error fetching accepts:", error);
    throw error;
  }
};