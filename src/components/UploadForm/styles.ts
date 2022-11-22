import styled from "styled-components/macro"

export const Form = styled.form`
  display: flex;
  background-color: #3D3F43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

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
  }
  
  input[type=file] {
    background: #000;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }

  input[disabled],
  input[disabled]:hover {
    opacity: .2;
    cursor: default;
  }
`