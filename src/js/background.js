chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    url = changeInfo.url

    if (localStorage.getItem(url) != null) {
        pageTime = localStorage.getItem(url).split(",");
    }
    else {
        pageTime = null
    };
});

function updateTime() {
    timeNow = new Date();
    startDate = new Date();
    timeSpent = 0;

    if (typeof(pageTime) != "undefined" && pageTime != null) {
        startDate = new Date(pageTime[0]);
        timeSpent = pageTime[1];
    };

    timeSpent = (timeNow - startDate) + timeSpent
    elapsedTimeSeconds = Math.round(timeSpent / 1000);

    console.log(timeNow, startDate, timeSpent)

    timeElement = document.getElementById("elapsedTime")
    if (typeof(timeElement) != "undefined" && timeElement != null) {
        var date = new Date(null);
        date.setSeconds(elapsedTimeSeconds)
        var time = date.toISOString().substr(11, 8)
        timeElement.innerHTML = timeSpent
        alert(timeSpent)
    };

    if (typeof(url) === "undefined") {
        url = window.location.hostname
    };

    // set local storage item
    pageTime = [startDate, timeSpent]
    localStorage.setItem(url, pageTime);
};

setInterval(updateTime, 100);