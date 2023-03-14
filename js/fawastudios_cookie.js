/* Show cookie popup. */
function showCookiePopup() {
    let cookiePopup = document.getElementById("cookie-popup");
    cookiePopup.style.display = "block";
}

/* Hides cookie popup and saves the value to localstorage. */
function hideCookiePopup() {
    localStorage.setItem("isCookieAccepted", "yes");
    let cookiePopup = document.getElementById("cookie-popup");
    cookiePopup.style.display = "none";
}

/* Checks localstorage and determines whether or not to show cookie popup. */
function initializeCookiePopup() {
    let isCookieAccepted = localStorage.getItem("isCookieAccepted");
    if (isCookieAccepted === null) {
        localStorage.setItem("isCookieAccepted", "no");
        showCookiePopup();
    }
    if (isCookieAccepted === "no") {
        showCookiePopup();
    }
}