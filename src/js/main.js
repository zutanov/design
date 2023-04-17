import modal from "./modules/modal";
import slider from "./modules/slider";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkInputText from "./modules/checkInputText";
import showMoreStyles from "./modules/showMoreStyles";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    checkInputText("[name='name']");
    checkInputText("[name='message']");
    showMoreStyles('.button-styles', '.styles-2');
})