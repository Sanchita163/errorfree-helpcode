document.addEventListener('DOMContentLoaded', function () {
    const slideContainer = document.querySelector('.topic-carousel-container');
    // Clone all slides and append them to the end of the container to create an infinite loop effect
    const allSlides = Array.from(slideContainer.children);
    const cloneSlides = allSlides.map(slide => slide.cloneNode(true));
    cloneSlides.forEach(clone => slideContainer.appendChild(clone));

    let slideIndex = 0;
    let moving = false;

    const prevBtn = document.querySelector('.topic-carousel-prev');
    const nextBtn = document.querySelector('.topic-carousel-next');

    prevBtn.addEventListener('click', function () {
        if (moving) return;
        slideIndex--;
        updateSlidePosition();
    });

    nextBtn.addEventListener('click', function () {
        if (moving) return;
        slideIndex++;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        moving = true;
        var slideWidth = slideContainer.children[0].offsetWidth + 20; // Include margin for slide width calculation
        slideContainer.style.transition = 'transform 0.5s ease';
        slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

        slideContainer.addEventListener('transitionend', () => {
            // Check if the carousel has moved beyond the original slides
            if (slideIndex >= allSlides.length) {
                slideIndex = 0; // Reset to the first slide without transition
                slideContainer.style.transition = 'none';
                slideContainer.style.transform = `translateX(0px)`;
            } else if (slideIndex < 0) {
                slideIndex = allSlides.length - 1; // Move to the last of the original slides if we go backwards past the first
                slideContainer.style.transition = 'none';
                slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            }
            moving = false;
        });
    }
});
