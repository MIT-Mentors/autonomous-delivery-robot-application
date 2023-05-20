/* 
	File name		: Card.js
	Purpose			: Contains the basis templated for all the Cards generated everytime a order is placed. This is nor implemented yet.
	Developed by	: Aarthi Meena T, Sowbhagya Lakshmi H T, Yogeshwari V S
	Last updated on	: 20-05-2023
	Last updated by	: Yogeshwari V S
*/

import React from 'react'
import '../css/Card.css';

function Card({title,body }) {
	
	var canDeliv = "/delivery/candeliv";
	var prevDeliv = "/delivery/prevdeliv"
	return (
		<>
		<div className='Card' >
			<div className='Card-title'>
				<b>{title}</b>
			</div>
			<div className='Card-body'>
				<p>{body}</p>
			</div>
		</div>
		</>
	)
}

export default Card



