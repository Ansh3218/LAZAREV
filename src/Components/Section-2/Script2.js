let ReviewBox = document.querySelectorAll('.review-box');

ReviewBox.forEach((ReviewBoxes)=> {
    let BoxVideo = ReviewBoxes.querySelector('video');
    ReviewBoxes.addEventListener('mouseenter', ()=> {
        BoxVideo.style.opacity = '1';
        BoxVideo.currentTime = 0;
        BoxVideo.play();
    });
    ReviewBoxes.addEventListener('mouseleave', ()=> {
        BoxVideo.style.opacity = '0'
    })
})