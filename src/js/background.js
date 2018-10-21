function updateTime() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        if (tabs[0]) {
            var pathArray = tabs[0].url.split( '/' );
            var protocol = pathArray[0];
            var host = pathArray[2];
            url = protocol + '//' + host;
        }
        else {
            url = null
        };
    });

    if (url && localStorage.getItem(url) != null && localStorage.getItem('last_visited') == url) {
        startDate = new Date(localStorage.getItem(url));
    }
    else {
        startDate = new Date();
    };

    timeNow = new Date();
    timeSpent = timeNow - startDate
    elapsedTimeSeconds = Math.round(timeSpent / 1000);

    timeElement = document.getElementById("elapsedTime")
    if (typeof(timeElement) != "undefined" && timeElement != null) {
        var date = new Date(null);
        date.setSeconds(elapsedTimeSeconds)
        var time = date.toISOString().substr(11, 8)
        timeElement.innerHTML = time
    };

    // set local storage item
    localStorage.setItem(url, startDate);
    localStorage.setItem('last_visited', url);
};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    localStorage.setItem('last_visited', None);
 });

setInterval(updateTime, 100);