
const slider = (slide, dir, prev, next) => {
    const slides = document.querySelectorAll(slide);
          
    let slideIndex = 1,
        paused = false;

    function showSlide(n) {

        if(slideIndex > slides.length) {
            slideIndex = 1;
        } 
        
        if (slideIndex < 1) {
            slideIndex = slides.length
        }

        slides.forEach(el => {
            el.classList.add('animated');
            el.style.display = 'none';
        })

        slides[slideIndex-1].style.display = 'block';
    }

    showSlide(slideIndex);

    function plusSlide(n) {
        showSlide(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev), 
              nextBtn = document.querySelector(next);
            
        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            slides[slideIndex-1].classList.remove('slideInRight');
            slides[slideIndex-1].classList.add('slideInLeft');
        });

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            slides[slideIndex-1].classList.add('slideInRight');
            slides[slideIndex-1].classList.remove( 'slideInLeft');
        });

    } catch (e) {

    }

    function activateAnimation() {
        if(dir === 'vertical') {
            paused = setInterval(() => {
                plusSlide(1);
                slides[slideIndex-1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(() => {
                plusSlide(1);
                slides[slideIndex-1].classList.remove('slideInRight');
                slides[slideIndex-1].classList.add('slideInLeft');
            }, 3000);
        }
    };

    activateAnimation()

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });
}

export default slider;