'use strict'
 
var calculator;
var button;
var form;
var closeButton;
var sendButton;

document.addEventListener('DOMContentLoaded', tryStartFix);
function tryStartFix() {
	try {
		startFix();
	} catch(e) {
		
	}
}

function startFix() {
	calculator = document.getElementById('calculator');
	button = document.getElementById('kalk-btn').getElementsByClassName('links1')[0];
	form = document.getElementById('order_link');
	closeButton = form.getElementsByClassName('bf-modal-close')[0];
	sendButton = document.getElementById('ord_link');
	
	button.addEventListener('click', buttonClick);
	closeButton.addEventListener('click', deleteForm);
	sendButton.addEventListener('click', delayDeleteForm);
	
	deleteForm();
}

function deleteForm() {
	calculator.removeChild(form);
}

function delayDeleteForm() {
	setTimeout(deleteForm, 3000);
}

function insertForm() {
	calculator.appendChild(form);
}

function buttonClick() {
	insertForm();
	button.click();
}