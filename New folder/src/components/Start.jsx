import styled from "styled-components";
import { Button } from "../styled/Button";
import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";


const Start = () => {
  const nevigate = useNavigate()
  const { username } = useParams();
  const toggleGamePlay = () =>{
    nevigate('/gameplay');
    };
  
  
  return (
    
    
    <Container>
        <DashboardContainer>
        <div className="user-info">
          <img src="/images/person.svg" alt="" />
          <h1>{username}</h1>
        </div>
      </DashboardContainer>
      <DiceContainer>
      <img src="/images/dices.svg" alt="" />
        <div>
            <h1>ROll the Dice </h1>
            <Button onClick={toggleGamePlay}> 
            Play Now
            </Button>
        </div>
        </DiceContainer>

        
    </Container>
    
  )
};

export default Start


const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  height: 70vh;
`;

const DashboardContainer = styled.div`
  text-align: left;
  top: 0px;
  right: 100px;
  width: 50px;

  .user-info {
  display: flex; /* Use flexbox */
  align-items: center; /* Align items vertically */
}

.user-info img {
  width: 40px; /* Adjust image size as needed */
  height: 40px;
  margin-right: 10px; /* Add spacing between image and text */
}
`;

const DiceContainer = styled.div`
  text-align: center;
  padding-top: 50px;
  width: 500px;
`;





