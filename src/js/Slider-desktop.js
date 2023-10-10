let slideRange = 0;
let imagesCarousel = document.querySelectorAll('.carousel__item');
let carousel = document.querySelector('.carousel');

export function sliderDesktop(){
  for (let i = 0; i <= 2; i++){
    imagesCarousel[i].classList.add('carousel__item_visible');
  }
  for (let i = 3; i < imagesCarousel.length; i++){
    imagesCarousel[i].classList.add('carousel__item_unvisible');
  }

  imagesCarousel.forEach((element) => {
    element.addEventListener('click', (event) => {
      moveSlider(event);
    })
  })
}

function moveSlider (event){
  let visibleImg = document.querySelectorAll('.carousel__item_visible');
  let index = Array.prototype.indexOf.call(visibleImg, event.target);
  if (index === 2){
    if (event.target.nextElementSibling.classList.contains('carousel__item_unvisible')){
      slideRange += 475;

      carousel.style.left = -slideRange + 'px';

      event.target.nextElementSibling.classList.remove('carousel__item_unvisible');
      event.target.nextElementSibling.classList.add('carousel__item_visible');
      
      visibleImg[0].classList.remove('carousel__item_visible');
      visibleImg[0].classList.add('carousel__item_unvisible');
    }
  }
  else if (index === 0){
    if (event.target.previousElementSibling.classList.contains('carousel__item_unvisible')){
      slideRange -= 475;

      carousel.style.left = -slideRange + 'px';

      event.target.previousElementSibling.classList.remove('carousel__item_unvisible');
      event.target.previousElementSibling.classList.add('carousel__item_visible');
      
      visibleImg[2].classList.remove('carousel__item_visible');
      visibleImg[2].classList.add('carousel__item_unvisible');
    }
  }
} 
