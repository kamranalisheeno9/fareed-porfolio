import React from 'react';
import Header from '../components/Header'
import Profile from '../components/Profile'
import './Main.css'
const MainPage=(props)=> {
    return (
        <div>
          <Header />  
          <Profile />  
        </div>
    );
}

export default MainPage;