import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./data.jsx";
function App() {
 
 
  return ( 
    <BrowserRouter basename="/testinfo">
    <Routes>
      <Route path="/" element={<Data/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
