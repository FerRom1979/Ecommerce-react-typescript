import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { currencyBlack, favorite2 } from "../../assets/svg";
import { useProductId } from "../../hooks/useProductID";
import { Rating } from "react-simple-star-rating";

import Container from "../container";
import { WrapperCardDetails } from "./Styles.CardDetails";
import ButtonComponent from "../button/index";
import { separatedCommas } from "../../utils/separated-with-commas";
import { calculateCredit } from "../../utils/calculate-credit";
import Loader from "../loader";

const CardDetails = () => {
  const [rating, setRating] = useState(0);
  const { productId } = useParams();
  const { isLoading, data, isError, error } = useProductId(productId ? productId : "");

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <WrapperCardDetails>
        <div className="item">
          <div className="wrapper-img">
            <img src={data?.imagen} alt="details" className="img" />
          </div>
        </div>
        <div className="item">
          <div className="wrapper-favorite">
            <span className="product-new">nuevo | 43 vendidos</span>
            <img src={favorite2} alt="favorite" className="favorite2" />
          </div>
          <div className="description">
            <h2>{data?.description}</h2>
          </div>
          <div>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              size={25}
              fillColor="#3483fa"
              transition
              allowHalfIcon
              showTooltip
            />
          </div>
          <div className="wrapper-value">
            <img src={currencyBlack} alt="currency" />
            <span className="value">{separatedCommas(data?.prise)}</span>
          </div>
          <div className="debts">
            <span>en 12x </span>

            <img src={currencyBlack} alt="currency" />
            <span> {calculateCredit(data?.prise)} </span>
          </div>
          <div className="info-product">
            <h4>Lo que tenes que saber del producto</h4>
            <ul>
              {data?.infoProduct &&
                data?.infoProduct.map((info: any, index: number) => {
                  return (
                    <li key={index}>
                      {Object.keys(info).find((key) => key)}:{" "}
                      {Object.values(info).find((value) => value)}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="wrapper-shipments item">
          <div>
            <h4>Llega gratis hoy</h4>
            <p>comprando dentro de los proximos</p>
            <p>42 min</p>
            <a href="//">Enviar a el gaucho 10251</a>
          </div>
          <div>
            <h4>Retira gratis a partir de mañana en correos y otros puntos</h4>
            <p>comprando dentro de los proximos</p>
            <p>32 min</p>
            <a href="//">Ver mapa</a>
          </div>
          <div>
            <h2>{data.stock ? "Stock disponible" : "Sin stock"}</h2>
            {data.stock && <h3>Cantidad: 1 unidad</h3>}
          </div>
          <div className="button-group">
            <ButtonComponent className="btn-lg">Comprar ahora</ButtonComponent>
            <ButtonComponent className="btn-lg" bgColor="#d9e7fa" color="#3483fa">
              Agrergar al carrito
            </ButtonComponent>
          </div>
        </div>
      </WrapperCardDetails>
    </Container>
  );
};

export default CardDetails;
