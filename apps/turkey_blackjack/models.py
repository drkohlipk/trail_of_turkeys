from django.db import models
import random

# Create your models here.
function Card_Deck(object):
	def __init__(self):
		self.cards = [
            {
    			'name' : 'two',
    			'value' : 2,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'three',
    			'value' : 3,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'four',
    			'value' : 4,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'five',
    			'value' : 5,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'six',
    			'value' : 6,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'seven',
    			'value' : 7,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'eight',
    			'value' : 8,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'nine',
    			'value' : 9,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'ten',
    			'value' : 10,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'jack',
    			'value' : 10,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'queen',
    			'value' : 10,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'king',
    			'value' : 10,
    			'quantity' : 4,
    		},
    		{
    			'name' : 'ace',
    			'value' : 11,
    			'quantity' : 4,
    		}
        ]

    def gen(self):
        cards = []
        for i in range (4):
            rando = random.randint(0,12)
            cards.append{"face":self.cards[rando].name, "value": self.cards[rando].value}
            self.cards[rando].quantity -= 1
        return cards
