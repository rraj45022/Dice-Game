import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({roleDice, currentDice}) => {

  
  return (
    <DiceContainer>
        <div className= 'dice'
        onClick={roleDice}>
          <img src={`/images/dice${currentDice}.svg`} alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
    width: 200px;
    height: 200px;
  }

  p {
    font-size: 24px;
  }
`;