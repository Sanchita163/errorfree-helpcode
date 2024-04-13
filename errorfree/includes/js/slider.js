document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.topic-carousel-main');
	const slideContainer = document.querySelector('.topic-carousel-container');
	const prevBtn = document.querySelector('.topic-carousel-prev');
	const nextBtn = document.querySelector('.topic-carousel-next');

	let slideIndex = 0;

	prevBtn.addEventListener('click', function () {
		slideIndex = Math.max(slideIndex - 1, 0);
		updateSlidePosition();
	});

	nextBtn.addEventListener('click', function () {
		slideIndex = Math.min(
			slideIndex + 1,
			slideContainer.children.length - 3
		);
		updateSlidePosition();
	});

	function updateSlidePosition() {
		var slideWidth = slideContainer.children[0].offsetWidth;
		slideWidth = slideWidth + 20;
		slideContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
	}
});
