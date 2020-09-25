const sumSquare = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i += 1) {
        result += i ** 2;
    }
    return result;
};

const squareSum = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i += 1) {
        result += i;
    }
    return result ** 2;
};

const sumSquareDifference = (num) => squareSum(num) - sumSquare(num);

/*
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.
*/