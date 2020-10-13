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
                watch.src = "/smartwatch/blue.png";
                break;
            case 'two' :
                watch.src = "/smartwatch/purple.png";
                break;
            case 'three' :
                watch.src = "/smartwatch/black.png";
                break;
            case 'four' :
            watch.src = "/smartwatch/red.png";
            break;
            case 'five' :
                watch.src = "/smartwatch/pink.png";
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

// buy now button

let buyNow = document.querySelector('.buy-now');
buyNow.addEventListener('click', function(){
    alert('FitBit 21 is out of stock!')
})