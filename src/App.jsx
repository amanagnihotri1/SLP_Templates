import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";
import { Template1 } from './component/template1/Template1';
import './App.scss';
import {Navbar} from "./component/navbar/Navbar";
import {Routes,Route} from "react-router-dom";
import { Template3 } from './component/template3/Template3';
import { Template2 } from './component/template2/Template2';
import { Template4 } from "./component/template4/Template4";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/1' element={<Template1/>}/> 
     <Route path='/2' element={<Template2/>}/>
     <Route path='/3' element={<Template3/>}/>
     <Route path="/4" element={<Template4/>}/>
    </Routes>  
    </>
  );
}

export default App;
