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
  
  
  
  return (
    
    
    <Container>
        <DashboardContainer>
        <div className="user-info" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <img src="/images/person.svg" alt="" />
          <h1>{username}</h1>
          {showDropdown && (
            <DropdownContent>
              {/* Your dropdown content goes here */}
              <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                {/* Add more menu items as needed */}
              </ul>
            </DropdownContent>
          )}
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
const DropdownContent = styled.div`
  display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0a0101;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  z-index: 1;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 8px 16px;
    cursor: pointer;

    &:hover {
      background-color: #130404;
    }
  }
`;





