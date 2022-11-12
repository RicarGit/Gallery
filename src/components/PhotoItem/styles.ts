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

  .remove-icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    padding: 10px;
    background: #3D3F43;
    border-radius: 10px;
    cursor: pointer;
  }
`