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
        case '2':
            const amountToWithdraw = Number(promt('Введите сумму для снятия'));
            if(isNaN(amountToWithdraw) || amountToWithdraw <=0) {
                alert('Ошибка: введена некоректная суммма.');
            } else if (amountToWithdraw > balance){
                alert('Ошибка: введена некоректная суммма.');
            }
            else {
                balance -= amountToWithdraw;
                alert(`Снятие успешно. Ваш баланс: ${balance}`);
            }
            break;

        case '3':
            const amountToDeposit = Number(prompt('Введите сумму для снятия'));
            if(isNaN(amountToWithdraw) || amountToWithdraw <=0) {
                alert('Ошибка: введена некоректная суммма.');
            }
            else {
                balance -= amountToDeposit;
                alert(`Счёт пополнен;. Ваш баланс: ${balance}`)
            break;
    }
}
}