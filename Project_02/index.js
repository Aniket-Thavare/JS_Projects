let isOnline = true, intervalld, timer = 10;
const popup = document.querySelector(".popup");
const wifiIcon = document.querySelector(".icon i");
const popupTitle = document.querySelector(".popup .title");
const popupDesc = document.querySelector(".desc");


const checkConnection = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        isOnline = response.status >= 200 && response.status < 300;
    } catch (error) {
        isOnline = false;
    }
    timer = 10;
    clearInterval(intervalld);
    handlePopup(isOnline);
}

const handlePopup = (status) => {
    // const elem = document.querySelector(".active");
    if(status) {
        wifiIcon.className = "uil uil-wifi";
        popupTitle.innerText = "Restored Connection";
        popupDesc.innerHTML = "Your device is now successfully connected to the internet.";
        popup.classList.add("online");
        return setTimeout(() => popup.classList.remove("active"), 2000);

    }
    wifiIcon.className = "uil uil-wifi-slash";
    popupTitle.innerText = "Lost Connection";
    popupDesc.innerHTML = "Your network is unavailable. We will attempt to reconnect you in <b>10</b> seconds.";
    popup.classList.add("active");

    intervalld = setInterval(() => {
        timer--;
        if(timer === 0) checkConnection();
        popup.querySelector(".desc b").innerText = timer;
    }, 1000);
}

setInterval(() => isOnline && checkConnection(), 3000);