import axios from "axios";

const BASE_URL = "https://wuphf46.github.io/json-hosting/products.json";

export const getAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getProductById = async (id) => {
  const products = await getAllProducts();
  return products.find((p) => p.id === parseInt(id, 10));
};
