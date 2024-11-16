function takeTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    document.getElementById("hour").innerText = hour;
    document.getElementById("minute").innerText = minute;
    (second < 10) ? document.getElementById("second").innerText = "0" + second :
                    document.getElementById("second").innerText = second;
}

setInterval(function() {
    takeTime();
}, 1);