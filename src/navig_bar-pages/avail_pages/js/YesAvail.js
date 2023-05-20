import React from 'react'
import {Button, TextField} from '@material-ui/core';
import {useState} from 'react';
import database from '../../../firebase';
import '../css/YesAvail.css';
import {useLocation} from 'react-router-dom';
import { CollectionsOutlined } from '@material-ui/icons';
import {getDatabase, ref, set, onValue} from 'firebase/database';
import { ref as sRef } from 'firebase/storage';


function YesAvail() {

    var available
	var statusDeliv
	var count = 0;
	var countAgain = 0
	var countLoop = 0
	var userKey 
	var userLocation
	var resultNameFrom
	var countKeys = 0
    var countKeysArray = [];
	var nameValue
	var selectedNameTo

	var emailAddress
	var signal
    const location = useLocation();
	const db = getDatabase();
    //emailAddress = location.state.emailAddress;
	//signal = location.state.signal
	
	emailAddress = 'vsyo@gmail.com';
	userKey = emailAddress.split('@');
	var userLocationResult = 'userAuthentication/' + userKey[0];
	
	var countKeys = 0
	var countKeysArray = [];
	var nameValue
	var selectedNameTo
	var checkEmail = ref(db, 'userAuthentication');
	var userLocation 

		
	let avail = ref(db, 'availability')
	onValue(avail, (snap) =>{
		available = snap.val()
	})

	let curDelivStatus = ref(db, 'currentDelivery/status')
	onValue(curDelivStatus, (snap) =>{
		statusDeliv = snap.val()
	})

	const getSenderName = () => {

		let locSen = ref(db, userLocationResult + '/name')
		onValue(locSen, (snap) =>{
			resultNameFrom = snap.val()
		})
	}

	const loop =(resultNameFrom,resultNameTo) => {
		getSenderName()
		if (countLoop%8000 === 0 && statusDeliv !== 'done') {
			let curDelivStatus = ref(db, 'currentDelivery/status')
			onValue(curDelivStatus, (snap) =>{
				statusDeliv = snap.val()
			})
		}
		if (statusDeliv !== 'done') setTimeout(loop, 0);

		countLoop += 1
		if (statusDeliv === 'done') {
			checkIfDone(resultNameFrom,resultNameTo);
		}
	}
	
	const clickToRedirect = () => {
		window.location.href = window.location.origin + "/draft-app/";

	}

	const appendInDatabase = (resultNameTo) => {
		getSenderName()
		set(ref(db, 'currentDelivery'),{
			status:'none'
		})

		
		set(ref(db, 'currentDelivery/Sender'), {
			Location: 'nil',
			Name: 'nil'
		});
		set(ref(db, 'currentDelivery/Receiver'), {
			Location: 'nil',
			Name: 'nil'
		});
		set(ref(db, 'doc_holder'), {
			open: 'nil'
		})

	}
	const checkIfDone = (resultNameFrom,resultNameTo) => {
		const element = document.getElementById('confirmOrder').children[0]
		const newElement = document.createTextNode("  ")
		element.replaceChild(newElement, element.childNodes[0])
		document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>COMPLETED!</h2></center>")
		appendInDatabase(resultNameTo);		
	}

	const open_doc = () => {
		set(ref(db, 'doc_holder'), {
			open:"Yes"			
		})

	}
    const locationData = () => {
		if (available == "yes")
		{

			document.getElementById('primaryButton').click()
			getSenderName()

			var selectedLocFrom = document.getElementById('selectionBoxLocFrom')
			var selectedLocTo = document.getElementById('selectionBoxLocTo')
			// var selectedNameFrom = document.getElementById('selectionBoxNameFrom')
			selectedNameTo = document.getElementById('selectionBoxNameTo')
			var id = 'xxxx'

			if (selectedLocFrom.selectedIndex > 0) {
				var resultLocFrom = selectedLocFrom.options[selectedLocFrom.selectedIndex].value}
			if (selectedLocTo.selectedIndex > 0) {
				var resultLocTo = selectedLocTo.options[selectedLocTo.selectedIndex].value}
			if (selectedNameTo.selectedIndex > 0) {
				var resultNameTo = selectedNameTo.options[selectedNameTo.selectedIndex].value}

			if (resultLocFrom == undefined || resultLocTo == undefined || resultNameTo == undefined ) {
				alert('Some textfield is missing! Kindly select any option to proceed.')
			}

			else if (resultNameFrom == resultNameTo){
				alert("Sender and Receiver are same! Please recheck")
			}
			else if (resultLocFrom == resultLocTo) {
				alert("Sender location cannot be same as Receiver location!")
			}

			else {
				
				set(ref(db, 'currentDelivery/Sender'), {
					Location: resultLocFrom,
					Name: resultNameFrom
				})
				
				set(ref(db, 'currentDelivery/Receiver'), {
					Location: resultLocTo,
					Name: resultNameTo
				})
				alert('Delivery order placed!')	
				var cardString = formatString(resultNameFrom,resultNameTo, resultLocFrom, resultLocTo)
				dispCurrentDelivCard(cardString)

				loop(resultNameFrom,resultNameTo);
				

			}
		}
		else{
			window.location.href = window.location.origin + "delivery/notavail";
		}
	}
	
		
	const formatString = (resultNameFrom, resultNameTo, resultLocFrom, resultLocTo) => {
		var stringTitle = '<div class="Card"><div class="Card-title"><br /><br /><b>Your current order</b></div><br /><br /><div class="Card-body">'
		var stringSender = '<b>Sender:</b><span /><b>'+ resultNameFrom +'</b><br />'
		var stringReceiver = '<b>Receiver:<span /></b><b>'+ resultNameTo+ '</b><br /><br />'
		var stringLocFrom = '<b>From:<span /></b><b>'+ resultLocFrom+ '</b><br />'
		var stringLocTo = '<b>To:<span /></b><b>'+ resultLocTo + '</b><br /></div></div>'
		var string = stringTitle + stringSender + stringReceiver + stringLocFrom + stringLocTo;
		return string
	}
	const dispCurrentDelivCard = (string) => {
		if (count == 0){
			document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>Your order has been placed</h2></center>")
			document.getElementById('currentOrderCard').insertAdjacentHTML('afterend',string)
			count = count+1
		}
		else {
			if (countAgain == 0)
			{
			const element = document.getElementById('confirmOrder').children[0]
			const newElement = document.createTextNode("  ")
			element.replaceChild(newElement, element.childNodes[0])
			document.getElementById('confirmOrder').insertAdjacentHTML('beforeend',"<center><h2>Your order has been already been placed</h2></center>")
				
			countAgain = countAgain + 1;
			}
		}
	}
	onValue(checkEmail, (snapshot) => {
		snapshot.forEach((data) => {
		countKeysArray[countKeys] = data.key
		userLocation = 'userAuthentication/' + data.key
		
		let userLoc = ref(db, userLocation + '/name')
		onValue(userLoc, (snap) =>{
			nameValue = snap.val()
		})
		var selectedOption = document.getElementById('selectionBoxNameTo')
		selectedOption.add(new Option(nameValue))

		var listLength = selectedOption.length;
		for (var i = 0; i < listLength; i++) {
			for (var j = 0; j < listLength; j++) {

			if (selectedOption.options[i].value == selectedOption.options[j].value && i != j) {
				//Remove duplicate option element
				selectedOption.remove(j);
				//Refresh the list Length
				listLength--;
			}
		}
	}
		countKeys += 1

	})})


    return (
        <div>
			
			<Button onClick={clickToRedirect}>  &#60;&#60; <span/> Go back to Home page</Button>
			<div id = 'confirmOrder'></div>
			<div id = 'confirmOrder_'></div>
            <center>
            <h1> Place your order!!!</h1>
            </center>

            <center>
				<span />
				<span />
				<span />
				<span />
				<select id='selectionBoxNameTo' >
					<option selected disabled value="">Select Receiver </option>
				</select>

                <br />
                <br />
                <br />
                {/* Location selection */}
                <select id='selectionBoxLocFrom'>
					<option selected disabled value="">Select Sender Location</option>
					<option value={"Location A"}>Location A</option>		
					<option value={"Location B"}>Location B</option>	
				</select>
				<span />
				<span />
				<span />
				<span />
				<select id='selectionBoxLocTo' >
					<option selected disabled value="">Select Receiver Location</option>
					<option value={"Location A"}>Location A</option>		
					<option value={"Location B"}>Location B</option>	
				</select>

				<br />
				<br />
				<div 
					style={{position: "relative",zIndex: 0}}>

				</div>
				<Button id="primaryButton" onClick={locationData} variant='contained'>
					Submit
				</Button>

				<br />
				<br />

				<div id='currentOrderCard'></div>
				
				<br />
				<br />
				<br />
				<br />

				<div id="docHolderOpen">
				<Button onClick={open_doc} variant='contained'> Open the Document </Button>
				</div>
				
            </center>

			{/* <MapDisplay /> */}
        </div>
    )
}

export default YesAvail
