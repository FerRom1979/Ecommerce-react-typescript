import styled from "styled-components";

export const WrapperForm = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: column;
  margin: auto;
  h2 {
    text-align: center;
    font-weight: 300;
    letter-spacing: 1px;
  }
  .wrapper-btn {
    background: #1977f2;
    margin-bottom: 29px;
    border-radius: 5px;
    button {
      width: 100%;
      margin: 20px 0;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 1.5rem;
    }
  }
  .content-input {
    display: flex;
    flex-direction: column;
    max-height: 73px;
  }
  .content-input input {
    min-height: 40px;
    padding: 7px;
    border: 2px solid #1977f2;
    border-radius: 5px;
    font-size: 1rem;
  }
  .content-input label {
    margin: 10px 0px 4px 0;
  }
  .content-input img {
    width: 16px;
    position: relative;
    bottom: 28px;
    left: 330px;
  }
`;
