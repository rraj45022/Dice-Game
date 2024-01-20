import styled from "styled-components";
import { Button } from "../styled/Button";
import { useState , useEffect} from "react";

import { useNavigate, useParams } from "react-router-dom";


const Start = () => {
  const navigate = useNavigate()
  const { username } = useParams();

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleGamePlay = () =>{
    navigate(`/${username}/gameplay`);
  };

  const prevScores = () =>{
    navigate(`/${username}/prevscores`)
  }

  const deleteAccount = async()=>{
    try {
      // Perform the logic to delete the user account, for example, making an API request
      // You can use fetch or any other HTTP client library here
      const response = await fetch(`http://localhost:3000/${username}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Account deleted successfully');
        // Redirect or perform any other action after successful account deletion
        navigate('/');
      } else {
        console.error('Failed to delete account');
        // Handle error condition, display a message to the user, etc.
      }
    } catch (error) {
      console.error(`Error deleting account: ${error.message}`);
    }
  };  
  
  
  
  
  return (
    
    
    <Container>
        <DashboardContainer>
        <div className="user-info" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img src="/images/person.svg" alt="" />
          <h1>{username}</h1>
          
          <DropdownContent $showDropdown={showDropdown}>
              {/* Your dropdown content goes here */}
              <ul>
                <li onClick={prevScores}>My Previous Scores</li>
                <li>Change Password</li>
                <li onClick={()=>{navigate('/')}}>Logout</li>
                <li onClick={deleteAccount}>Delete Account</li>
                {/* Add more menu items as needed */}
              </ul>
            </DropdownContent>
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
  flex-direction: column;
  align-items: center;
  height: 70vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const DashboardContainer = styled.div`
  text-align: center;
  position: relative;
  z-index: 1;


  .user-info {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const DiceContainer = styled.div`
  text-align: center;
  padding-top: 50px;

  img {
    width: 100%;
    max-width: 300px;
  }

  div {
    padding-top: 20px;
  }
`;

const DropdownContent = styled.div`
  display: ${({ $showDropdown }) => ($showDropdown ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0a0101;
  border: 1px solid #faf4f4;
  border-radius: 4px;
  padding: 8px;
  z-index: 2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 8px 16px;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #130404;
    }
  }
`;





