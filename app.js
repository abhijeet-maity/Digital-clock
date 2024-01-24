
const startClock = () => {
    const data = document.getElementById('clock');
    const now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let morningOrAfternoon = document.getElementById('amOrpm');
    if(hr > 12) {
        morningOrAfternoon.innerHTML = "PM";
    } else {
        morningOrAfternoon.innerHTML = "AM";
    }

    hr =  hr > 12 ? hr - 12 : hr;
    // if (hr > 12) {
    //     hr = hr - 12;
    // }

    data.innerText = `${(hr < 10 && "0") + hr}:${(min < 10 && "0") + min}:${(sec < 10 && "0") + sec}`;
}
    
setInterval(startClock, 1000);

