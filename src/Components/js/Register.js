/* 
	File name		: Register.js
	Purpose			: Corresponds to the Register page of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react'
import '../css/Register.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { TextField, Button } from '@material-ui/core';
import database from '../../firebase';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";


import {useState} from 'react';


function Register() {
 
	let user;
	let password;
	let passwordPath;
	let usernameValue; 
	let usernameValue_; 
	let usernamePath;
	let checkEmail;
	let countKeys = 0;
	let countKeysArray = [];
	let countAlert;

	countAlert = 0

	const [emailAddress, setEmailAddress] = useState();  
	const [name, setName] = useState();  
	const [department, setDepartment] = useState(); 

	const navigate = useNavigate()
	const handleChange = (event) => {
		setDepartment(event.target.value);
	  };
	
	const clickSetupPassword = () => {

		if (!name || !emailAddress || !department)
		{ 
				alert("Some of the textfeilds are missing. Please check")
		}
		else
		{
		usernameValue = emailAddress.split('@');
		usernameValue_ = usernameValue[0]
		if (usernameValue_.includes('.')){
			usernameValue = usernameValue_.split('.')
		}

		usernamePath = 'userAuthentication/' + usernameValue[0];

		const db = getDatabase();
		checkEmail = ref(db, 'userAuthentication');
		
		checkEmail.orderByKey().on('child_added', function(data){
			countKeysArray[countKeys] = data.key
			countKeys += 1
			})

		var count = 0
		for (count=1; count <= countKeysArray.length; ++count) {
				
			if (usernameValue[0] === countKeysArray[count]) {
				user = "registeredUser"
				passwordPath = 'userAuthentication/' + usernameValue[0] + '/password'
				database().ref(passwordPath).on('value', (snap) =>{
					password = snap.val()
				  })

				if (password === 'nil'){
					user = 'unregisteredUser'
				}
				
				break
			}
			else {
				user = "newUser"
			}
		}
			
		}

		if (user === 'newUser' || user === 'unregisteredUser') {
			database.ref(usernamePath).set({
				name: name,
				department: department,
				emailAddress: emailAddress,
				password: 'nil',
				// staffID: id,
			})

		navigate('/register/passwordSetup',{state:{id:1,emailAddress:emailAddress}});
		//window.location.href = window.location.origin + '/draft-app/#/register/passwordSetup'

		}
		else{
			if (countAlert !== 1){
			alert('Email address already exists.')}			
		}
		count += 1

	}
		
	return (
		<div className='registerClass'>
			<center>
				<div> <a>Details</a><>&#62;&#62;</> <Button onClick={clickSetupPassword}> Setup Password</Button></div>
			</center>

			<center>
			
			<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '100%' },
			}}
			noValidate
			autoComplete="off"
			>
			<FormControl sx={{ m: 0.75, width: '80%' }}>
			<TextField id="outlined-basic" label="Enter email adress" variant="outlined"  onChange={(e)=> setEmailAddress(e.target.value)}/>
			<br />
			<TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e)=> setName(e.target.value)}/>
			<br />
			</FormControl>
			</Box>

			<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '100%' },
			}}
			noValidate
			autoComplete="off"
			>
			<FormControl sx={{ m: 0.75, width: '82%' }}>
			<InputLabel id="demo-simple-select-label">Department</InputLabel>
			<Select
				id="demo-simple-select"
				value={department}
				label="Department"
				onChange={handleChange}
				>
				<MenuItem value={'EIE'}>Electronics and Instrumentation Engineering</MenuItem>
				<MenuItem value={'ECE'}>Electronics and Communication Engineering</MenuItem>
				<MenuItem value={'CT'}>Computer Technology</MenuItem>
				<MenuItem value={'IT'}>Information Technology</MenuItem>
				<MenuItem value={'AE'}>Automobile Engineering</MenuItem>
				<MenuItem value={'AS'}>Aerospace Engineering</MenuItem>
				<MenuItem value={'PT'}>Production Technology</MenuItem>
			</Select>
			</FormControl>
			</Box>
			
			
			<br />
			<br />
            <br />
			<Button variant='contained' onClick={clickSetupPassword}> Next</Button>
			<br />

			</center>
		</div>
	)
}

export default Register
