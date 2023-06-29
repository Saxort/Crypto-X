import Lending from "./Pages/Lending/Lending";
import Navbar from "./widgets/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Lending/>}/>
      </Routes>
    </>
  );
}

export default App;
