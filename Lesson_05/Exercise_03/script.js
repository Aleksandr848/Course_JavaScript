/*
* Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
* причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
* ладья конь слон ферзь король слон конь ладья
* */

const chessman = ["Л", "КН", "С", "Ф", "КР", "С", "КН", "Л"];

function tableCreate(){
    const body = document.body,
        tbl = document.createElement('table');
    for(let i = 0; i < 8; i++){
        const tr = tbl.insertRow();
        for(let j = 0; j < 8; j++){
            const td = tr.insertCell();
            if (i === 0) {
                td.innerHTML = "<p class='black-chess'>" + chessman[j] + "</p>"
            }
            if (i === 1) {
                td.innerHTML = "<p class='black-chess'>П</p>"
            }
            if (i === 6) {
                td.innerHTML = "<p class='white-chess'>П</p>"
            }
            if (i === 7) {
                td.innerHTML = "<p class='white-chess'>" + chessman[j] + "</p>"
            }
        }
    }
    body.appendChild(tbl);
}
tableCreate();
