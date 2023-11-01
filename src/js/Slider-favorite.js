export function sliderFavorite(){
  let seasons = document.querySelector('.seasons-peaker');
  let showcaseSeason = document.querySelectorAll('.book-showcase__season');
  let indexSeason;

  showcaseSeasonNone(showcaseSeason);

  seasons.addEventListener('click', (event) => {
    let selected = event.target;
    let radioButtons = document.querySelectorAll('.favorites__season');
    indexSeason = Array.from(radioButtons).findIndex((radioButton) => {
      return radioButton.value === selected.value;
    });
    if (indexSeason !== -1){
      showcaseSeason.forEach((season) => {
        season.style.display = "none";
      });
      showcaseSeason[indexSeason].style.display = "flex";
    }
  });
}

function showcaseSeasonNone(arr){
  for (let i = 1; i < arr.length; i++){
    arr[i].style.display = "none";
  }
}

sliderFavorite();