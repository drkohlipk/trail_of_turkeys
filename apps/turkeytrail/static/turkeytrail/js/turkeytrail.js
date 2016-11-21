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
		}
	};
}

var josiah = new Character('Josiah', 'Bible', 3, 2, 1),
	samuel = new Character('Samuel', 'Drinking', 1, 3, 2),
	benjamin = new Character('Benjamin', 'Fighting', 2, 1, 3),
	isabelle = new Character('Isabelle', 'Cats', 1, 2, 3),
	emily = new Character('Emily', 'Nun', 3, 1, 2),
	sarah = new Character('Sarah', 'Nurse', 2, 3, 1),
	madjack = new Character('MadJack', 'Coding Wizard', 4, 4, 4);
