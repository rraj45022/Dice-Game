import Start from "./components/Start";
import GamePlay from "./components/GamePlay";
import RenderForm from "./components/login";
import SignupForm from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderForm/>}></Route>
        <Route path="/Signup" element={<SignupForm/>}></Route>
        <Route path="/start/:username" element={<Start/>}></Route>
        <Route path="/gameplay" element={<GamePlay />}></Route>
      </Routes>
    </BrowserRouter>
  
      );

}

export default App



