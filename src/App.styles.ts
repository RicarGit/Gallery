import styled from "styled-components/macro"

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`

export const Area = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 30px 15px;
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

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`