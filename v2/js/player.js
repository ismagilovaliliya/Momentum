
const prev = document.querySelector('.play-prev');
const play = document.querySelector('.play');
const next = document.querySelector('.play-next');

const playListContainer = document.querySelector('.play-list');
const progressBar = document.querySelector('#progress-bar');

const playList = [
    {      
      title: 'Aqua Caelestis',
      src: '../assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  
    {      
      title: 'River Flows In You',
      src: '../assets/sounds/River Flows In You.mp3',
      duration: '03:50'
    },
    {      
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {      
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
        duration: '01:50'
      }
  ];

let isPlay = false;
let playNum = 0;

const audio = new Audio();


function changeProgressBar() {
    audio.currentTime = progressBar.value;
};

function addPlayList(){

    for( let i = 0; i< playList.length; i++){
        var li = document.createElement('li');
        var text = document.createTextNode(playList[i].title);
        li.classList.add('play-item');
        li.appendChild(text);
        playListContainer.appendChild(li);  
    }
}

function prevClickHandler(){ 

 playNum = Math.floor(Math.random() * playList.length);
 audio.src = playList[playNum].src;
 playAudio();
}

function playClickHandler(){

    audio.src = playList[playNum].src;
    playAudio();
    play.classList.toggle('pause');  

}

function playAudio(){
    
    //обновление кадые полсекунды 
    setInterval(updateProgressValue,500);  

    if(!isPlay){ 
        isPlay = true;
        audio.play();
        
    }else {
        isPlay = false;
        audio.pause();
    }
}

function nextClickHandler(){
    
    playNum = Math.floor(Math.random() * playList.length);
    audio.src = playList[playNum].src;
    playAudio();
}

function updateProgressValue(){
    progressBar.max = audio.duration;    
    progressBar.value = audio.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(audio.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(audio.duration)));
    }
}

// convert time into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};
function init(){

    addPlayList();  

    prev.addEventListener('click', prevClickHandler);
    play.addEventListener('click', playClickHandler);
    next.addEventListener('click', nextClickHandler);

}

init();