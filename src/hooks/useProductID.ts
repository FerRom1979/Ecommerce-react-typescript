import { useQuery, useQueryClient } from "react-query";

const fetchProductId = (productId: string | undefined) => {
  return fetch(`http://localhost:4000/paddles/${productId}`).then((res) => res.json());
};

export const useProductId = (productId: string) => {
  const queryClient: any = useQueryClient();
  return useQuery(["product", productId], () => fetchProductId(productId), {
    initialData: () => {
      const product: any = queryClient
        .getQueryData("paddles")
        // eslint-disable-next-line radix
        ?.data?.find((product: any) => product.id === parseInt(productId));

      if (product) {
        return {
          data: product,
        };
      } else {
        return undefined;
      }
    },
  });
};
