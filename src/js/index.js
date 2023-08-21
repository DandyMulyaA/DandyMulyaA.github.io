const clickstart  = document.querySelector('.start-button');
const clickreset  = document.querySelector('.reset-button');
const clockSecond = document.querySelector('.clock-second');
const clockMinutes = document.querySelector('.clock-minutes');
const clockHours = document.querySelector('.clock-hour');

let resultSecond = 0;
let resultMinutes = 0;
let resultHours = 0;
let intervalid;

clockSecond.innerHTML = resultSecond <= 9 ? `0${resultSecond}`: `${resultSecond}`;
clockMinutes.innerHTML = resultMinutes <= 9 ? `0${resultMinutes}-`: `${resultMinutes}-`;
clockHours.innerHTML = resultHours <= 9 ? `0${resultHours}-`: `${resultHours}-`;


clickstart.onclick = () => {
    CheckingClickStart();
}

clickreset.onclick = () => {
    CheckingClickReset();
}



function ClockFunction() {
    intervalid = setInterval(() => {
        resultSecond += 1;
        if (resultSecond <= 9) {
            clockSecond.innerHTML = `0${resultSecond}`;
        } else {
            clockSecond.innerHTML = `${resultSecond}`;
            if (resultSecond === 60) {
                clockSecond.innerHTML = `00`;
                resultMinutes += 1
                if (resultMinutes <= 9) {
                    clockMinutes.innerHTML = `0${resultMinutes}-`;
                } else {
                    clockMinutes.innerHTML = `${resultMinutes}-`;
                    if (resultMinutes === 60) {
                        clockMinutes.innerHTML = `00-`;
                        resultHours++;
                        if (resultHours <= 9) {
                            clockHours.innerHTML = `0${resultHours}-`;
                        } else {
                            clockHours.innerHTML = `${resultHours}-`;
                            if (resultHours === 60) {
                                clockHours.innerHTML = `00-`;
                                resultSecond = 0;
                                resultHours = 0;
                                resultMinutes = 0;
                                
                            }
                        }
                        
                    }
                }
                resultSecond = 0;
            }
        }
    },1000);
};


function CheckingClickStart() {
    if (clickstart.innerHTML === 'Start') {
        ClockFunction();
        clickstart.innerHTML = 'Stop';   
    } else {
        clearInterval(intervalid);
        clickstart.innerHTML = 'Start';
    }
};



function CheckingClickReset() {
    resultSecond = 0;
    resultMinutes = 0;
    resultHours = 0;
    clockSecond.innerHTML = `00`;
    clockMinutes.innerHTML = `00-`;
    clockHours.innerHTML = `00-`;
}
