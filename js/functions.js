const printMessage = function (msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function () {
	document.getElementById('messages').innerHTML = '';
}