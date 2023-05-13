"use strict"

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

let result = '';
let first = 0;
let second = 1;

for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
        result += `${first}`;
    }

    let third = first + second;
    first = second;
    second = third;
}

return result;
}

fib(5);

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
            return "Ошибка, проверьте данные";
        }
    
        const hours = Math.floor(minutesTotal / 60);
        const minutes = minutesTotal % 60;
    
        let hoursStr = '';
    
        switch (hours) {
            case 0: 
                hoursStr = 'часов';
                break;
            case 1:
                hoursStr = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr = 'часов';
        }
    
        return `Это ${hours} ${hoursStr} и ${minutes} минут`;
    }
    
    getTimeFromMinutes(180);

    function amountOfPages(summary) {
        let result = '';
        let n = 0;

        for (let i = 1; i <= summary; i++) {
            result += i;
            if (result.length === summary) {
                n = i;
                break;
            }
        }

        return n;
    }