//num, str, boolean, null, undefined, NaN
//object, array, function

const a = 4;
const b = a;

const user1 = {  //#567 - memory cell
    name: "Bob",
    age: "23",
    isStudent: "true"
}

const user2 = user1; //#567 - same memory cell
user2.name = "Ann";
console.log(user1);

//делаем копию = вносим изменения в копию = используем копию с изменениями

/*const copyUser = {}; //new Object()
copyUser.name = user1.name;
copyUser.age = user1.age;
copyUser.isStudent = user1.isStudent;*/

const copyUser = {...user1};

console.log(copyUser);
console.log(user1 === copyUser); //false

const copyUser1 = {...user1, isStudent: false} //изменение существующего свойства
const copyUser2 = {...user1, isMarried: false} //добавление свойства

const address = {
    country: "Thailand",
    city: "Bangkok"
}

const copyUser3 = {...user1, ...address}
console.log(copyUser3)

const student = {
    name: "Bob",
    age: "23",
    isStudent: "true",
    address: {  // #789
        country: "Thailand",
        city: "Bangkok"
    },
    courses: ["HTML", "CSS", "JS"] // #987
}

const copyStudent = {...student} // #789 % #987
copyStudent.courses.push("React")
console.log(student)

const copyStudent2 = {...student, courses: [...student.courses, "Redux"]} // ... - spread operator

console.log(student.courses)
console.log(copyStudent2.courses)

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }

    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
    {
        id: 4,
        name: "Donald",
        isStudent: true,
        address: {
            country: "Sudan",
            city: "Hartum",
        }
    },
]

const newUser = {
    id: 5,
    name: "Donald",
    isStudent: true,
    address: {
        country: "Sudan",
        city: "Hartum",
    }
}

const users2 = [...users, newUser] // добавление эл-та в массив

// delete id === 3

const users3 = users2.filter(user => user.id !== 3) //false
console.log(users3)

// User id = 1 moved to Sudan city

const users4 = users3.map(u => u.id === 1 ? {...u, address: {...u.address, city: "Sudan"}} : u)
console.log(users4)
const users5 = users4.map(u => u.id === 1 ? {...u, name: "Ali"} : u)

//второе занятие

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // isStudent: true
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
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
        scores: 100
    }
];

const getNames = (arr) => {
    const result = []
    const getStudentName = (st) => st.name
    for (let i = 0; i < arr.length; i++) {
       result[i] = getStName(arr[i])
    }
    return result
}

const getScores = (arr) => {
    const result = []
    const getStScores = (st) => st.scores
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStScores(arr[i])
    }
    return result
}

const getResult = (arr, fn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = getStScores(arr[i])
    }
    return result
}

console.log(getResult(students, getStName))
console.log(students.map(getStName))
console.log(getResult(students, getStScores))

const selfMadeFilter = (arr, filterFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (filterFn(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}
const func = (st) => st.scores >= 100
console.log(students.filter(func))
console.log(selfMadeFilter(students, func))

const findBob = (st) => st.name === "Bob"

const selfMadeFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(students.find(findBob))
console.log(selfMadeFind(students, findBob))

//selfMadePop(arr) => arr.pop()

const selfMadePop(arr) => {
    let popElement = arr[arr.length - 1]
    arr.length = arr.length - 1
    return popElement
}

console.log(selfMadePop([...students]))
console.log(students.pop())

//selfIndexOf(arr, el) => arr.IndexOf(el)

const selfMadeIndexOf(arr, el) = {
    for (let i = 0; i < arr.length, i++) {
        if (ell === arr[i]) return i else return -1
}

console.log(selfMadeIndexOf(students, students[2]))
console.log(students.indexOf(students[2]))

    
