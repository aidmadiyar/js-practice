const reverseInt = (num) => {
    let result = '';
    const strNum = String(Math.abs(num));

    for (let i = strNum.length - 1; i >= 0; i -= 1) {
        result = `${result}${strNum[i]}`;
    }

    const resultNum = Number(result);

    return (num < 0) ? -resultNum : resultNum;
};

/*

Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

Примеры
reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98

*/