import React from 'react';
import './Main.css';
import Animation from './Animation';
import AboutMe from '../Main/AboutMe';
const Main = () =>{
	return(
       <div className='content'>
		  <AboutMe />
          <Animation />
	   </div>
	)
};

export default Main;