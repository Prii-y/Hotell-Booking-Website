import React from 'react';
import Nav from '../../Comps/Navbar/Nav';
import Header from '../../Comps/Header/Header';
import Featured from '../../Comps/Featured/Featured';
import Maillist from '../../Comps/maillist/Maillist';
import Footer from '../../Comps/Footer/Footer';
// import Property from '../../Comps/Property List/Property';
import './home.css'

const Home = () => {
  return (
    <>
     <Nav></Nav>
    <Header></Header>
    <div className='homecont'>
    <Featured></Featured>
    <Maillist></Maillist>
    </div>
    <Footer></Footer>
    </>
   
    
  )
}

export default Home