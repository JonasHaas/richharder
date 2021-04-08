const submit_elem = document.querySelector('#submit');
const all_inputs = Array.from(document.querySelectorAll('.container-inputs input'));

submit_elem.addEventListener("click", () =>  {
    console.log(calc()[0], calc()[1]);;
});

const calc = () => {
    const duration = document.getElementById('input-duration').value;
    const rate = parseFloat(document.getElementById('input-rate').value);

    let startMoney = parseFloat(document.getElementById('input-startmoney').value);
    let increase = parseFloat(document.getElementById('input-increase').value);
    let inflation = document.getElementById('input-inflation').checked;
    let intrest = parseFloat(document.getElementById('input-intrest').value);

    if(!startMoney) {
        startMoney = 0;
    }
    
    if (intrest < 100 && intrest) {
        intrest = (intrest + 100) / 100;
    } else if (intrest) {
        intrest = instrest / 100;
    } else {
        intrest = 1;
    }

    if(increase < 100 && increase) {
        increase = (increase + 100) / 100;
    } else if (increase) {
        increase = increase / 100;
    } else {
        increase = 1;
    }

    if(inflation === true) {
        inflation = 0.98;
    } else {
        inflation = 1;
    }

    let rate_year = rate * 12;
    let total = startMoney;
    let total_flat = startMoney + (rate_year * duration * inflation); 

    for (let i = 0; i < duration; i++) {
        if (i === 0) {
            rate_year = rate_year;
        } else {
            rate_year *= increase;
        }        
        total += rate_year;
        total = Math.floor(total * intrest * inflation * 100) / 100;
    }
    return [total_flat, total];
};


// all_inputs.forEach(element => {
//     if (element.type != 'checkbox') {
//         console.log(element.value);
//     } else {
//         console.log(element.checked);
//     }
// });