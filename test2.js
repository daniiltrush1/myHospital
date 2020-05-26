const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

    let a = () => rl.question('Добро пожаловать! \nВведите операцию: \n 1) Добавить пациента \n 2) Добавить доктора \n 3) Просмотреть палаты \n 4) Выписать пациента\n', (answer) => {
        if (answer === '1') {
            const name = require ('./test') 
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

module.exports = a

