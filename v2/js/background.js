function getTimeOfDay(){
	const date = new Date();
	const hours = date.getHours();

	setTimeout(getTimeOfDay, 1000);	
    
    return hours;
}

function setBg(){
    const timeOfday = getTimeOfDay();

    let src = "";

    if (timeOfday >=0 && timeOfday <12){
	    src = "assets/img/morning";
	}
	else if (timeOfday >=12 && timeOfday <17)
	{
		src = "assets/img/afternoon";
	}
	else if (timeOfday >=17 && timeOfday <20)
	{
		src = "assets/img/evening";
	}
	else if (timeOfday >=20 && timeOfday <24)
	{
		src = "assets/img/evening";
	} else{
        src = "assets/img/evening";
    }

	console.log("timeOfday: " + timeOfday + ", src: "+ src);

    return src;


}

function showImage(number){
    const img = new Image();
    const path = setBg();
    const src = `${path}/${number}.jpg`; 
    console.log("src "+ src);
    img.src =  src;
    img.onload = () => {
        console.log('img.src:' + img.src);
        document.body.style.cssText+= `background-image:url(${src})`;
	
    }
    
}

function getRandom(){
	let number = Math.floor(Math.random()*20)+1;

    if (number < 10) { 
        number = `0${number}`;
    }

    console.log("number "+number);
	return number;
}

function init() {
	const randomNumber = getRandom();
	showImage(randomNumber);
}

init();

