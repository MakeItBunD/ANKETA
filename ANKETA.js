let step
let pension
let lastName = prompt('Фамилия')

for (step = 0; step == 0; step++) {
    if (!/^[а-яА-ЯёЁ]+$/.test(lastName.trim())) {
        lastName = prompt('Фамилия введена не корректно. Попробуем еще раз:\nВаша фамилия')
        --step
    }
    else {
        break
    }
}
let firstName = prompt('Имя')
for (step = 0; step == 0; step++) {
    if (!/^[а-яА-ЯёЁ]+$/.test(firstName.trim())) {
        firstName = prompt('Имя введено не корректно. Попробуем еще раз:\nВаше имя')
        --step
    }
    else {
        break
    }
}
let patronymic = prompt('Отчество')
for (step = 0; step == 0; step++) {
    if (!/^[а-яА-ЯёЁ]+$/.test(patronymic.trim())) {
        patronymic = prompt('Отчество введено не корректно. Попробуем еще раз:\nВаше отчество')
        --step
    }
    else {
        break
    }
}
let age = prompt('Возраст')

for (step = 0; step == 0; step++) {
    if (age >= 0 && age != '') {
        break
    }
    else {
        age = prompt('Возраст указан не корректно.\nУкажите ваш возраст')
        --step
    }
}

let ageInDays = age * 365 + (Math.floor(age / 4))
let ageIn5Years = +age + 5
let sex = prompt('Ваш пол - мужской?')

for (step = 0; step == 0; step++) {
    if (sex == 'НЕТ' || sex == 'Нет' || sex == 'нет') {
        sex = 'женский'

        if (age < 57) {
            pension = 'нет'
        }
        else {
            pension = 'да'
        }
    } 
    else if (sex == 'ДА' || sex == 'Да' || sex == 'да') {
        sex = 'мужской'

        if (age < 62) {
            pension = 'нет'
        }
        else {
            pension = 'да'
        }
    }
    else {
        sex = prompt('Не корректно введенные данные. Попробуем еще раз:\nВаш пол - мужской?')
        --step;
    }
}

alert(`Ваше ФИО: ${lastName} ${firstName} ${patronymic}\nВаш возраст в годах: ${age}\nВаш возраст в днях: ${ageInDays}\nЧерез 5 лет вам будет: ${ageIn5Years}\nВаш пол: ${sex}\nВы на пенсии: ${pension}`)
