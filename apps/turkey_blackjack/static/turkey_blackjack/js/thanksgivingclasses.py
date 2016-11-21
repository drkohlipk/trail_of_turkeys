class Character(object):
	def __init__(self, name, special, luck, beer_stamina, damage):
		self.special = special
		self.luck = luck
		self.damage = damage
		self.name = name
		self.beer_stamina = beer_stamina
		self.sobriety = 100
		self.health = 100
		self.money = 20
		self.tryptophan = 0
		self.family = {
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
		}

josiah = Character('Josiah', 'Bible', 3, 2, 1)
samuel = Character('Samuel', 'Drinking', 1, 3, 2)
benjamin = Character('Benjamin', 'Fighting', 2, 1, 3)
isabelle = Character('Isabelle', 'Cats', 1, 2, 3)
emily = Character('Emily', 'Nun', 3, 1, 2)
sarah = Character('Sarah', 'Nurse', 2, 3, 1)
madjack = Character('MadJack', 'Coding Wizard', 4, 4, 4)
