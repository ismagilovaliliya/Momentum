/*DOM объекты*/
const greetingContainer = document.querySelector('.greeting-container'),
	  input = greetingContainer.querySelector('input'),
	  greeting =  document.querySelector('.greeting');

const USER_LS = 'currentUsername',
	  SHOWING_CN = 'showing';

var greatings = "";

function showGreeting(text) {
	getTimeOfDay();
	greeting.textContent = greatings;
	input.value = `${text}!`;
	input.classList.remove(SHOWING_CN);
}


function loadUsername() {
	const currentUsername = localStorage.getItem(USER_LS)
	if(currentUsername === null){
		input.addEventListener( 'keyup',event =>{
			if( event.code === 'Enter' ) {
				console.log("enter");
				const inputValue = input.value;
				localStorage.setItem(USER_LS, inputValue);
				showGreeting(inputValue);
			}		
		})			
	}else{
		showGreeting(currentUsername);		
	}
}

function getTimeOfDay(){
	const date = new Date();
	const hours = date.getHours();

	if (hours >=0 && hours <12){
		greatings = 'Good  morning, ';
	}
	else if (hours >=12 && hours <17)
	{
		greatings = 'Good  afternoon, ';
	}
	else if (hours >=17 && hours <20)
	{
		greatings = 'Good  evening, ';
	}
	else if (hours >=20 && hours <24)
	{
		greatings = 'Good  nigth, ';
	}
	console.log("hours: " + hours + ", greatings: "+ greatings);

	setTimeout(getTimeOfDay, 1000);	
}

function init(){
	input.classList.add(SHOWING_CN);
	let currentUsername = localStorage.getItem(USER_LS)
	if (currentUsername === null){
		greeting.textContent = 'What is your name?';
		input.value = '[Enter your name]';

		input.addEventListener('mousedown', function(){
			input.classList.remove(SHOWING_CN);
			input.value = "";

			loadUsername();
		});
		
		input.addEventListener('mouseout', function(){

			currentUsername = localStorage.getItem(USER_LS);
			if(currentUsername === null){
				input.classList.add(SHOWING_CN);
				input.value = '[Enter your name]';
			}
		});

	}else{
		loadUsername();
	}
}

init();