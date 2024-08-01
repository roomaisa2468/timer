const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEL = document.getElementById("countdown");

setInterval(updatecoundown, 1000);

function updatecoundown() {
    const minutes = Math.floor(time / 60);
    let second = time % 60;
    let seconds = second < 10 ? "0" + second : second ;

    countdownEL.innerHTML = `${minutes}:${seconds}`;
    time--;
}



