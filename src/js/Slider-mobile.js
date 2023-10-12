import { paginationSLideLeft } from "./Pagination";
import { paginationSLideRight } from "./Pagination";

let slideRange = 950;
let carousel = document.querySelector('.carousel');

export function sliderMobile(){
  let swipers = document.querySelectorAll('.carousel__swiper');
  let leftSwipe = swipers[0];
  let rightSwipe = swipers[1];

  leftSwipe.addEventListener('load', () => {
    let svg = leftSwipe.contentDocument;
    svg.addEventListener('click', (event) => {
      swipeLeft();
    });
  });

  rightSwipe.addEventListener('load', () => {
    let svg = rightSwipe.contentDocument;
    svg.addEventListener('click', (event) => {
      swipeRight()
    })
  })
}

function swipeLeft(){
  if (slideRange >= 950){
    return;
  } else {
    slideRange += 475;
    carousel.style.left = slideRange + 'px';
    paginationSLideLeft();
  }
}

function swipeRight(){
  if (slideRange <= -950){
    return;
  } else {
    slideRange -= 475;
    carousel.style.left = slideRange + 'px';
    paginationSLideRight();
  }
}