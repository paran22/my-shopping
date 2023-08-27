import { useQueryClient, useQuery, useMutation } from "react-query";
import { getProductsApi, saveProduct } from "../api/api";

export default function useProducts() {
  const queryClient = useQueryClient();
  const getProducts = useQuery(["products"], getProductsApi, {
    staleTime: 1000 * 60,
  });
  const addProduct = useMutation(
    ({ product, imageUrl }) => saveProduct(product, imageUrl),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { getProducts, addProduct };
}
