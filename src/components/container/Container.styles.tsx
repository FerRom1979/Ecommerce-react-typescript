import styled from "styled-components";

export const Content = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1200px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 90%;
  }
  @media (max-width: 790px) {
    width: 90%;
  }
`;
