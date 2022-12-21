//1. Реализуйте функцию, которая принимает в качестве параметра массив чисел и возвращает самое большое значение из массива (максимум массива)
// [1,22,3,4,5] => 22
//2. Реализуйте функцию, которая принимае в качестве параметра массив с вложенными в него массивами из чисел и возвращает
//массив, состоящий из максимальных значений каждого вложенного массива.
// [[1,2,3], [4,5,6]] => [3,6]
//3. Реализуйте функцию, которая принимае в качестве параметра массив значений и возвращает новый массив, очищенный от значений,
// которые могут быть интерпретированы как false
// [1,2,3,4, false, 5,6] => [1,2,3,4,5,6]
//4. Реализуйте функцию, которая принимае в качестве параметра массив произвольных элементов и переменную, которая содержит произвольное значение.
// Если это значение содержится в массиве, функция должна возвращать индекс первого вхождения значения в массив, если не содержится - произвольное отрицательное число.
// ([1,2,3,4,5,5], 5) => 4, ([1,2,3,4,5,5], 10) => -1
//5. Реализуйте функцию, которая возвращает массив,  в котором элементы исходного массива разбиты на вложенные массивы указанной длинны
// ([1,2,3,4,5,6], 3) => [[1,2,3], [4,5,6]]
//6. Реализуйте функцию, которая принимае в качестве параметра массив чисел и количество максимальных элементов.
// Возвращает массив, сосотоящий из указанного количества максимальных элементов
// ([1,22,3,4,5], 2) => [22, 5]
// NB!!! При решении использовать только цикл, не испльзовать методы массивов и функцию Math.max()

function giveMeMaximum(arr) {
    //return Math.max(...arr)
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i]
    }
    return max
}

console.log("Q1: " + giveMeMaximum([1, 22, 3, 4, 5]))

const spreadAndMax = (arr) => {
    //return arr.map(e => e = Math.max(...e))
    let maxArr = []
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j]
            }
            maxArr.push(max)
        }
    }
    return maxArr
}
console.log("Q2: " + spreadAndMax([[1, 2, 3], [4, 5, 6]]))

const filterFalse = (arr) => {
    //return arr.filter(e => e !== false)
    let resArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false) {
            delete arr[i]
        } else resArr.push(arr[i])
    }
    return resArr
}
console.log("Q3: " + filterFalse([1, 2, 3, 4, false, 5, 6]))

function getIndex(arr, num) {
//     return arr.indexOf(num)
    let flag = false
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
            break
        } else flag = false
    }
    if (flag === false) return -1
}

console.log("Q4-1: " + getIndex([1,2,3,4,5,5], 5))
console.log("Q4-2: " + getIndex([1,2,3,4,5,5], 10))

const getArrayOfK = (arr, k) => {
    let resArr = [[]]
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        let j = 1
        if (j<=k) {
            resArr[n].push(arr[i])
            j++
        } else {
            j = 1
            n++
            resArr[n].push(arr[i])
        }
    }
    return resArr
}

console.log(getArrayOfK([1,2,3,4,5,6], 3))
