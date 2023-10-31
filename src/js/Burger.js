export function toggleBurger(){
  let burger = document.querySelector('.burger-menu');
  let navigation = document.querySelector('.navigation__list');
  let navigationLink = document.querySelectorAll('.navigation__link')
  burger.addEventListener('click', (event) => {
    burger.classList.toggle('burger-menu_rotate');
    navigation.classList.toggle('navigation__list_visible-tablet');

    if (document.body.style.overflow === "hidden"){
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  });
  navigationLink.forEach((element) => {
    element.addEventListener('click', () => {
    navigation.classList.remove('navigation__list_visible-tablet');
    burger.classList.toggle('burger-menu_rotate');
    document.body.style.overflow = "";
    });
  });

  
}
toggleBurger();