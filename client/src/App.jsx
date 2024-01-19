import Start from "./components/Start";
import GamePlay from "./components/GamePlay";
import RenderForm from "./components/login";
import SignupForm from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrevScores from "./components/PrevScores";

function App() {

  return (
    
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RenderForm/>}></Route>
        <Route path="/Signup" element={<SignupForm/>}></Route>
        <Route path="/:username/start" element={<Start/>}></Route>
        <Route path="/:username/gameplay" element={<GamePlay />}></Route>
        <Route path="/:username/prevscores" element={<PrevScores/>}></Route>
      </Routes>
    </BrowserRouter>
  
      );

}

export default App



