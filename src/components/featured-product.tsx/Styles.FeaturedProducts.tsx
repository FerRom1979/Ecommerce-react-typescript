import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
  justify-items: center;
  & {
    .grid-item-title {
      width: 100%;
      grid-column: 1/-1;
      padding-bottom: 10px;
      text-transform: uppercase;
      border-bottom: 1px solid rgba(67, 67, 67, 0.3);
      h2 {
        font-size: 16px;
        font-family: "Arvo", serif;
      }
    }
  }
`;
