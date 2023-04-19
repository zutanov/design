const filter = () => {
    
    const menu = document.querySelector('.portfolio-menu'),
          li = menu.querySelectorAll('li'),
          btnAll = menu.querySelector('.all'),
          btnLovers = menu.querySelector('.lovers'),
          btnChef = menu.querySelector('.chef'),
          btnGirl = menu.querySelector('.girl'),
          btnGuy = menu.querySelector('.guy'),
          btnGrandmother = menu.querySelector('.grandmother'),
          btnGranddad = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          all = wrapper.querySelectorAll('.all'),
          girl = wrapper.querySelectorAll('.girl'),
          lovers = wrapper.querySelectorAll('.lovers'),
          guy = wrapper.querySelectorAll('.guy'),
          chef = wrapper.querySelectorAll('.chef'),
          no = document.querySelector('.portfolio-no');
    
    const showType = (mark) => {
        all.forEach(el => {
            el.style.display = 'none';
            el.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');
   
        if(mark) {
            mark.forEach(btn => {
                btn.style.display = 'block';
                btn.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    menu.addEventListener('click', (e) => {
        
        let target = e.target;
        
        if(target && target.nodeName === 'LI') {
            li.forEach(li => li.classList.remove('active'));
            target.classList.add('active');
        }

    });

    btnAll.addEventListener('click', () => {
        showType(all);
    })
    btnLovers.addEventListener('click', () => {
        showType(lovers);
    })
    btnChef.addEventListener('click', () => {
        showType(chef);
    })
    btnGirl.addEventListener('click', () => {
        showType(girl);
    })
    btnGuy.addEventListener('click', () => {
        showType(guy);
    })
    btnGrandmother.addEventListener('click', () => {
        showType();
    })
    btnGranddad.addEventListener('click', () => {
        showType();
    })
};

export default filter;