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
`;
