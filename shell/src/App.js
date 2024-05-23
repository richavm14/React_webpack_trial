import React from 'react';
const Button = React.lazy(() => import('Remote/Button'));
import styled from 'styled-components';
import image from './ReactImage.png';  

export default function App() {
    return (
      
      <Container>
        <StyledDiv>
          <h1>This is the Shell!!</h1>
          <br />
          <Button buttonName={"Click me in shell"}/>
          <br />
          <br />
          <img src={image} alt="react" width="350" height="300"></img>
        </StyledDiv>
      </Container>
    )
}

const StyledDiv = styled.div`
    padding: 100px;
    background-color: lightblue; 
    border: 10px solid #6495ED;
    margin: 5px;
    display: flex-box;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;



  