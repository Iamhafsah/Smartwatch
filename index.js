let colors = document.querySelectorAll('.pallette div');
let watch = document.querySelector('.watch-img');
let timeBtn = document.querySelector('.time-btn');
let heartBtn = document.querySelector('.heart-rate-btn');
let time = document.querySelector('.time');
let heartDisplay = document.querySelector('.heart-div');



// to switch between watch colors
for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener('click', function(e){
        switch(e.target.className){
            case 'one' :
                watch.src = "blue.png";
                break;
            case 'two' :
                watch.src = "purple.png";
                break;
            case 'three' :
                watch.src = "black.png";
                break;
            case 'four' :
            watch.src = "red.png";
            break;
            case 'five' :
                watch.src = "pink.png";
                break;
        }

    })
}


const timeEffect = () =>{
    time.classList.toggle('hide');
    heartDisplay.classList.add('hide');
}
const heartShowing = () =>{
    heartDisplay.classList.toggle('hide');
    time.classList.add('hide');
}

// show time and heart rate
timeBtn.addEventListener('click', timeEffect);
heartBtn.addEventListener('click', heartShowing);

// show random numbers
let heartNum = document.querySelector('.heart-p');
heartNum.innerHTML = Math.floor(Math.random() * 30) + 40;
// buy now button

let buyNow = document.querySelector('.buy-now');
buyNow.addEventListener('click', function(){
    alert('FitBit 21 is out of stock!')
})