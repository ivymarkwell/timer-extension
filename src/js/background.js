var elapsedTime = 0;
var startDate = null;
 
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.status == 'complete') {
        startDate = new Date();
        localStorage.setItem("startDate", startDate);
    };
});

window.onload = function(){
    setTimeout(function() {
        setInterval(function() {
            startDate = new Date(localStorage.getItem("startDate"))
            timeNow = new Date();
            elapsedTime = timeNow - startDate;
            elapsedTimeSeconds = Math.round(elapsedTime / 1000)
            document.getElementById('elapsedTime').innerHTML = elapsedTimeSeconds;
        }, 100);
    }, 3);
};