let func = () => {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let hrotate = (30 * h + m / 2);
    let mrotate = (6 * m + s / 10);
    let srotate = (6 * s);

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    seconds.style.transform = `rotate(${srotate}deg)`;
}
setInterval(func, 1000);