import logo from './logo.svg';
import './App.css';
 import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import { useState } from 'react';

import SignUp from './Components/Auth/SignUp'
import SignIn from './Components/Auth/SignIn'
import AdminSignIn from './Components/Auth/AdminSignIn';
import AdminSignUp from './Components/Auth/AdminSignUp';



import Home from './Components/Home/Home';
import Wedings from './Components/Events/Wedings';
import Others from './Components/Events/Others';
import Birthday from './Components/Events/Birthday'


import AdminHome from './Components/AdminHome/AdminHome';


import EvevtWedding from './Components/AdminHome/EvevtWedding';
import EventParty from './Components/AdminHome/EventParty';
import EventBirthday from './Components/AdminHome/EventBirthday';

import ViewPage from './Components/OnlyView/ViewPage';

import About from './Components/Home/About';
import ContactUs from './Components/Navbar/ContactUs';

function App() {

  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/adminsignin' element={<AdminSignIn/>}/>
          <Route path='/adminsignup' element={<AdminSignUp/>}/>



          <Route path='/weding' element={<Wedings/>}/>
          <Route path='/others' element={<Others/>}/>
          <Route path='/birthday' element={<Birthday/>}/>


          <Route path='/adminHome' element={<AdminHome/>}/>


          <Route path='/eventwedding' element={<EvevtWedding/>}/>
          <Route path='/eventparty' element={<EventParty/>}/>
          <Route path='/eventbirthday' element={<EventBirthday/>}/>

          
          <Route path='/viewpage' element={<ViewPage/>}/>


          <Route path='/about' element={<About/>}/>

          <Route path='contact' element={<ContactUs/>}/>





        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
