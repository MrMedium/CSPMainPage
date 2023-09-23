// Function to set a cookie with an expiry date
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to check if the user has accepted cookies
function checkCookie() {
    const cookieAccepted = getCookie("cookieAccepted");
    if (cookieAccepted === "") {
        // Show the cookie consent popup
        const popup = document.getElementById("cookie-consent");
        popup.style.display = "block";

        // Add an event listener to the "Accept" button
        document.getElementById("accept-cookies").addEventListener("click", function () {
            // Set the cookie to record acceptance
            setCookie("cookieAccepted", "true", 365); // Cookie expires in 1 year

            // Hide the popup
            popup.style.display = "none";
        });
    }
}

// Function to get the value of a cookie
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Check if the user has accepted cookies when the page loads
checkCookie();
