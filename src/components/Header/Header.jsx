import React from 'react';
import './Header.css';

const Header = () =>{
	return(
      <div className="headerStyle">
		<div className="headerItem">
		   <img src='https://icons-for-free.com/iconfiles/png/512/book+contacts+icon-1320087268523773252.png' alt='' />
		</div>
        <div className="headerItem">
			<h1>Family album</h1>
		</div>
		<div className='headerItem'>
				   <a href="#">Log In</a>
				   <a href="#">Sign Up</a>
		</div>	
	  </div>
	)
};

export default Header;