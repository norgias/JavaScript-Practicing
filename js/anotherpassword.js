


var password; 
var pass1="nick";

function getPass(element); {

password=prompt('Enter password in order to access this page!'); 
if (password==pass1);
	alert('Thank you! Enjoy the page!'); 

else 
	alert('Password incorrect. Please try again!')
}

function showProperties(element){
  

        document.getElementById('message').innerHTML = element.alt;
        document.getElementById('message').style.backgroundColor = "yellow";
}

        function changeBack(element){

        	document.getElementById('message').style.backgroundColor = "white";
}

