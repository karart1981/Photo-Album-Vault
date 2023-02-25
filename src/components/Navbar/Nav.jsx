import React from 'react';
import './Nav.css';

const Nav = () =>{
	return(
      <div className='navbar'>
		<div className="navbarItem">
			<a href="#"> 
			  Home 
			</a>
		</div>
        <div className="navbarItem">
			<a href="#"> 
			   My Album 
			</a>
		</div>
		<div className="navbarItem">
			<a href="#"> 
			  Instruction 
			</a>
		</div>
		<div className="navbarItem">
			<a href="#"> 
			   Contact 
			</a>
		</div> 
	  </div>
	)
};
export default Nav;