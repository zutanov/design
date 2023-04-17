
function forms() {
    const form = document.querySelectorAll('form'),       // получаем все формы на странице
          inputs = document.querySelectorAll('input'),    // получаем все инпуты, чтобы очищать после отправки
          upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Отправлено',
        fail: 'Что-то пошло не так...',
        ok: 'assets/img/ok.png',
        failure: 'assets/img/fail.png',
        spinner: 'assets/img/spinner.gif'
        };

    const postData = async(url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(el => el.value = '');
        upload.forEach(el => el.previousElementSibling.textContent = 'Файл не выбран');
    };

    upload.forEach(el => {
        el.addEventListener('input', () => {
            console.log(el.files[0]);
            let dots;
            const file = el.files[0].name.split('.');
            file[0].length > 6 ? dots = '...' : dots = '.';
            const name = file[0].substring(0,6) + dots + file[1];
            el.previousElementSibling.textContent = name;
        })
    })

    form.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
            
            let info = document.createElement('div');
            info.classList.add('status');
            el.parentNode.appendChild(info);

            el.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                el.style.display = 'none';
            }, 400)

            let img = document.createElement('img');
            img.setAttribute('src', message.spinner);
            img.classList.add('animated', 'fadeInUp');
            info.appendChild(img);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            info.appendChild(textMessage);


            const formData = new FormData(el);

            const path = {
                designer: 'assets/server.php',
                question: 'assets/question.php'
            };

            let api;
            el.closest('.popup-design') || el.classList.contains('calc_form') ? api = path.designer : api = path.question;

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    img.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    img.setAttribute('src', message.failure);
                    textMessage.textContent = message.fail;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        info.remove();
                        el.style.display = 'block';
                        el.classList.remove('fadeOutUp');
                        el.classList.add('fadeInUp');
                    },4000);
                });
            });
    })

};



export default forms;