const calc = (size, material, options, promocode, price) => {
    
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          priceBlock = document.querySelector(price);
         
    
    let sum = 0;

    function calcPrice() {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            priceBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value == 'IWANTPOPART') {
            priceBlock.textContent =  Math.round(sum * 0.7);
        } else {
            priceBlock.textContent = sum;
        }
    }

    sizeBlock.addEventListener('change', calcPrice);
    materialBlock.addEventListener('change', calcPrice);
    optionsBlock.addEventListener('change', calcPrice);
    promocodeBlock.addEventListener('input', calcPrice);

};

export default calc