import React from "react";
import { bullPaddleHack02 } from "../../assets/img";
import { ContentCard } from "./Styles.Card";
import { ICardProps } from "./types";
import { calculateCredit } from "../../utils/calculate-credit";
import { currency } from "../../assets/svg";

const Card = ({
  stock = false,
  shipments = true,
  description = "Paleta Nox Emotion World Padel Tour Edition 2021 Eva + Funda de Regalo",
  price = 54.699,
  mark = "nox",
  img = bullPaddleHack02,
}: ICardProps) => {
  return (
    <ContentCard>
      <div className="wrapper-img">
        {stock && <div className="stock">SIN STOCK</div>}

        <img src={img} alt="bull paddled hack 02" />
        {shipments && <div className="shipments">Envio Gratis</div>}
      </div>
      <div>
        <p>{description}</p>
        <p className="price">
          <img src={currency} alt="currency" width={"12px"} />
          {price}
        </p>
        <p className="credit">
          12 cuotas sin interes de
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841v-2.036h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.313-.464 6.005-2.293 6-5.729z" />
          </svg>
          {calculateCredit(price)}
        </p>
        <a href="//">{mark}</a>
      </div>
    </ContentCard>
  );
};

export default Card;
