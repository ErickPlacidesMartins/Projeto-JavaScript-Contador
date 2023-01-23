let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let secund = document.getElementById('secund');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');

function display(){
    if(hour.value == 0 && minute.value == 0 && secund.value == 0){
        hour.value = 0;
        minute.value = 0;
        secund.value = 0;
        document.getElementById('sound').play();
        clearInterval(startDisplay);
    } else if( secund.value != 0){
        secund.value--;
    } else if( minute.value != 0 && secund.value == 0){
        secund.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 60;
        hour.value--;
    }

    return;
}


start.addEventListener('click', function(){
    function startInterval(){
        startDisplay = setInterval(function() {
            display();
        }, 1000);       
    }
    startInterval()
})

pause.addEventListener('click', function(){
    clearInterval(startDisplay)
})

stop.addEventListener('click', function(){
    hour.value = 0;
    minute.value = 0;
    secund.value = 0;
    clearInterval(startDisplay)

})

