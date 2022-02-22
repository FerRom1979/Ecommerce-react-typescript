import styled from "styled-components";

export const WrapperSlider = styled.div`
  .slick-prev::before,
  .slick-next::before {
    color: black;
  }
  .slick-prev {
    left: -20px;
  }
  .slick-next {
    right: -20px;
  }
  .slick-dots {
    bottom: 10px;
  }
  .slick-dots li button {
    background-color: #fff;
    opacity: 1;
    border-radius: 50%;
  }
  @media (min-width: 790px) {
    display: none;
  }
`;
export const WrapperCard = styled.div`
  display: flex !important;
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
  }
  img {
    width: 40px;
  }
`;
