/* 
	File name		: Home.js
	Purpose			: Corresponds to the Home page of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/


import React from 'react';
import Robot from '../../Photos/Robot.png';
import Robot_1 from '../../Photos/Robot_1.png';
import Robot_2 from '../../Photos/Robot_2.png';
import Navbar from '../../Components/js/Navbar';
import YouTube from "react-youtube";

function Home() {

	const opts = {
	  height: "350",
	  width: "80%	",
	  playerVars: {
		autoplay: 1
	  }
	};

	return (
		<div className = 'Home-page'>
			<Navbar />

		
		<center>
			<h2> Working</h2>
			<div className='YT-video'>
				<YouTube videoId={"-lBpGBWOcuU"} opts={opts} />	
			</div>
			<br />

			<div>
				<h2> Robot Designs </h2>
				<img src={Robot} width={300} height={300}/>   {/* alt='1' */}
				<span />				
				<span />				
				<img src={Robot_1} width={300} height={300}/>
				<span />				
				<span />
				<img src={Robot_2} width={300} height={300}/>

			</div>
			
		</center>
		</div>
	)
}

export default Home
