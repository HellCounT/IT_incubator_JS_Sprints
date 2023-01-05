const strings = ['Donald', 'Alex', 'Bob']

console.log(strings.sort())
//1. сотрирует строки "из коробки", т.е. без доп. параметров

const strings2 = ['Donald', 'Alex', 'Bob', 'alex', 'john', 'Юрий', 'юлия', '999']
console.log(strings2.sort())
//2. сортирует по unicode

console.log(strings2)
//3. работает мутабельно

console.log(strings2 === strings2.sort()) // true
//4. возвращает ссылку на исходный массив

const numbers = [1000, 25, 777, 6666, 0, -20, +20]
console.log(numbers.sort())
//5. Для остальных случаев необходимо передать функцию сравнения (callback)

const compareFunc = (a, b) => { // по возрастанию
    if (a > b) {
        return 100 // >0, если надо переставить
    } else {
        return -1 // <0, если не надо переставить
    }
}

const compareFuncPro = (a, b) => a - b

console.log(numbers.sort(compareFuncPro))
//6. Функция сравнения должна возвращать число больше или меньше нуля

console.log(numbers.reverse()) // изменить порядок сортировки
//7. Вместе с sort часто используется reverse

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const compareFuncByStrForObj = (a, b) => {
    if (a.name > b.name) {
        return 1
    } else return -1
}

console.log(students.sort(compareFuncByStrForObj))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
//7. Сортировка массива объектов по строковым значениям

console.log(students.sort((a, b) => a.scores - b.scores))
//8. Сортировка массива объектов по числовым значениям

const nums = [12, 10, 45, 23, 66, 78, 91, 32]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false
                // let temp = nums[i]
                // nums[i] = nums[i+1]
                // nums[i+1] = temp
                [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

