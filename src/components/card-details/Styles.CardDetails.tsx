import styled from "styled-components";

export const WrapperCardDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  & {
    .wrapper-img {
      width: 400px;
      margin-top: 24px;
    }
    .img {
      width: 100%;
    }
    .wrapper-favorite {
      display: flex;
      justify-content: space-between;
    }
    .product-new {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.55);
    }
    .description h2 {
      flex: auto;
      font-size: 22px;
      margin-bottom: 8px;
      margin-right: 28px;
      padding: 0;
    }
    .wrapper-value {
      margin-top: 16px;
    }
    .value {
      font-size: 36px;
      color: rgba(0, 0, 0, 0.9);
      font-weight: 300;
      letter-spacing: normal;
    }
    .debts {
      font-weight: 400;
      font-size: 18px;
    }
    .debts > img {
      width: 14px;
    }
    .info-product {
      margin-top: 25px;
    }
    .info-product > h4 {
      font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 1.25;
      margin: 0;
    }
    .info-product > ul {
      margin: 0;
      margin-left: 13px;
      padding: 0;
      font-size: 16px;
      font-family: Proxima Nova, -apple-system, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.35;
    }
    .info-product > ul > li {
      margin-top: 8px;
    }
    .button-group div button {
      margin-bottom: 5px;
      padding: 20px;
    }
    .wrapper-shipments {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 25px 16px;
      border-radius: 8px;
      font-size: 14px;
    }
  }
`;
