const Section_7_img = document.getElementById('Section-7-img');

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".root"),
    smooth: true,
    lerp: 0.05
});
locoScroll.update();

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.scrollerProxy(".root", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }
});

locoScroll.on("scroll", ScrollTrigger.update);

gsap.to(Section_7_img, {
    rotation: 360,
    scrollTrigger: {
        trigger: Section_7_img,
        scroller: ".root",
        start: "top 100%",
        end: "top -100%",
        scrub: 1,
    }
});
