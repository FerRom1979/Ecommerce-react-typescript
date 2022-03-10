import React from "react";
import { useProducts } from "../../context/productContext";
import Card from "../card";
import { GridContainer } from "./Styles.FeaturedProducts";

const FeaturedProduct = () => {
  const { paddlesProducts }: any = useProducts();
  const featured = paddlesProducts.filter((product: any) => product.featured === true);
  console.log(featured);

  return (
    <>
      <GridContainer className="grid-container">
        <div className="grid-item-title">
          <h2>Productos destacados</h2>
        </div>

        {featured?.length > 0 &&
          featured.map((product: any, index: any) => {
            return (
              <div key={index} className="grid-item">
                <Card product={product} />
              </div>
            );
          })}
      </GridContainer>
    </>
  );
};

export default FeaturedProduct;
