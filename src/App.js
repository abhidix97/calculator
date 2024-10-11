import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import Standard from "./Standard";
import Scientific from "./Scientific";
import Bmr from "./Bmr";


const App=()=>
{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/standard" element={<Standard />} />
        <Route path="/scientific" element={<Scientific />} /> 
        <Route path="/bmr" element={<Bmr />} />

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;