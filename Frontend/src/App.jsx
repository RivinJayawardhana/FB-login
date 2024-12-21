import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';



export default function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<SignUp />} />
       
       
     
       

 
        
 



      
         
       

      

      
      
      

      </Routes>

    </BrowserRouter>
  );
}
