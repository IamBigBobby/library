import { sliderDesktop } from "./js/Slider-desktop";
import { sliderMobile } from "./js/Slider-mobile";
import { toggleBurger } from "./js/Burger";
import { sliderFavorite } from "./js/Slider-favorite";

if (window.innerWidth > 1024) {
  sliderDesktop();
} else {
  sliderMobile();
}