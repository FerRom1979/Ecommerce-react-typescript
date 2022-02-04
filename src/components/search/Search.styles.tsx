import styled from "styled-components";
import theme from "../../config/theme";

type PropsSearch = {
  showSearch?: boolean;
};

export const WrapperSearch = styled.div<PropsSearch>`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5000;
  border: none;
  padding: 10px;
  opacity: 0.5;
  right: 10px;
  input {
    border: none;
    width: 100%;
    height: 30px;
    float: left;
    padding: 5px 40px 5px 10px;
    margin: 5px 0;
    box-sizing: border-box;
    outline: none;
  }
  button {
    border: none;
    background: #fff;
  }
  .arrow-rigth {
    display: block;
  }

  @media (min-width: 790px) {
    position: inherit;
    align-items: center;
    border: 2px solid ${theme.firstColor};
    width: 40%;
    padding: 0;
    .arrow-rigth {
      display: none;
    }
  }
`;
