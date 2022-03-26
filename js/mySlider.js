function mySlider() {
    const images = document.querySelectorAll('.slider_image');
    const image = document.querySelector('.slider_image');
    const arrows = document.querySelectorAll('.slider_arrow');
    const dots = document.querySelectorAll('.slider_dot');
    const info = document.querySelectorAll('.projects_content-text');
    const titles = document.querySelectorAll('.projects_content-list-item');

    initImage();
    initArrows();
    //initDots();
    //changeInfo();

    function initImage() {
        images.forEach((image, index) => {
            image.classList.add('index' + index);
            if(index === 0) image.classList.add('active');
            
        });     
    }

    function initArrows() {
        arrows.forEach((arrow) => {
            arrow.addEventListener('click', function () {
                let curSlide = images.querySelector('.active');
                let nextSlide;
                if(arrow.classList.contains('left')) {
                    nextSlide = curSlide === 0 ? images.length - 1 : curSlide - 1;
                } else {
                    nextSlide = curSlide === images.length - 1 ? 0 : curSlide + 1;
                }
                changeClass(image, nextSlide);
            });
        });
    }

    function changeClass(nodeElem, num) {
        nodeElem.querySelector('.active').classList.remove('active');
        nodeElem.querySelector('.index' + num).classList.add('active');
    };
}

document.addEventListener('DOMContentLoaded', mySlider);