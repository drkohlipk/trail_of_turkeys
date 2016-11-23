from django.db import models
import json, collections
from jsonfield import JSONField
from ..logreg.models import User

class CharDBManager(models.Manager):
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

	def createCharacter(self, name):
		chardict = {
			'josiah' : Character('Josiah', 'Bible', 3, 2, 1),
			'samuel' : Character('Samuel', 'Drinking', 1, 3, 2),
			'benjamin' : Character('Benjamin', 'Fighting', 2, 1, 3),
			'isabelle' : Character('Isabelle', 'Cats', 1, 2, 3),
			'emily' : Character('Emily', 'Nun', 3, 1, 2),
			'sarah' : Character('Sarah', 'Nurse', 2, 3, 1),
			'madjack' : Character('MadJack', 'Coding Wizard', 4, 4, 4),
		}
		character = chardict.name

	def populateDB(self, character):
		self.create(name = character.name, luck = character.luck, money = character.money, beer_stamina = character.beer_stamina, damage = character.damage, special = character.special, sobriety = character.sobriety, health = character.health, tryptophan = character.tryptophan, family = json.dumps(character.family))
		return self

class CharDB(models.Model):
	name = models.CharField(max_length = 10)
	person = models.ForeignKey(User, on_delete = models.CASCADE)
	luck = models.IntegerField()
	money = models.IntegerField()
	beer_stamina = models.IntegerField()
	damage = models.IntegerField()
	special= models.CharField(max_length = 15)
	sobriety = models.IntegerField()
	health = models.IntegerField()
	tryptophan = models.IntegerField()
	family = JSONField(load_kwargs={'object_pairs_hook': collections.OrderedDict})
	created_at = models.DateTimeField(auto_now_add = True)
	updated_at = models.DateTimeField(auto_now = True)
	objects = CharDBManager()
