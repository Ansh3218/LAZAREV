/// Sublink Hover
let SublinFun = () => {
    /// Sublink
    let SublinkBtn = document.querySelector('.Sublink');
    let SublinkIcon = document.querySelector('#SublinkIcon');
    let SublinkUl = document.querySelector('.Sublink-Ul');
    let SublinkLiElem = document.querySelectorAll('.Sublink-Ul li,hr');

    const SublinkTimeline = gsap.timeline({ paused: true });

    // Box expand animation
    SublinkTimeline.to(SublinkUl, {
        height: '32rem',
        duration: 0.5,
        ease: "power2.inOut",
    });

    // Arrow rotate at the same time
    SublinkTimeline.to(SublinkIcon, {
        rotation: 180,
        duration: 0.5,
        ease: "back.out(1.7)"
    }, "<");

    SublinkTimeline.to(SublinkLiElem, {
        visibility: "visible",
        opacity: 1,
        y: '-20',
        stagger: 0.2,
        duration: 0.3,
    }, '-=0.3');

    // Event Listeners
    SublinkBtn.addEventListener('mouseenter', () => {
        SublinkTimeline.play();  // Play animation
    });

    SublinkBtn.addEventListener('mouseleave', () => {
        SublinkTimeline.reverse();  // Reverse animation
    });
}
SublinFun();

/// Let's Btn Icon Changes
let IconChange = () => {
    let LetsBtn = document.querySelector('.lets-btn');
    let LetsPenIcon = document.querySelector('#LetPen');
    const showPen = () => {
        gsap.to(LetsPenIcon, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                LetsPenIcon.classList.replace('fa-pen', 'fa-arrow-right');
                gsap.to(LetsPenIcon, { opacity: 1, duration: 0.2, rotation: -45, scale: 1.3 });
            }
        });
    }
    const showArrow = () => {
        gsap.to(LetsPenIcon, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                LetsPenIcon.classList.replace('fa-arrow-right', 'fa-pen');
                gsap.to(LetsPenIcon, { opacity: 1, duration: 0.2, rotation: 0, scale: 1 })
            }
        })
    }
    LetsBtn.addEventListener('mouseenter', showPen);
    LetsBtn.addEventListener('mouseleave', showArrow);
}
IconChange();

/// Custom-Cursor
let CustomCursor = () => {
    /// Video-Cursor
    let Cursor = document.querySelector('.cursor');
    let VideoContainer = document.querySelector('.video-container');

    // Mouse Enter (Show Cursor)
    VideoContainer.addEventListener('mouseenter', () => {
        gsap.to(Cursor, {
            opacity: 1,
            scale: 1,
            display: "block",  // Ensure it becomes visible
            duration: 0.3,
        });
    });

    // Mouse Move Animation
    VideoContainer.addEventListener('mousemove', (dets) => {
        gsap.to(Cursor, {
            x: dets.clientX - VideoContainer.getBoundingClientRect().left,
            y: dets.clientY - VideoContainer.getBoundingClientRect().top,
            duration: 0.5,
            ease: "power2.out",
        });
    });

    // Mouse Leave (Hide Cursor Completely)
    VideoContainer.addEventListener('mouseleave', () => {
        gsap.to(Cursor, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
        });
    });
}
CustomCursor()

// Navbar 

let Menu = document.querySelector('.NavUl-Container');
let MenuLi = document.querySelectorAll('.NavUl-Container > li');
let BarIcon = document.querySelector('.togglemenu');
let BarIcon2 = document.querySelector('.barsicon');
let isOpen = false;

function toggleMenu() {
if (!isOpen) {
        Menu.style.opacity = "1";
        Menu.style.minHeight = "100vh";
        BarIcon.style.opacity = '0'
        BarIcon2.style.opacity = '1'
        
        isOpen = true;
    } else {
        Menu.style.opacity = "0";
        Menu.style.minHeight = "0";
        BarIcon.style.opacity = '1'
        BarIcon2.style.opacity = '0'
        isOpen = false;
    }
}
function checkScreenSize() {
    if (window.innerWidth >= 1500) {
        Menu.style.opacity = "1";
        Menu.style.minHeight = "0vh";

    }
    if(window.innerWidth <= 768){
        Menu.style.opacity = '0',
        BarIcon.style.opacity = '1'
        BarIcon2.style.opacity = '0'
    }
}
window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);
