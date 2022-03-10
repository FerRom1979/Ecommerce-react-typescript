import React from "react";
import Card from "../../components/card";
import { useProducts } from "../../context/productContext";
import { GridContainer } from "./Styles.ProductList";

function ProductList() {
  const { paddlesProducts }: any = useProducts();

  return (
    <>
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
    </>
  );
}

export default ProductList;
