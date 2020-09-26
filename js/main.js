$(document).ready(function(){
    var elements = $(".modal-overlay, .modal");

    $(".opening-modal").click(function () {
        elements.addClass("active");
    });

    $(".close-modal").click(function () {
        elements.removeClass("active");
    });

});

const countOfVolley = document.querySelector('#countOfVolley'),
    countOfTime = document.querySelector('#countOfTime'),
    countOfCalliber = document.querySelector('#countOfCalliber'),
    cbx = document.querySelector('#cbx'),
    cbx2 = document.querySelector('#cbx2'),
    cbx3 = document.querySelector('#cbx3'),
    volleySpan = document.querySelector('#volleySpan'),
    timeSpan = document.querySelector('#timeSpan'),
    calliberSpan = document.querySelector('#calliberSpan');
    

const ChangeValue = (e) => {
    const target = e.target;
    console.dir(target.value);    
}

countOfVolley.addEventListener('change', ChangeValue);
countOfTime.addEventListener('change', ChangeValue);
countOfCalliber.addEventListener('change', ChangeValue);