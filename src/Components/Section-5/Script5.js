let videoPlay = document.querySelectorAll('.my-video');


videoPlay.forEach((video)=> {
    video.addEventListener('mouseenter', ()=> {
        video.play();
    })
    video.addEventListener('mouseleave', ()=> {
        video.pause();
        video.currentTime = 0
    })
})