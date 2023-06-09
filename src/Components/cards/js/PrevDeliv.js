/* 
	File name		: Card.js
	Purpose			: Contains the categorized Previous deliveries for all the Cards everytime a order gets completed. This is nor implemented yet.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react';
import { Button } from '@material-ui/core';

function PrevDeliv() {
	function expandFunc() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		  } else {
			content.style.display = "block";
		  }
		
	}
	return (
		<div>
		<center>
			<h1>Previous deliveries card</h1>
		</center>
		
		<center>

		<Button variant='contained' onClick= {expandFunc} className='Expand-button'> Delivery_ID : 1</Button>
		<div className='content'>
			Name: ABCD <br />
			Time : 00.00 hrs IST <br />
			From : Location A <br />
			To : Location B <br />
		</div>
		<br></br>
		<br></br>
		<Button variant='contained' onClick= {expandFunc} className='Expand-button'> Delivery_ID : 2</Button>
		<div className='content'>
			Name: ABCD <br />
			Time : 00.00 hrs IST <br />
			From : Location A <br />
			To : Location B <br />
		</div>
		</center>


		</div>
	)
}

export default PrevDeliv

