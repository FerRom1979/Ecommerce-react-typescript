import React from "react";
import { facebook, instagram, twitter, youtube } from "../../assets/svg";
import Banner from "../../components/banner";
import PromotionCard from "../../components/promotion-card";
import { IFooterProps } from "./type";
import { WrapperFooter } from "./Styles.Footer";

const Footer = ({ dataCard }: IFooterProps) => {
  const redes = [facebook, twitter, youtube, instagram];
  return (
    <WrapperFooter>
      <PromotionCard dataCard={dataCard} />
      <Banner color="#cccccc">
        <div className="redes">
          {redes &&
            redes.map((red, index) => {
              return <img key={index} src={red} alt="redes" />;
            })}
        </div>
      </Banner>
    </WrapperFooter>
  );
};

export default Footer;
