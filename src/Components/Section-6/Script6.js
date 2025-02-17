let ideaContainer = document.querySelector('.idea-container');
let projectIdeaImg = document.querySelector('#projectIdea1');
let projectIdeaIcon = document.querySelector('#projectIdea2');

// Default state: Image visible, Icon hidden
gsap.set(projectIdeaIcon, { display: "none", scale: 0.8, opacity: 0 });

// Mouse Enter Animation
ideaContainer.addEventListener('mouseenter', () => {
    gsap.to(projectIdeaImg, {
        scale: 0.1, opacity: 0, duration: 0.1, ease: "power2.out", onComplete: () => {
            projectIdeaImg.style.display = "none";
            projectIdeaIcon.style.display = "block";
            gsap.to(projectIdeaIcon, { scale: 1, opacity: 1, duration: 0.1, ease: "power2.out" });
        }
    });
});

// Mouse Leave Animation
ideaContainer.addEventListener('mouseleave', () => {
    gsap.to(projectIdeaIcon, {
        scale: 0.1, opacity: 0, duration: 0.1, ease: "power2.out", onComplete: () => {
            projectIdeaIcon.style.display = "none";
            projectIdeaImg.style.display = "block";
            gsap.to(projectIdeaImg, { scale: 1, opacity: 1, duration: 0.1, ease: "power2.out" });
        }
    });
});

let CustomCursor2 = () => {
    /// Video-Cursor
    let Cursor2 = document.querySelector('.cursor-2');
    let IdeaContainer = document.querySelector('.idea-container');

    // Mouse Enter (Show Cursor)
    IdeaContainer.addEventListener('mouseenter', () => {
        gsap.to(Cursor2, {
            opacity: 1,
            scale: 1,
            display: "block",  // Ensure it becomes visible
            duration: 0.3
        });
    });

    // Mouse Move Animation
    IdeaContainer.addEventListener('mousemove', (dets) => {
        gsap.to(Cursor2, {
            x: dets.clientX - IdeaContainer.getBoundingClientRect().left,
            y: dets.clientY - IdeaContainer.getBoundingClientRect().top,
            duration: 0.5,
            ease: "power2.out",
        });
    });

    // Mouse Leave (Hide Cursor Completely)
    IdeaContainer.addEventListener('mouseleave', () => {
        gsap.to(Cursor2, {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            onComplete: () => {
                // Cursor.style.display = "none";  // Completely remove cursor
            }
        });
    });
}
CustomCursor2()
