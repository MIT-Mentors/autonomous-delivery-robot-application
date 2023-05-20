/* 
	File name		: NoAvail.js
	Purpose			: Corresponds to the Delivery order page of the application when the bot is not available to take the order.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/


import React from 'react'
import {Button, TextField} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import {Link, useNavigate} from 'react-router-dom';

function NotAvail() {

    let emailAddress
    let usernameValue 
    let usernamePath
    const navigate = useNavigate()

    const location = useLocation();
    emailAddress = location.state.emailAddress;

    usernameValue = emailAddress.split('@');
    usernamePath = 'userAuthentication/' + usernameValue[0];
        
    const clickToRedirect = () => {
        navigate('/delivery',{state:{emailAddress:emailAddress}});

        }

    return (
        <div>
            <Button onClick={clickToRedirect}>  &#60;&#60; <span/> Go back to Delivery page</Button>

            <center>
                <h1>Oops! The robot is currently busy with another delivery.</h1>
            </center>

        </div>
    )
}

export default NotAvail
