import styled from "styled-components/macro"

export const Form = styled.form`
  display: flex;
  background-color: #3D3F43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  input[type=submit] {
    background-color: #756DF4;
    border: none;
    color: #fff;
    font-weight: bold;
    padding: 0 25px;
    margin-left: 15px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }

    @media (max-width: 500px) {
      width: 100%;
      padding: 15px 0;
      margin: 0;
      border-radius: 0 0 10px 10px;
    }
  }
  
  input[type=file] {
    background: #000;
    width: 100%;
    padding: 10px;
    border-radius: 10px;

    @media (max-width: 500px) {
      padding: 12px 0;
      text-align: center;
      border-radius: 10px 10px 0 0;
    }
  }

  input[disabled],
  input[disabled]:hover {
    opacity: .4;
    cursor: default;
  }
`