import { Route, Routes } from "react-router-dom";
import BasicForm from "./BasicForm";
import Cards from "./Cards";

function App() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<BasicForm/>}></Route>
      <Route path="/products" element={<Cards/>}></Route>
      
    </Routes>
    </>
  );
}

export default App;
