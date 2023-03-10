// *********************************************************
const startingMinutesEasy = 8;
let timeEasy = startingMinutesEasy * 60;

const myIntervalEasy = setInterval(updateEasy, 1000);

const easyTime = document.getElementById('easy-time');
function updateEasy(){
    const minutes = Math.floor(timeEasy / 60);
    let seconds = timeEasy % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    easyTime.textContent = `Time left: ${minutes}:${seconds}`;

    if(timeEasy == 0){
        clearInterval(myIntervalEasy);
    }
    timeEasy--;
}
// 
