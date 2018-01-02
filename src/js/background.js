window.onload = function(){
    timeStart = new Date();
   }

setInterval(
    function(){
        timeNow = new Date()
        timeSinceStart = timeNow - timeStart
        document.getElementById('timeSpent').innerHTML = timeSinceStart;
    },
1000)