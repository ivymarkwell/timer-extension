chrome.tabs.onActivated.addListener(function() {
    startDate = new Date();
    localStorage.setItem("startDate", startDate);
});

function updateTime() {
    startDate = new Date(localStorage.getItem("startDate"))
    timeNow = new Date();
    elapsedTime = timeNow - startDate;
    elapsedTimeSeconds = Math.round(elapsedTime / 1000)

    timeElement = document.getElementById("elapsedTime")
    if (typeof(timeElement) != "undefined" && timeElement != null) {
        var date = new Date(null);
        date.setSeconds(elapsedTimeSeconds);
        var time = date.toISOString().substr(11, 8);
        timeElement.innerHTML = time;
    }
};

setInterval(updateTime, 100);