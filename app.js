let scrollableSection = document.querySelector('.scrollable');
let image = [...document.querySelectorAll('.img')];


let current = 0;
let target = 0;
let ease = 0.025;

document.body.style.height = `${scrollableSection.getBoundingClientRect().height}px`;

image.forEach((image,idx) => {
    image.style.backgroundImage = `url(./image/${idx + 1}.jpg)`;

});

function lerp(start, end,t){
    return start * (1 -t) + end * t;
}

function animate(){
    target = window.scrollY;
    current = lerp(current, target, ease);

    scrollableSection.style.transform = `translate3d(0, ${-current}px, 0)`;

    image.forEach(image => {
        let top = image.parentElement.getBoundingClientRect().top;
        image.style.transform = `rotatex(${top * 0}deg) rotatey(${top * 0.075}deg)`; 
    })
    requestAnimationFrame(animate);
}

animate();