const startingMinutesHard = 3;
let timeHard = startingMinutesHard * 60;

const myIntervalHard = setInterval(updateHard, 1000);

const hardTime = document.getElementById('hard-time');
function updateHard(){
    const minutes = Math.floor(timeHard / 60);
    let seconds = timeHard % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    hardTime.textContent = `Time left: ${minutes}:${seconds}`;

    if(timeHard == 0){
        clearInterval(myIntervalHard);
    }
    timeHard--;
}
