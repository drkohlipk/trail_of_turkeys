function Character(name, special, luck, beer_stamina, damage) {
	this.special = special;
	this.luck = luck;
	this.damage = damage;
	this.name = name;
	this.beer_stamina = beer_stamina;
	this.sobriety = 100;
	this.health = 100;
	this.money = 20;
	this.tryptophan = 0;
	this.family = {
		'dad' : {
			'health' : 100,
			'beer_stamina' : 4,
			'sobriety' : 100,
			'damage' : 4
		},
		'mom' : {
			'health' : 100,
			'beer_stamina' : 3,
			'sobriety' : 100,
			'damage' : 3,
		},
			'bro' : {
			'health' : 100,
			'beer_stamina' : 2,
			'sobriety' : 100,
			'damage' : 2,
		},
			'sis' : {
			'health' : 100,
			'beer_stamina' : 2,
			'sobriety' : 100,
			'damage' : 2,
		},
			'dog' : {
			'health' : 100,
			'beer_stamina' : 1,
			'sobriety' : 100,
			'damage' : 2,
		},
	};
}

var josiah = new Character('Josiah', 'Bible', 3, 2, 1);
var samuel = new Character('Samuel', 'Drinking', 1, 3, 2);
var benjamin = new Character('Benjamin', 'Fighting', 2, 1, 3);
var isabelle = new Character('Isabelle', 'Cats', 1, 2, 3);
var emily = new Character('Emily', 'Nun', 3, 1, 2);
var sarah = new Character('Sarah', 'Nurse', 2, 3, 1);
var madjack = new Character('MadJack', 'Coding Wizard', 4, 4, 4);

function Card_Deck() {
	this.two = {
		'name' : 'two',
		'value' : 2,
		'quantity' : 4,
	};
	this.three = {
		'name' : 'three',
		'value' : 3,
		'quantity' : 4,
	};
	this.four = {
		'name' : 'four',
		'value' : 4,
		'quantity' : 4,
	};
	this.five = {
		'name' : 'five',
		'value' : 5,
		'quantity' : 4,
	};
	this.six = {
		'name' : 'six',
		'value' : 6,
		'quantity' : 4,
	};
	this.seven = {
		'name' : 'seven',
		'value' : 7,
		'quantity' : 4,
	};
	this.eight = {
		'name' : 'eight',
		'value' : 8,
		'quantity' : 4,
	};
	this.nine = {
		'name' : 'nine',
		'value' : 9,
		'quantity' : 4,
	};
	this.ten = {
		'name' : 'ten',
		'value' : 10,
		'quantity' : 4,
	};
	this.jack = {
		'name' : 'jack',
		'value' : 10,
		'quantity' : 4,
	};
	this.queen = {
		'name' : 'queen',
		'value' : 10,
		'quantity' : 4,
	};
	this.king = {
		'name' : 'king',
		'value' : 10,
		'quantity' : 4,
	};
	this.ace = {
		'name' : 'ace',
		'value' : 11,
		'quantity' : 4,
	};
}
