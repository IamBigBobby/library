import { sliderDesktop } from "./js/Slider-desktop";
import { sliderMobile } from "./js/Slider-mobile";
import { toggleBurger } from "./js/Burger";

if (window.innerWidth > 1024) {
  sliderDesktop();
} else {
  sliderMobile();
}