const checkInputText = selector => {
    let inputs = document.querySelectorAll(selector);
    inputs.forEach(el => {
        el.addEventListener('keypress', (e) => {
            if(e.key.match(/[^а-яё 0-9]/gi)) {
                e.preventDefault();
            }
        })
    })
};

export default checkInputText;