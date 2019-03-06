let money, time;

// function start() {
// 	money = +prompt("Ваш бюджет на месяц?", '');
// 	time = prompt("Введите дату в формате YYYY-MM-DD", '');

// 	while (isNaN(money) || money == "" || money == null) {
// 		money = +prompt("Ваш бюджет на месяц?", '');
// 	}
// }
// // "" - это пустая строка
// start();


let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется ? ", '');
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
				appData.expenses[a] = b;
			} else {
				i = i - 1;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
		},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log(" Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка")
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
			while (isNaN(save) || save == "" || save == null && isNaN(percent) || percent == "" || percent == null) {
				save = +prompt("Какова сумма накоплений?", ''),
					percent = +prompt("Под какой процент?", '');
			}
			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let a = prompt("Статья необязательных расходов", ''),
				b = prompt("Во сколько обойдется ? ", '');
			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
				appData.optionalExpenses[a] = b;
			} else {
				i = i - 1;
			}
		}
	},

	// else {
	// 	i = i - 1;
	// }
	chooseIncome: function() {
		for (let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
			if ((typeof (items)) === 'string' && isNaN(+items) && items != null && items != '') {
				appData.income = items.split(', ');

				
				let j = 0;
				while (j < 1) {
					let more = prompt('Может что-то еще?');
					if ((typeof (more)) === 'string' && isNaN(+more) && more != null && more != '') {
						appData.income.push(more);
						j++;
					}
				}
				appData.income.sort();				
			} else {
				i = i - 1;
		}
}
// (+items) перевели строку в число

		let varrrr
		console.log('appData.income', appData.income)
		document.write("Способы доп. заработка: " + '<br>')
		appData.income.forEach(function (item, i, array) {
			// console.log('item', item)
			
			document.write( i+1 + ")" + item + '<br>');
		});	

	}
};

appData.chooseIncome();



// console.log(arr);

// for (let key in appData) {
// 	console.log('Наша программа ' + key + ' включает в себя данные ' + appData[key]);

// }

// for (let key in options) {
// 	console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);
