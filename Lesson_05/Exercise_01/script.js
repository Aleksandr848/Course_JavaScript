/*
* Создать функцию, генерирующую шахматную доску. Можно использовать любые HTML‑теги.
* Доска должна быть верно разлинована на черные и белые ячейки.
* Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
* */

function markup(){
    let square = '';
    let letters = ['B', 'C', 'D', 'E', 'F', 'G', 'H',];
    for (let i = 1; i < 9; i++) {
        if (i % 2 === 1) {
            square += '<div class="row-1">\n'
            for (let j = 1; j < 9; j++) {
                if (i === 1 && j === 1) {
                    square += '<div class="square"><p class="letter">A</p><p class="number">1</p></div>\n'
                } else if (i === 1 && j > 1) {
                    square += '<div class="square"><p class="letter">' + letters[j - 2] + '</p></div>\n'
                } else if (i > 1 && j === 1) {
                    square += '<div class="square"><p class="number">' + i + '</p></div>\n'
                } else {
                    square += '<div class="square"></div>\n'
                }
                if (j === 8) {
                    square += '</div>\n'
                }
            }
        } else {
            square += '<div class="row-2">\n'
            for (let j = 1; j < 9; j++) {
                if (j === 1) {
                    square += '<div class="square"><p class="number">' + i + '</p></div>\n'
                } else if (j === 8) {
                    square += '</div>\n'
                } else {
                    square += '<div class="square"></div>\n'
                }
            }
        }
    }
    return square
}

let mark = markup();
window.document.body.innerHTML = '<div class="container">' + mark + '</div>'

// Не дай бог кому-нибудь голову сломать об такой код!
