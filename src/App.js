import './App.css';
import Home from './Pages/Home/Home';
import Hotel from './Pages/Hotel/Hotel';
import List from './Pages/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import React,{useContext} from 'react';

export const Appcont=React.createContext();

function App() {

  
  const x='hello'
  return (
    <Appcont.Provider>
    <Router>
      <Routes>
    <Route path='/' element={<Home></Home>}/>
    <Route path='/hotel' element={<List></List>}/>
    <Route path='/hotel:id' element={<Hotel></Hotel>}/>
    
      </Routes>
    </Router>
    </Appcont.Provider>
  );
}

export default App;
