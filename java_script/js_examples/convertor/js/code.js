"use strict";
let $tc = 0;
let $tf = 0;
let $tk = 0;
let $set_unit = 0;
let $repeat = true;

function conv_C_F(t) {
    return (9 / 5) * t * 1 + 32;
};

function conv_C_K(t) {
    return t * 1 + 273.15;
};

function conv_K_C(t) {
    return t * 1 - 273.15;
};

function conv_F_C(t) {
    return (t * 1 - 32) * 5 / 9;
};

function conv_F_K(t) {
    return (t * 1 - 32) * 5 / 9 + 273.15;
};

function conv_K_F(t) {
    return (t * 1 - 273.15) * 9 / 5 + 32;
};
do {
    $set_unit = prompt('Выберите еденицу измерения для конвертации, введиет число соответствующее еденице измерения: C - 1, F - 2, K - 3. ');
    while ($set_unit < 1 || $set_unit > 3) {
        $set_unit = prompt('Неверно выбрана еденица измерения. Введите еще раз: C - 1, F - 2, K - 3. ');
    };
    let $temp_user = prompt('Введите температуру:');
    if ($set_unit == 1) {
        $tf = conv_C_F($temp_user);
        $tk = conv_C_K($temp_user);
        $tc = $temp_user;
    } else if ($set_unit == 2) {
        $tc = conv_F_C($temp_user);
        $tk = conv_F_K($temp_user);
        $tf = $temp_user;
    } else if ($set_unit == 3) {
        $tc = conv_K_C($temp_user);
        $tf = conv_K_F($temp_user);
        $tk = $temp_user;
    }
    alert('Температура:' + '\n' + 'C = ' + Math.round($tc) + '\n' + 'F = ' + Math.round($tf) + '\n' + 'K = ' + Math.round($tk));
    $repeat = confirm('Конвертировать снова?');
}
while ($repeat == true);


// Градусы

let admin = 0;
let name = 0;
name = 'Василий';
admin = name;
console.log(admin);

// Вася

console.log(10 + 10 + "10");
// Сперва были сложены два чила, получилось 20, потом к этому прибавлена строка "20", при сложении числа со строкой, JS складывает их как две строки итого 2010
console.log(10 + "10" + 10);
// Тоже самое число + строка = строка, и строка + число = строка(101010)
console.log(10 + 10 + + "10");
// По всей видимости дополнительный + перед строкой характерезует её как число, и првиодит строку к числу, итого 10 + 10 +10 =30
console.log(10 / -"");
// Пустая строка это ничего т.е. бесконечность, мы поделили на минус бесконечность итого получили  -Infinity
console.log(10 / +"2,5");
// JS птылся привести строку "2,5" к числу, но изза того что в строке используется неправильный разделитель ",", он этого не смог, поэтому оставил как есть, а 10 поделеное на строку это NotANumber


// let mode = "normal"; ДА


// let my_valu3 = 102; ДА

// let 3my_value3 = "102"; НЕТ, не может начинаться с числа

// let __hello__ = "world";  ДА

// let $$$ = "money"; ДА

// let !0_world = true; НЕТ, оперратор НЕ-НОЛЬ не может быть использован в названии переменноной