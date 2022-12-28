const todoListId_1 = "12df-gh67"
const todoListId_2 = "df45-mn03"


const todoLists = [
    {
        id: todoListId_1, // "12df-gh67"
        title: "What to learn",
    },
    {
        id: todoListId_2, // "df45-mn03"
        title: "What to buy",
    },
]

const getKey = () => "name"
const tasks = {
    [todoListId_1]: [ // "12df-gh67"
        {name: "HTML", isDone: true},
        {name: "CSS", isDone: true}
    ],
    [todoListId_2]: [ // "df45-mn03"
        {name: "Beer", isDone: false},
        {name: "Fish", isDone: false}
    ],
    [10 + 20]: [], // "30"
    [getKey()]: [], // "name"
    "12user_address": {}
}

console.log(tasks[todoListId_1])
console.log(tasks[todoListId_1][0])
console.log(tasks[todoListId_1][0].name)

console.log(tasks[todoListId_1].filter(t => t.name !== "HTML"))
console.log([...tasks[todoLists[0].id], {name: "React", isDone: false}])
console.log(tasks["12user_address"])

// reduce: [1, 2 ,3, 4, 5] => @

const nums = [1, 2, 3, 4]
console.log(nums.reduce((acc, el) => {
    return acc + el
}, 0))

// 0, 1 => 1
// 1, 2 => 3
// 3, 3 => 6
// 6, 4 => 10
// => 10

// max - min

console.log(nums.reduce((acc, el) => acc > el ? acc : el))

let students = [
    {   id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 26,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))
console.log(students.reduce((acc, el) => acc.scores > el.scores ? acc : el))
console.log(students.reduce((acc, el) => {
    if(el.scores >= 100){
        acc.push(el)
    }
    return acc
}, []))

//from array to object
// const newStudents = {
//     '1': {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     '2': {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
// }

console.log(students.reduce((acc,el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

const reduce = (array, func, startAcc) => {
    let acc = startAcc ? startAcc : array[0]
    for (let i = 0; i < array.length; i++) {
        acc = func(acc, array[i])
    }
    return acc
}
console.log(reduce(students, (acc, ell) => {
    cc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {} ))