const modal = () => {    

    let btnPressed;

    function modalAutoOpen (modal, time) {
        setTimeout(function(){
            let display;
            document.querySelectorAll('[data-modal').forEach(el => {
                if(getComputedStyle(el).display !== 'none') {
                    display = 'block';
                }
            });

            if(!display) {
                const modalWindow = document.querySelector(modal);
                modalWindow.style.display = 'block';
                document.body.style.overflow ='hidden';
                let scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            }
        },time)
    }

    function modalOpen (trigger, modal, close, destroy = false) {
        const modalTrigger = document.querySelectorAll(trigger);
        const modalWindow = document.querySelector(modal);
        const modalClose = document.querySelector(close);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        modalTrigger.forEach(el => {
            el.addEventListener('click', (e) => {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(el => {
                    el.style.display = 'none';
                    el.classList.add('animated', 'fadeIn');
                });

                if(destroy) {
                    el.remove();
                }

                btnPressed = true;

                modalWindow.style.display = 'block';
                document.body.style.overflow ='hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        modalClose.addEventListener('click', (e) => {
            windows.forEach(el => {
                el.style.display = 'none';
            });

            modalWindow.style.display = 'none';
            document.body.style.overflow ='';
            document.body.style.marginRight = `0px`;
            //    document.body.classList.remove('modal-open');  
            });
        


        modalWindow.addEventListener('click', (e) => {
            if(e.target === modalWindow) {
                windows.forEach(el => {
                    el.style.display = 'none';
                });
                modalWindow.style.display = 'none';
                document.body.style.overflow ='';
                document.body.style.marginRight = `0px`;
            //    document.body.classList.remove('modal-open');
            }          
        });
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll(selector) {
        window.addEventListener('scroll', () => {
                    //Вычисляем максимальную высоту всей страницы в зависимости от браузера
            let scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                   //  высота отскролленной части        видимаяя часть экрана                  
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                document.querySelector(selector).click();     // автозапуск события клик
            }
        });
    }

    modalOpen('.button-design', '.popup-design', '.popup-design .popup-close');
    modalOpen('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    modalOpen('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    openByScroll('.fixed-gift');
   // modalAutoOpen('.popup-consultation', 5000);

};

export default modal;