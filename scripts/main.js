const left = document.getElementById('left'),
    right = document.getElementById('right'),
    mainImg = document.getElementById('mainImg');

function chImg() {
    mainImg.style.animation = "show 10s linear infinite";
    setTimeout(function(){ mainImg.src = "images/slider1.jpg"; }, 10000);
    setTimeout(function(){ mainImg.src = "images/slider.jpg";  }, 20000);
}

for(let i = 0; i < 100; i++) {
    setTimeout(function(){ chImg(); },i* 20000);
}

left.addEventListener('click', function() {
    if (mainImg.src = "images/slider.jpg") {
        mainImg.src = "images/slider1.jpg";
    }
}, false);

right.addEventListener('click', function() {
    if (mainImg.src = "images/slider1.jpg") {
        mainImg.src = "images/slider.jpg";
    }
}, false);

