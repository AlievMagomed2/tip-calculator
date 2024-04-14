let x = document.querySelector('.x');
let y = document.querySelector('.y');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let select = document.querySelector('select');
let div2 = document.querySelector('.div2');
let div5 = document.querySelector('.div5');
x.value = 4;
y.value = 1000;
b.addEventListener('click', () => {
    x.value = '';
    y.value = '';
});
c.addEventListener('click', () => { 
    let result = y.value / x.value;
    result = Math.round(result)
    if (x.value === '' & y.value === '') {
        div2.innerHTML = 0 + " ₽"
        div5.innerHTML = 0 + " ₽"
    }
    else{
        if (select.value == "Хорошее (10%)"){
            let num = result / 10
            num = Math.round(num)
            div2.innerHTML = num + " ₽"
            result = result + num
            div5.innerHTML = result + " ₽"
        }
        else if (select.value == "Нормальное (5%)"){
            let num = result / 20
            num = Math.round(num)
            div2.innerHTML = num + " ₽"
            result = result + num
            div5.innerHTML = result + " ₽"
        }
        else if (select.value == "Отличное (15%)"){
            let num = result * 15 / 100
            num = Math.round(num)
            div2.innerHTML = num + " ₽" 
            result = result + num
            div5.innerHTML = result + " ₽"
        }
        else{
            div2.innerHTML = 0 + " ₽"
            div5.innerHTML = result + " ₽"
        }
    }
});