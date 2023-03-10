const startingMinutesMedium = 5;
let timeMedium = startingMinutesMedium * 60;

const myInterval = setInterval(updateMedium, 1000);

const mediumTime = document.getElementById('medium-time');
function updateMedium(){
    const minutes = Math.floor(timeMedium / 60);
    let seconds = timeMedium % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    mediumTime.textContent = `Time left: ${minutes}:${seconds}`

    if(timeMedium == 0){
        clearInterval(myInterval);
    }
    timeMedium--;
}