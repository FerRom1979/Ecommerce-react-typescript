import React from "react";
import Card from "../../components/card";
import { useProducts } from "../../context/productContext";
import { GridContainer } from "./Styles.ProductList";
import Container from "../../components/container/index";
import { useProduct } from "../../hooks/useProducts";

function ProductList() {
  const { paddlesProducts }: any = useProducts();
  const onSuccess = (data: any) => {
    console.log("Perform side effect after data fetching", data);
  };

  const onError = (error: any) => {
    console.log("Perform side effect after encountering error", error);
  };
  const { isLoading, data, error, isError, isFetching, refetch } = useProduct(onSuccess, onError);
  console.log(data);

  return (
    <Container>
      <GridContainer className="grid-container">
        {paddlesProducts?.length > 0 &&
          paddlesProducts.map((product: any, index: any) => {
            return (
              <div key={index} className="grid-item">
                <Card product={product} />
              </div>
            );
          })}
      </GridContainer>
    </Container>
  );
}

export default ProductList;
