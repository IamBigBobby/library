export function paginationSLideRight(){
  let activePagination = document.querySelector('.carousel-pagination__item_active');
  activePagination.classList.toggle('carousel-pagination__item_active');
  activePagination.nextElementSibling.classList.toggle('carousel-pagination__item_active');
}

export function paginationSLideLeft (){
  let activePagination = document.querySelector('.carousel-pagination__item_active');
  activePagination.classList.toggle('carousel-pagination__item_active');
  activePagination.previousElementSibling.classList.toggle('carousel-pagination__item_active');
}
