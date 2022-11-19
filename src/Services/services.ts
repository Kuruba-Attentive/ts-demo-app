import { useQuery } from "react-query";

export const fetchData = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  return await data.json();
};

export const useGetData = () => {
  return useQuery("product-data", fetchData);
};

const fetchSingleProduct = async (id: string|undefined) => {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await data.json();
};

export const useGetSingleProduct = (id: string|undefined) => {
  return useQuery("single-product", () => fetchSingleProduct(id));
};
