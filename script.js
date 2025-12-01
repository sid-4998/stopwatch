let secString = '00';
let minString = '00';
let hrString = '00'; 
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

document.querySelector(".start").addEventListener('click', () => {
    interval = setInterval(() => {
        seconds++;
        if(seconds<10) {
            secString = '0' + `${seconds}`;
            document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
        }
        else if(seconds == 60) {
            seconds = 0;
            secString = '00';
            minutes++;
            if(minutes<10) {
                minString = '0' + `${minutes}`;
                document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
            }
            else if(minutes == 60) {
                minString = '00';
                minutes = 0;
                hours++;
                if(hours<10) {
                    hrString = '0' + `${hours}`;
                    document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
                }
                else if(hours == 24) {
                    hrString = '00';
                    minString = '00';
                    secString = '00';
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
                }
                else {
                    hrString = String(hours);
                    document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
                }
            }
            else {
                minString = String(minutes);
                document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
            }

        }
        else {
            secString = String(seconds);
            document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
        }
    }, 1000);

})

document.querySelector(".pause").addEventListener('click', () => {
    clearInterval(interval);
})

document.querySelector(".reset").addEventListener('click', () => {
    hrString = '00';
    minString = '00';
    secString = '00';
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector('.time').innerHTML = `${hrString}:${minString}:${secString}`;
})