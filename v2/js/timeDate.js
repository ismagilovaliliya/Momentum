const timeDOM = document.querySelector('.time');
const dateDOM = document.querySelector('.date');



function showDate(){
	const date = new Date();
	const options = {
		month: 'long', 
		day: 'numeric'		
	};

	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const currentDate = date.toLocaleDateString('en-US', options);
	const day = date.getDay();
	console.log("day ", day);
	dateDOM.textContent = `${days[day]}, ${currentDate}`;	
	setTimeout(showDate, 1000);
}

function showTime(){
	const date = new Date();
	const currentTime = date.toLocaleTimeString();
	timeDOM.textContent = currentTime;
	setTimeout(showTime, 1000);

}

function init(){
	
	showTime();
	showDate();

}



init();