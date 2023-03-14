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

// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent() {
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}


let cookie_consent = getCookie("user_cookie_consent");
if (cookie_consent != "") {
    document.getElementById("cookieNotice").style.display = "none";
} else {
    document.getElementById("cookieNotice").style.display = "block";
}
