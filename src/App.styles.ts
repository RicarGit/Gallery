import styled from "styled-components/macro"

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 0;
`

export const Heading = styled.h1`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 30px;
`

export const PhotoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

export const UploadForm = styled.form`
  background-color: #3D3F43;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 30px;

  input[type=submit] {
    background-color: #756DF4;
    border: none;
    color: #fff;
    padding: 8px 16px;
    margin: 0 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }

  input[disabled],
  input[disabled]:hover {
    opacity: .2;
    cursor: default;
  }
`