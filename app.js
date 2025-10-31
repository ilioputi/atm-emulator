'use strict'
let balance = 10000;
while(true){
    const menu =`
    Добро пожаловать в банкомат!
    Ваш выбор:
    1. Показать баланс
    2. Снять средства
    3. Пополнить счёт
    4. Выход
    `;
    const choice = promt(menu);

    switch (choice) {
        case '1':
            alert(`Ваш баланс: ${balance}`);
            break
    }
}