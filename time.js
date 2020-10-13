// for the time
function digitalDate(){
    let date = new Date();

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
