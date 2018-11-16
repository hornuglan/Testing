'use strict';

function sliderLoader() {

    const sliderWrapper = document.querySelector('.js-slider-wrapper');
    let currentIndex = 0;

    function changingSlides() {
        const slideActive = document.querySelector('.slider__item--active');
        const sliderDotContainer = document.querySelector('.js-slider-dots');
        const sliderDotActive = document.querySelector('.slider__dot--active');
        const nextSlide = slideActive.nextElementSibling;
        const nextDot = sliderDotActive.nextElementSibling;
        slideActive.classList.remove('slider__item--active');
        sliderDotActive.classList.remove('slider__dot--active');
        if (nextSlide) {
            nextSlide.classList.add('slider__item--active');
            nextDot.classList.add('slider__dot--active')
        }
        else {
            sliderWrapper.children[currentIndex].classList.add('slider__item--active');
            sliderDotContainer.children[currentIndex].classList.add('slider__dot--active')
        }
    };

    function changingSliderMobile() {
        const buttonPrev = document.querySelector('.js-btn-prev');
        const buttonNext = document.querySelector('.js-btn-next');

        buttonPrev.onclick = function () {
            const slideActive = document.querySelector('.slider__item--active');
            const sliderDotContainer = document.querySelector('.js-slider-dots');
            const sliderDotActive = document.querySelector('.slider__dot--active');
            const prevSlide = slideActive.previousElementSibling;
            const prevDot = sliderDotActive.previousElementSibling;

            slideActive.classList.remove('slider__item--active');
            sliderDotActive.classList.remove('slider__dot--active');
            if (prevSlide) {
                prevSlide.classList.add('slider__item--active');
                prevDot.classList.add('slider__dot--active')
            }
            else {
                sliderWrapper.lastElementChild.classList.add('slider__item--active');
                sliderDotContainer.lastElementChild.classList.add('slider__dot--active')
            }
        };

        buttonNext.onclick = function () {
            changingSlides()
        }
    }

    function clickOnSliderDot() {
        const sliderDotContainer = document.querySelector('.js-slider-dots');
        
        for (let i = 0; i < sliderDotContainer.children.length; i++) {(
            function (num) {
                sliderDotContainer.children[i].onclick = function () {
                    const slideActive = document.querySelector('.slider__item--active');
                    const sliderDotActive = document.querySelector('.slider__dot--active');

                    slideActive.classList.remove('slider__item--active');
                    sliderDotActive.classList.remove('slider__dot--active');

                    sliderWrapper.children[num].classList.add('slider__item--active');
                    sliderDotContainer.children[num].classList.add('slider__dot--active')
                }
            }
        )(i);
        }
    }

    setInterval(changingSlides, 5000);
    clickOnSliderDot();
    changingSliderMobile();
}

document.addEventListener('DOMContentLoaded', sliderLoader);


