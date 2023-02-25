import React from 'react';
import './Main.css';
import video from '../Main/Video/anim2.mp4';

const Animation = () =>{
	return (
		<div className='anime'> 
			<video width="700" height="530" controls autoPlay loop muted>
               <source src={video} type="video/mp4"/>
       </video>
		</div>
	)
}

export default Animation;