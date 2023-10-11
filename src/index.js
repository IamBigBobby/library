import { sliderDesktop } from "./js/Slider-desktop";
import { sliderMobile } from "./js/Slider-mobile";

if (window.innerWidth > 1024) {
  sliderDesktop();
} else {
  sliderMobile();
}