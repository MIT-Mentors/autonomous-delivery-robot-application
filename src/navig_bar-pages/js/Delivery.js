/* 
	File name		: Delivery.js
	Purpose			: Corresponds to the Delivery page of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react'
import '../css/Delivery.css';
import LogoutHorizbar from '../../Components/js/LogoutHorizbar';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {getDatabase, ref, onValue } from 'firebase/database';

function Delivery() {

	let status_robot, delivValues
	let string = window.location.href;
	let countKeysArray = [];
	let emailAddressLogin
	let emailAddressRegister

	const db = getDatabase();

	const navigate = useNavigate()
	const location = useLocation();

	const availFunction = () => {
		var emailAddress
		emailAddressRegister = location.state.emailAddress;
		emailAddressLogin = location.state.emailAddressValue
	
		if (emailAddressLogin === undefined){
			emailAddress = emailAddressRegister
		}
		else{
			emailAddress = emailAddressLogin
		}
		console.log("Here it isssss.....",emailAddress)
		if (status_robot == "yes") {
			navigate('/delivery/yesavail',{state:{emailAddress:emailAddress, signal:'yes'}});

			//window.location.href = string + '/yesavail';
			//window.location.href = 'http://localhost:3000/simul';
			//window.location.href = 'https://yogeshwari-vs.github.io/simul';
		}
		else {
			navigate('/delivery/notavail',{state:{emailAddress:emailAddress}});
			//window.location.href = string +	'/notavail'	;
		}
	}


	const avail = ref(db, '/availability')
	onValue(avail, (snap) => {
		status_robot = snap.val()
	})
	var userName

	var reference = ref(db, 'previousDeliveries' + '/' + userName);
	var countKeys = 0

	onValue(reference, (snap) => {
		snap.forEach((childSnap) => {
			countKeysArray[countKeys] = childSnap.key
			countKeys += 1
		})
	})

	return (
		<>
		<div className = 'Delivery-page '>
		<LogoutHorizbar />

		<center>
			<h1>Delivery</h1>
		</center>
		<br></br>
		</div>
		<center>
		<button className='buttonBox' onClick={availFunction}>
			<div className='buttonElement'>
				+  New Delivery
			</div>
		</button>
		<br />
		<br />

		</center>

		</>
	);
}

export default Delivery;