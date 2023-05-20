/* 
	File name		: LoginorSignuo.js
	Purpose			: Corresponds to the Login page of the application.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import {useState} from 'react';
import { TextField, Button } from '@material-ui/core';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {useNavigate} from 'react-router-dom';
import Navbar from '../../Components/js/Navbar';
import database from '../../firebase';
import { getDatabase, ref, set, onValue } from "firebase/database";


function LoginOrSignup() {
	const db = getDatabase();

	let checkEmail = ref(db, 'userAuthentication')
	let countUserKeys = 0;
    let countUserKeysArray = [];
    let userStatus;
    let count = 0;
	let password;
    let passwordValue;
    let passwordValuePath;
	let usernameValue;
	let usernameValue_;
  
    const [username, setUsername] = useState();  
    
	const [values, setValues] = useState({
		amount: '',
		password: '',
		showPassword: false,
    });
	const navigate = useNavigate()

    
    const handleClickShowPassword = () => {
    	setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
    	event.preventDefault();
    };
    
    const handlePasswordChange = (prop) => (event) => {
    	setValues({ ...values, [prop]: event.target.value });
    };

	onValue(checkEmail, (snapshot) => {
		snapshot.forEach((childSnapshot) => {
			  const childKey = childSnapshot.key;
			  const childData = childSnapshot.val();
			countUserKeysArray[countUserKeys] = childKey;
			countUserKeys += 1;
		});
	  }
	);
    
    const loginButton = () => 
    { 
    	usernameValue = username.split('@')
    	usernameValue_ = usernameValue[0]
		if (usernameValue_.includes('.')){
			usernameValue = usernameValue_.split('.')
		}
		
		for (count=0; count <= countUserKeysArray.length - 1; ++count) {
			if (usernameValue[0] === countUserKeysArray[count]) {
				userStatus = 'existingUser'
				passwordValuePath = 'userAuthentication/' + usernameValue[0] + '/password'
				
				passwordValue = ref(db, passwordValuePath)

				onValue(passwordValue, (snapshot) => {
					password = snapshot.val();
				})
				if (password === values.password) {

					navigate('/delivery',{state:{emailAddressValue:username}});
					//window.location.href = window.location.origin + '/draft-app/#/'
				}
				else{
				alert('Incorrect password or email address')
				}				
			}
			
		}
  	}
    
    const clickRegister = () => {
      	window.location.href = window.location.origin + '/draft-app/#/register'
    }
    
    return (

          	<>
		        
				<div style={{position: "relative", zIndex:3}}>
					<Navbar />
            	</div>
				
				<center>
					<h3>Login</h3>
					
					<br />
					
					<TextField
					label = 'Username/emailID'
					margin='normal'
					style={{width:'60%'}}
					onChange={(e)=> setUsername(e.target.value)}
					/>
					
					<br />

					<FormControl sx={{ m: 1, width: '60%' }} >
						<InputLabel htmlFor="standard-adornment-password"> Password</InputLabel>
						<OutlinedInput
							id="standard-adornment-password" 
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handlePasswordChange("password")}
							endAdornment= {
							<InputAdornment position="end">
								<IconButton
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{values.showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					<br /><br />

					<Button onClick={loginButton}variant='contained'>Submit</Button>
					<br /><br />

					Don't have an account?
					<Button onClick={clickRegister}> Register </Button>
				
				</center>
				<br /><br />
				
	        </>
    )
}

export default LoginOrSignup;
