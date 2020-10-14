// for the time
function digitalDate(){
    let date = new Date();
    // let countingTime = document.querySelector('.time');

    // let time = date.getHours() + ':' + date.getMinutes() + ':'+  date.getSeconds();
    // countingTime.innerHTML = time;

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    
    hour = hour < 10? `0` + hour: hour;
    minutes = minutes < 10? `0` + minutes : minutes;
    seconds = seconds < 10? `0` + seconds : seconds;

    document.querySelector('.hour').innerHTML = hour;
    document.querySelector('.mins').innerHTML = `:` + minutes;
    document.querySelector('.seconds').innerHTML = `:` + seconds;

    requestAnimationFrame(digitalDate)
}
digitalDate();
