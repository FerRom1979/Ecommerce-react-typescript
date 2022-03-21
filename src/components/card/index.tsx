import React from "react";
import { bullPaddleHack02 } from "../../assets/img";
import { ContentCard } from "./Styles.Card";
import { ICardProps, IProductProps } from "./types";
import { calculateCredit } from "../../utils/calculate-credit";
import { currency } from "../../assets/svg";
import LinkComponent from "../link";

const Card = ({ product = undefined }: IProductProps) => {
  return (
    <LinkComponent routed={`/products/${product.id}`}>
      <ContentCard stock={product.stock}>
        {product && (
          <>
            <div className="wrapper-img">
              {!product.stock && <div className="stock">SIN STOCK</div>}

              <img src={product.imagen} alt="bull paddled hack 02" />
              {product.shipments && <div className="shipments">Envio Gratis</div>}
              {product.off && <div className="shipments off">{product.off}%</div>}
            </div>
            <div className="card-body">
              <div>
                <p className="description">{product.description}</p>
              </div>
              <div>
                <p className="price">
                  <img src={currency} alt="currency" width={"12px"} />
                  {product.prise}
                </p>
              </div>
              <div>
                <p className="credit">
                  12 cuotas sin interes de
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z" />
                  </svg>
                  {calculateCredit(product.prise)}
                </p>
              </div>

              <a href="//">{product.mark}</a>
            </div>
          </>
        )}
      </ContentCard>
    </LinkComponent>
  );
};

export default Card;
