function nextSlide(){
    let slideShow = document.querySelector(".slideShow");
    let images = slideShow.querySelectorAll("img");
    let buttons = slideShow.querySelectorAll("button");
    slideShow.innerHTML = '';
    slideShow.append(buttons[0])
    slideShow.append(images[1]);
    slideShow.append(images[2]);
    slideShow.append(images[3]);
    slideShow.append(images[0]);
    slideShow.append(buttons[1]);
}

function previousSlide(){
    let slideShow = document.querySelector(".slideShow");
    let images = slideShow.querySelectorAll("img");
    let buttons = slideShow.querySelectorAll("button");
    slideShow.innerHTML = '';
    slideShow.append(buttons[0])
    slideShow.append(images[3]);
    slideShow.append(images[0]);
    slideShow.append(images[1]);
    slideShow.append(images[2]);
    slideShow.append(buttons[1]);
}

window.onload = function(){
    document.querySelector("#next").onclick = nextSlide;
    document.querySelector("#before").onclick = previousSlide;
}