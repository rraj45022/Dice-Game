import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import styled from 'styled-components'
import { useState } from 'react'
import { Button, OutlineButton } from  "../styled/Button";
import Rules from './Rule'
import { useNavigate, useParams } from 'react-router-dom'

const GamePlay = () => {
  
  const [score,setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false);
  const navigate = useNavigate();
  const {username} = useParams(); 

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
  const logout = async() =>{
    try{
      const response = await fetch('http://localhost:3000/logout', {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        credentials: 'include',
        body: JSON.stringify({username, score})
      });
      if (response.ok){
        console.log("logout successfull");
        navigate('/');
      }
      else {
        console.error('Logout failed:', response.status, response.statusText);
        // Handle error or provide user feedback
      }
    }
    catch (error) {
      console.error('Logout failed:', error.message);
    }
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
      
      <div className="d-flex justify-content-center mt-3 login_container">
				 				<button onClick={logout} name="button" className="btn login_btn">Logout</button>
			</div>
      
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