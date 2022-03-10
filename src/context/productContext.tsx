import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import { paddles } from "../constants/mock-paddles ";

export const ProductContext = createContext({});

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};
interface IProductsContextProps {
  children?: React.ReactNode;
}

export const ProductsProvider = ({ children }: IProductsContextProps) => {
  const [paddlesProducts, setPaddlesProducts] = useState(paddles);

  useEffect(() => {}, []);

  return <ProductContext.Provider value={{ paddlesProducts }}>{children}</ProductContext.Provider>;
};

export default ProductsProvider;
