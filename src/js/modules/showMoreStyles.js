import { getResourse } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
        const btn = document.querySelector(trigger);
          
    // cards.forEach(card => {
    //     card.classList.add();
    // })

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add();
    //     });
    //     btn.remove();
    // })

    btn.addEventListener('click', function() {
            getResourse('http://localhost:3000/styles')
                .then(res => createCard(res));
            this.remove();
    });

    function createCard(res) {
       res.forEach(({src, title,link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `
            document.querySelector(wrapper).appendChild(card);
        });

    }




        // <div class="hidden-lg hidden-md hidden-sm hidden-xs styles-2">

        // </div>

    



};

export default showMoreStyles;