import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import { paddles } from "../constants/mock-paddles ";
import { useProduct } from "../hooks/useProducts";

const defaultValue = {};

export const ProductContext = createContext(defaultValue);

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface IProductsContextProps {
  children?: React.ReactNode;
}

export const ProductsProvider = ({ children }: IProductsContextProps) => {
  const [paddlesProducts, setPaddlesProducts] = useState();
  const [nameProduct, setNameProduct] = useState<string>("");

  const onSuccess = (data: any) => {
    // console.log("Perform side effect after data fetching", data);
  };

  const onError = (error: any) => {
    // console.log("Perform side effect after encountering error", error);
  };

  const getProducts = (product: string) => {
    setNameProduct(product);
  };

  const { isLoading, data, error, isError, isFetching, refetch } = useProduct(
    onSuccess,
    onError,
    nameProduct,
  );

  useEffect(() => {
    if (data) setPaddlesProducts(data);
    if (nameProduct) {
      refetch();
    } else {
      refetch();
    }
  }, [data, nameProduct, refetch]);

  return (
    <ProductContext.Provider value={{ paddlesProducts, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
