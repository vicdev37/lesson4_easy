chooseIncome: function() {
		for (let i = 0; i < 1; i++) {
			let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
			if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
				appData.income = items.split(', ');
				appData.income.push(prompt('Может что-то еще?'));
				appData.income.sort();
			} else {
				i = i - 1;
			}
			appData.income.forEach(function(item, i, array) {
				console.log(`Индекс: ${i}, элемент: ${item}`);
			});	
		}
	}
};