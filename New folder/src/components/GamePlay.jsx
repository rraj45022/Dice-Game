import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import styled from 'styled-components'
import { useState } from 'react'
import { Button, OutlineButton } from  "../styled/Button";
import Rules from './Rule'

const GamePlay = () => {
  
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false);

  const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const roleDice = () =>{
    const randomNumber = generateRandomNumber(1,6);
    setCurrentDice(randomNumber);

    if (!selectedNumber){
    setError("You have not selected any number");
    return;
    }
    setError("");

    if (selectedNumber == randomNumber){
      setScore((prev) => prev + 4);
    }
    else{
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined)
  }

  const resetScore = () =>{
    setScore(0);
  }

  const toggle = () =>{
    setShowRules(!showRules);
  }


  return (
    <MainContainer>
      <div className= 'top_section'>
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice
      currentDice={currentDice} 
      roleDice={roleDice}/>
      <div className='btns'>
        <OutlineButton
          onClick={resetScore}>
            Reset Score
        </OutlineButton>
        <Button
        onClick={toggle}>{showRules? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;