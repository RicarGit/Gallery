import styled from "styled-components/macro"

export const Container = styled.div`
  position: relative; 
  background-color: #3D3F43;
  border-radius: 10px;
  padding: 10px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .delete-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    height: 25px;
    width: 25px;
    margin: 15px;
    cursor: pointer;
  }
`