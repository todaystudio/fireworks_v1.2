$(document).ready(function(){
    var elements = $("#modal-overlay1, #modal1");

    $(".opening-modal").click(function () {
        elements.addClass("active");
    });

    $(".close-modal").click(function () {
        elements.removeClass("active");
    });

    var elements2 = $("#modal-overlay2, #modal2");

    $("#calcBtn").click(function () {
        elements2.addClass("active");
    });

    $(".close-modal").click(function () {
        elements2.removeClass("active");
    });
    
    $(document).keyup(function(e){
        if (e.which == 27) {
            elements2.removeClass("active")
        }
    });

});

function moneyFormat(n) {
    return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ").replace('.', ',');
}


const countOfVolley = document.querySelector('#countOfVolley'),
    countOfTime = document.querySelector('#countOfTime'),
    countOfCalliber = document.querySelector('#countOfCalliber'),
    cbx = document.querySelector('#cbx'),
    cbx2 = document.querySelector('#cbx2'),
    cbx3 = document.querySelector('#cbx3'),
    volleySpan = document.querySelector('#volleySpan'),
    timeSpan = document.querySelector('#timeSpan'),
    calliberSpan = document.querySelector('#calliberSpan'),
    fontansInput = document.querySelector('#fontansInput'),
    baloonsInput = document.querySelector('#baloonsInput'),
    lettersInput = document.querySelector('#lettersInput'),
    calcBtn = document.querySelector('#calcBtn'),
    calcSum = document.querySelector('.calc-sum-p'),
    modalContent = document.querySelector('.modal-content2');

    
let memory = {
    id: '',
    value: ''
}

let mainMemory = {
    countOfVolley: 165,
    countOfTime: 55,
    countOfCalliber: 1.0,
    fontans: false,
    fontansCount: 0,
    baloons: false,
    baloonsCount: 0,
    letters: false,
    lettersCount: 0
}

const ChangeValue = (e) => {
    const target = e.target;
    memory.id = target.id;
    memory.value = target.value;
    writeToMainMemory(memory.id, memory.value);
    if (target.id === 'countOfVolley') {
        volleySpan.innerHTML = '';
        volleySpan.insertAdjacentText("afterbegin", target.value);
    } else if (target.id === 'countOfTime') {
        timeSpan.innerHTML = '';
        timeSpan.insertAdjacentText("afterbegin", target.value);
    } else if (target.id === 'countOfCalliber') {
        calliberSpan.innerHTML = '';
        calliberSpan.insertAdjacentText("afterbegin", target.value);
    }
}

const writeCheck = (e) => {
    const target = e.target;
    const {id, checked} = target;
    if (id === 'cbx') {
        mainMemory.fontans = checked;
        fontansInput.removeAttribute('disabled');
        fontansInput.focus();
    } else if (id === 'cbx2') {
        mainMemory.baloons = checked;
        baloonsInput.removeAttribute('disabled');
        baloonsInput.focus();
    } else if (id === 'cbx3') {
        mainMemory.letters = checked;
        lettersInput.removeAttribute('disabled');
        lettersInput.focus();
    }
}

const writeCountCheck = (e) => {
    console.log(e.target.id);
    if (e.target.id === 'fontansInput') {
        mainMemory.fontansCount = e.target.value;
    } else if (e.target.id === 'baloonsInput') {
        mainMemory.baloonsCount = e.target.value;
    } else if (e.target.id === 'lettersInput') {
        mainMemory.lettersCount = e.target.value;
    } 
    console.log(mainMemory);
}

const writeToMainMemory = (id, value) => {
    if (id === 'countOfVolley') {
        mainMemory.countOfVolley = value ? value : 1;
    } else if (id === 'countOfTime') {
        mainMemory.countOfTime = value ? value : 1;
    } else if (id === 'countOfCalliber') {
        mainMemory.countOfCalliber = value ? value : 1;
    }
    console.log(mainMemory);
}

const calculation = () => {
    const { countOfVolley = parseInt(countOfVolley),
        countOfTime = parseInt(countOfTime),
        countOfCalliber = parseInt(countOfCalliber),
        fontans,
        fontansCount = parseInt(fontansCount),
        baloons,
        baloonsCount = parseInt(baloonsCount),
        letters,
        lettersCount = parseInt(lettersCount) } = mainMemory;

    let summ = 0;
    
    summ = (countOfVolley * countOfCalliber * countOfTime) * 1.3;
    summ = summ + (fontansCount * 1000) + (baloonsCount * 80) + (lettersCount * 3000);
    console.log(summ); 
    
    modalContent.innerHTML = '';
    modalContent.insertAdjacentHTML('afterbegin', `
        <div style="width: 84%; margin: 0 auto">
            <h2 class="modal-title">Рассчет стоимости on-line</h2>
            <p style="margin-top: 15px;">Приблизительная стоимость: <b style="font-size: 25px;">${moneyFormat(Math.round(summ))} ₽</b>, но вы можете получить дополнительную скидку до 15%, если заполните форму ниже.</p>
        </div>
        <form action="#" id="contactForm1" class="modal-form">
            <label for="contactForm1" class="modal-label">Наш менеджер свяжется с Вами в ближайшее время. По телефону можно получить консультацию по выбору салюта, оставить заявку на доставку или запуск фейерверка.</label>
            <input type="text" class="contact-input modal__contact-input" placeholder="Имя">
            <input type="text" class="contact-input modal__contact-input" placeholder="Телефон">
            <button type="submit" class="contact-btn" id="btn-sum-modal">Отправить</button>
        </form>
    `);

}



countOfVolley.addEventListener('input', ChangeValue);
countOfTime.addEventListener('input', ChangeValue);
countOfCalliber.addEventListener('input', ChangeValue);
cbx.addEventListener('change', writeCheck);
cbx2.addEventListener('change', writeCheck);
cbx3.addEventListener('change', writeCheck);
fontansInput.addEventListener('input', writeCountCheck);
baloonsInput.addEventListener('input', writeCountCheck);
lettersInput.addEventListener('input', writeCountCheck);
calcBtn.addEventListener('click', calculation);
