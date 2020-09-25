const isPowerOfThree = (num) => {
    let current = 1;
    while (current < num) {
        current *= 3;
    }

    return current === num;
};

/*
Реализуйте функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Примеры
isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)
*/