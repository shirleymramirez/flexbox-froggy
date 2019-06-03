document.addEventListener('DOMContentLoaded', function () {
    let submit = document.querySelector('#submit');
    let circleIcon = document.querySelector('.circleIcon');
    let frogIcon = document.querySelector('.frogIcon');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        let inputValue = document.querySelector('.inputText').value;
        debugger;
        if(inputValue === 'flex-start') {
            circleIcon.style.position = "absolute";
            circleIcon.style.left = "15px";
        }
        else if(inputValue === 'flex-end'){
            circleIcon.style.position = "absolute";
            circleIcon.style.top = "16px";
            circleIcon.style.right = "31px";
            frogIcon.style.position = "absolute";
            frogIcon.style.right = "45px";
        } 
        else if(inputValue === 'center') {
            circleIcon.style.position = "absolute";
            circleIcon.style.right = "46%";
            frogIcon.style.position = "absolute";
            frogIcon.style.left = "45%";
        } 
        else if(inputValue === 'space-between') {
            
        } 
        else if(inputValue === 'space-around'){

        }
    })

    let next = document.querySelector('.next');
    
    next.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.inputText').value = '';

        circleIcon.style.position = "static";
        circleIcon.style.left = "auto"

        frogIcon.style.position = "static";

    })


});