let images = [
    {
        url: './images/admiral.jpg',
        title: 'Rostov-on-Don Admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request',
    },

    {
        url: './images/thieves.jpg',
        title: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request',

    },

    {
        url: './images/patriotic.jpg',
        title:'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request',

    }
];

function initSlider () {
    if(!images || !images.length) return;
    
    let sliderImages = document.querySelector('.projects_slider-images');
    let sliderArrows = document.querySelector('.projects_slider');
    let sliderDots = document.querySelector('.slider_dots');
    let sliderNameImages = document.querySelector('.projects_content-list');
    let infoImages = document.querySelectorAll('.projects_info-wrap');

    initImages();
    initArrows();
    initDots();
    initNameImage();
    addInfo(0);
    
    function initImages() {
        images.forEach((image, index) => {
          let divForImage = `<div class="slider_image n${index} ${index === 0 ? "active" : ""}" 
          style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
          sliderImages.innerHTML += divForImage;
        });
    }

    function initArrows() {
        sliderArrows.querySelectorAll('.slider_arrow').forEach(arrow => {
          arrow.addEventListener('click', function() {
            let curNumber = +sliderImages.querySelector('.active').dataset.index;
            let nextNumber;
            if (arrow.classList.contains('left')) {
              nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class="slider_dot n${index} ${index === 0? "active" : ""}" data-index=${index}></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider_dot').forEach(dot => {
            dot.addEventListener('click', function () {
                moveSlider(this.dataset.index);
                sliderDots.querySelector('.active').classList.remove('active');
                this.classList.add('active');
            });
        });
    }

    function initNameImage() {
      images.forEach((item, index) => {
        let nameImage = `<li class="projects_content-list-item n${index} ${index === 0 ? "active" : ""}" ">${images[index].title}</li>`;
        sliderNameImages.innerHTML += nameImage;
      });
    }

  function addInfo(indexImg) {
    infoImages.forEach((info) => {
      let paragraph;
      let subtitle;

      if(info.classList.contains('city')) {
        paragraph = `<p class="projects_content-paragraph">${images[indexImg].title}</p>`;
        subtitle = `<h3 class="projects_content-info-subtitle">City:</h3>`;
      }
      if(info.classList.contains('area')) {
        paragraph = `<p class="projects_content-paragraph">${images[indexImg].area}</p>`;
        subtitle = `<h3 class="projects_content-info-subtitle">Apartment area:</h3>`;
      } 
      if(info.classList.contains('time')) {
        paragraph = `<p class="projects_content-paragraph">${images[indexImg].time}</p>`;
        subtitle = `<h3 class="projects_content-info-subtitle">Repair time:</h3>`;
      } 
      if(info.classList.contains('cost')) {
        paragraph = `<p class="projects_content-paragraph">${images[indexImg].cost}</p>`;
        subtitle = `<h3 class="projects_content-info-subtitle">Repair cost:</h3>`;
      } 
      info.innerHTML = ``;
      info.innerHTML += subtitle;
      info.innerHTML += paragraph;
      
    });
  }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
        sliderNameImages.querySelector('.active').classList.remove('active');
        sliderNameImages.querySelector('.n' + num).classList.add('active');
        addInfo(num);
    }
  }

document.addEventListener('DOMContentLoaded', initSlider);