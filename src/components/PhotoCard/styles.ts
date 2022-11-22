import styled from "styled-components/macro"

export const Container = styled.div`
  position: relative; 
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  .cardImage {
    display: block;
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
    border-radius: 10px;

    @media (max-width: 600px) {
      height: 200px;
    }
  }
`