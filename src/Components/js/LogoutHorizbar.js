/* 
	File name		: LogoutHorizbar.js
	Purpose			: Contains the logout option that has to be added in the  Horizontal bar
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react'
import {Button } from '@material-ui/core';
import '../css/LogoutHorizbar.css';

function LogoutHorizbar() {
    var originString = window.location.origin;
    const logoutFunc = () => {
        //console.log(originString + '/draft-app/#/login')
        window.location.href = originString + "/draft-app/#/login";
    }
    return (
      <div className='LogoutElement'>
        <div className='Logout'>
                <Button variant="contained" onClick={logoutFunc}>Logout</Button>
        </div>
      </div>
    )
  }

export default LogoutHorizbar
