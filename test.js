const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

const patients = []
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
let b = () => rl.question('1) Добавить нового пациента \n2) Вернуться в гавное меню  ', (answer) => {
    if (answer === '1') {
        name()
    }
    else if (answer === '2') {
        const a = require ('./test2')
        a()
    }
    else {
        console.log(`Выберите 1 или 2: ${answer}`);
        b()
    }
});

module.exports = name