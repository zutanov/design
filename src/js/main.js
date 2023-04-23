import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkInputText from "./modules/checkInputText";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSizes from "./modules/pictureSizes";
import accordion from "./modules/accordion";
import burgerMenu from "./modules/burgerMenu";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";
  modal();
  slider(".feedback-slider-item", "", ".main-prev-btn", ".main-next-btn");
  slider(".main-slider-item", "vertical");
  forms();
  mask('[name="phone"]');
  checkInputText("[name='name']");
  checkInputText("[name='message']");
  showMoreStyles(".button-styles", "#styles .row");
  calc("#size", "#material", "#options", ".promocode", ".calc-price");
  filter();
  pictureSizes(".sizes-block");
  accordion(".accordion-heading", ".accordion-block");
  burgerMenu(".burger", ".burger-menu");
});
