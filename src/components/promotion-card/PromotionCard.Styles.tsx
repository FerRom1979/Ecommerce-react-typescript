import styled from "styled-components";

export const WrapperCard = styled.div`
  display: none;
  @media (min-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    margin-top: 10px;
    background-color: #e5e5e5;
    h4,
    p {
      margin: 0;
      padding-bottom: 10px;
      font-size: 12px;
    }

    img {
      width: 40px;
    }

    :nth-child(2) {
      border-left: thick solid #a7a5a5;
      border-right: thick solid #a7a5a5;
    }
  }
`;
export const Content = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  :nth-child(2) {
    border: 1px solid black;
  }
`;
