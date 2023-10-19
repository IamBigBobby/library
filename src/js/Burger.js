export function toggleBurger(){
  let burger = document.querySelector('.burger-menu');
  let navigation = document.querySelector('.navigation__list');
  burger.addEventListener('click', (event) => {
    console.log(event.target);
    burger.classList.toggle('burger-menu_rotate');
    navigation.classList.toggle('navigation__list_visible-tablet');

    if (document.body.style.overflow === "hidden"){
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
  })
}
toggleBurger();