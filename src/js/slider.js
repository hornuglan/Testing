'use strict';

function sliderLoader() {
    
    const slider = document.querySelector('.slider');
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const sliderItem = document.querySelectorAll('.slider__item');
    
    function changingSlides() {
        const slideActive = document.querySelector('.slider__item--active');
        const sliderDotContainer = document.querySelector('.slider__dots');
        const sliderDotActive = document.querySelector('.slider__dot--active');
        slideActive.classList.remove('slider__item--active');
        sliderDotActive.classList.remove('slider__dot--active');
        if (slideActive.nextElementSibling !=null) {
            slideActive.nextElementSibling.classList.add('slider__item--active');
            sliderDotActive.nextElementSibling.classList.add('slider__dot--active')
        }
        else {
            sliderWrapper.children[0].classList.add('slider__item--active');
            sliderDotContainer.children[0].classList.add('slider__dot--active')
        }
    }

    function changingSliderMobile() {
        const buttonPrev = document.querySelector('.prev');
        const buttonNext = document.querySelector('.next');

        buttonPrev.onclick = function () {
            const slideActive = document.querySelector('.slider__item--active');
            const sliderDotContainer = document.querySelector('.slider__dots');
            const sliderDotActive = document.querySelector('.slider__dot--active');

            slideActive.classList.remove('slider__item--active');
            sliderDotActive.classList.remove('slider__dot--active');
            if (slideActive.previousElementSibling !=null) {
                slideActive.previousElementSibling.classList.add('slider__item--active');
                sliderDotActive.previousElementSibling.classList.add('slider__dot--active')
            }
            else {
                sliderWrapper.lastElementChild.classList.add('slider__item--active');
                sliderDotContainer.lastElementChild.classList.add('slider__dot--active')
            }
        };

        buttonNext.onclick = function () {
            const slideActive = document.querySelector('.slider__item--active');
            const sliderDotContainer = document.querySelector('.slider__dots');
            const sliderDotActive = document.querySelector('.slider__dot--active');

            slideActive.classList.remove('slider__item--active');
            sliderDotActive.classList.remove('slider__dot--active');
            if (slideActive.nextElementSibling !=null) {
                slideActive.nextElementSibling.classList.add('slider__item--active');
                sliderDotActive.nextElementSibling.classList.add('slider__dot--active')
            }
            else {
                sliderWrapper.children[0].classList.add('slider__item--active');
                sliderDotContainer.children[0].classList.add('slider__dot--active')
            }
        }
    }

    function clickOnSliderDot() {
        const sliderDotContainer = document.querySelector('.slider__dots');
        
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


