const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let find
const patients = [];




let a = () => rl.question('Добро пожаловать! \nВведите операцию: \n 1) Добавить пациента \n 2) Добавить доктора \n 3) Просмотреть палаты \n 4) Выписать пациента\n', (answer) => {
    if (answer === '1') {
        name()
    }
    else if (answer === '2') {
        doc()
    }
    else if (answer === '3') {
        сheckRooms()
    }
    else if (answer === '4') {

        console.log(`Введите номер палаты пациента для выписки (1-5) `);
        сheckRoomsForRemove()
    }
    else {
        console.log(`Выберите от 1 до 4: ${answer}`);
        a()
    }
});

a()

let currentPatient;
let name = () => rl.question('Введите имя пациента  ', (answer) => {
    currentPatient = {}
    currentPatient.name = answer
    patients.push(currentPatient);
    age()
});
let age = () => rl.question('Введите возраст пациента  ', (answer) => {
    currentPatient.age = answer
    ill()
});
let ill = () => rl.question('Введите диагноз  ', (answer) => {
    currentPatient.diagnose = answer
    room();
});
let room = () => rl.question('Введите номер палатЫ (1-5)  ', (answer) => {
    if (answer <= 5) {
        currentPatient.room = +answer
        console.log(`Вы успешно зарегистрировали пациента!!!\n${currentPatient.name}\nпалата №  ${+answer}\nВыберите следующее действие`);
        b()
    }
    else {
        console.log(`Вы не насосали на такое кол=во палат: ${answer}`);
        room()
    }

});

let сheckRooms = () => rl.question('Выберите номер палаты 1-5 ', (answer) => {
    if (answer <= 5) {
        find = patients.filter(item => item.room == answer);
        console.log(find)
        c()
    }
    else {
        console.log(` Выберите от 1 до 5: ${answer}`);
        сheckRooms()
    }

});
let сheckRoomsForRemove = () => rl.question('Выберите номер палаты  ', (answer) => {
    if (answer <= 5) {
        find = patients.filter(item => item.room == answer);
        console.log(find)
        removePat()
    }
    else {
        console.log(` Выберите от 1 до 5: ${answer}`);
        сheckRoomsForRemove()
    }
});

let removePat = () => rl.question('Введите ИМЯ  ', (answer) => {
    find = patients.filter(item => item.name == answer);
    console.log(find)

    posName = patients.map(function (e) { return e.name; }).indexOf(answer);
    remove()
});

let remove = () => rl.question('Выписать пациента? 1 - ДА, 2 - НЕТ  ', (answer) => {
    if (+answer === 1) {
        patients.splice(posName, 1)
        console.log(`Вы успешно выписали пациента`)
        d()
    }
    if (+answer === 2) {
        сheckRoomsForRemove()
    }
});

let b = () => rl.question('1) Добавить нового пациента \n2) Вернуться в гавное меню  ', (answer) => {
    if (answer === '1') {
        name()
    }
    else if (answer === '2') {
        a()
    }
    else {
        console.log(`Выберите 1 или 2: ${answer}`);
        b()
    }
});
let c = () => rl.question('1) Просмотреть другую палату \n2) Вернуться в гавное меню  ', (answer) => {
    if (answer === '1') {
        сheckRooms()
    }
    else if (answer === '2') {
        a()
    }
    else {
        console.log(`Выберите 1 или 2: ${answer}`);
        b()
    }
});
let d = () => rl.question('1) Выписать другого пациента \n2) Вернуться в гавное меню  ', (answer) => {
    if (answer === '1') {
        сheckRoomsForRemove()
    }
    else if (answer === '2') {
        a()
    }
    else {
        console.log(`Выберите 1 или 2: ${answer}`);
        b()
    }
});