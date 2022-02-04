import styled from "styled-components";
import theme from "../../config/theme";
type Props = {
  showSearch?: boolean;
};

export const WrapperRegister = styled.div<Props>`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  line-height: 20px;
  margin: 5px 0;
  width: ${theme.maxWidth};
  margin: auto;
  cursor: pointer;
  span {
    font-size: 10px;
    :hover {
      border-bottom: 1px solid #434343;
    }
  }
  img {
    width: 20px;
  }
  & .register {
    margin-left: 5px;
    font-weight: bold;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 1200px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 90%;
  }
  @media (max-width: 790px) {
    width: 90%;
    display: ${({ showSearch }) => (showSearch ? "none" : "")};
  }
`;
export const WrapperHeader = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  .menu {
    display: ${({ showSearch }) => (showSearch ? "none" : "block")};
  }
  .btn-menu {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  h1 {
    font-size: 2rem;
    display: ${({ showSearch }) => (showSearch ? "none" : "")};
    order: 2;
    width: 100%;
    text-align: center;
    margin: 10px;
  }
  .wrapper-cart {
    display: ${({ showSearch }) => (showSearch ? "none" : "flex")};
    justify-content: flex-end;
  }
  .img-cart {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    background: ${theme.firstColor};
    width: 40px;
    height: 40px;
  }
  .icon-search {
    display: block;
    order: 1;
  }
  .icon-search button {
    border: none;
    background-color: transparent;
  }
  @media (min-width: 430px) {
    h1 {
      order: 0;
      width: auto;
    }
    .menu {
    }
    .icon-search {
      order: 0;
    }
  }
  @media (min-width: 790px) {
    h1 {
      order: 0;
      width: auto;
    }
    .menu {
      display: none;
    }

    .icon-search {
      display: none;
    }
  }
`;
