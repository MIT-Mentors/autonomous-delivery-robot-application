/* 
	File name		: Feedback.js
	Purpose			: Corresponds to the Feedback page of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react';
import {useState} from 'react';
import Navbar from '../../Components/js/Navbar';
import { TextField, Button } from '@material-ui/core';
import {getDatabase, ref, set, onValue} from 'firebase/database';

function Feedback() {

	const [name, setName] = useState("");  
	const [feedback, setFeedback] = useState("");

	var userLocation
	const db = getDatabase();
	
	const clickToSubmitFeedback = () => {

		userLocation = "feedback/" + name
		set(ref(db, userLocation), {
			feedback: feedback
			
		  });

	}
	return (
		<>

			<div style={{position: "relative", zIndex:3}}>
				<Navbar />
			</div>

			<center>
				<h1>Feedback</h1>
				
				<form >
					<TextField id="name" label="Name" variant="outlined"  placeholder='Enter your name' onChange={(e)=> setName(e.target.value)} />
					<br />
					<br />
					<TextField id="feedback" label="Feedback" variant="outlined"  placeholder='Enter your feedback' onChange={(e)=> setFeedback(e.target.value) }/>
					<br />
					<br />
					<Button variant='contained' onClick={clickToSubmitFeedback}>Submit</Button>
					
				</form>
			</center>

		</>
	)
}

export default Feedback
    