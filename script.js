const header = document.querySelector('.header');

const burgerBtn = document.querySelector('button.burger');
const closeBtn = document.querySelector('button.close');
const mobileNav = document.querySelector('.mobile-nav');

burgerBtn.addEventListener('click', (e) => {
    closeBtn.classList.toggle('display-none');
    burgerBtn.classList.add('display-none');
    mobileNav.classList.toggle('open-main-nav');
    header.toggleAttribute('data-overlay');
})

closeBtn.addEventListener('click', (e) => {
    burgerBtn.classList.toggle('display-none');
    closeBtn.classList.add('display-none');
    mobileNav.classList.toggle('open-main-nav');
    header.toggleAttribute('data-overlay');
})

const slider = new A11YSlider(document.querySelector('.slider'), {
    adaptiveHeight: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    customPaging: function(index, a11ySlider) {
        return '<button class="slider-btn">' + 
            '<span class="visually-hidden>"' + index + '</span>'
        + '</button>';
    },
    responsive: {
        850: {
            disable: true // slider disabled 960px to 1279px
        }
    }
});