// var luck = document.getElementById('luck').innerHTML(),
// 	money = document.getElementById('money').innerHTML();
var luck = 3,
	money = 20;

/*****************start constructor functions*********************/

function CardDeck() {
	this.cards = [
		{
			'name' : 'two',
			'value' : 2,
			'quantity' : 4
		},
		{
			'name' : 'three',
			'value' : 3,
			'quantity' : 4
		},
		{
			'name' : 'four',
			'value' : 4,
			'quantity' : 4
		},
		{
			'name' : 'five',
			'value' : 5,
			'quantity' : 4
		},
		{
			'name' : 'six',
			'value' : 6,
			'quantity' : 4
		},
		{
			'name' : 'seven',
			'value' : 7,
			'quantity' : 4
		},
		{
			'name' : 'eight',
			'value' : 8,
			'quantity' : 4
		},
		{
			'name' : 'nine',
			'value' : 9,
			'quantity' : 4
		},
		{
			'name' : 'ten',
			'value' : 10,
			'quantity' : 4
		},
		{
			'name' : 'jack',
			'value' : 10,
			'quantity' : 4
		},
		{
			'name' : 'queen',
			'value' : 10,
			'quantity' : 4
		},
		{
			'name' : 'king',
			'value' : 10,
			'quantity' : 4
		},
		{
			'name' : 'ace',
			'value' : 11,
			'quantity' : 4
		}
	];

	this.rando = function(luck) {
		var num;
		if (luck >= 3) {
			var lucky = Math.Floor(Math.random() * (luck + 1));
			if (lucky < 2) {
				num = Math.floor(Math.random() * 13);
			} else {
				num = Math.floor(Math.random() * 8);
				num += 6;
			}
		} else if (luck == 1) {
			var unlucky = Math.Floor(Math.random() * 4);
			if (unlucky < 2) {
				num = Math.floor(Math.random() * 13);
			} else {
				num = 6;
				num -= Math.floor(Math.random() * 7);
			}
		}
		num = Math.floor(Math.random() * 13);
		return num;
	};

	this.deal = function(luck) {
		luck = luck || 2;
		var num = this.rando(),
        	card = {'face':this.cards[num].name, 'value': this.cards[num].value};
        this.cards[num].quantity -= 1;
		console.log(luck);
        return card;
	};

	this.hit = function() {
		var card = {},
			num = this.rando();
		if (this.cards[num].quantity === 0) {
			this.hit();
		} else {
			card.face = this.cards[num].name;
			card.value = this.cards[num].value;
			this.cards[num].quantity -= 1;
		}
		return card;
	};
}

function Dealer() {
    this.hand = [];

	this.check = function() {
		var sum = 0;
		var bust = false;
		for (var i = 0; i < this.hand.length; i++) {
			sum += this.hand[i].value;
		}
		if (sum > 21) {
			bust = true;
		} else {
			bust = false;
		}
		return sum, bust;
	};
}

function Player(money, luck) {
    this.money = money;
    this.luck = luck;
    this.hand = [];
}

/*****************end constructor functions*********************/

/*****************start game functions*********************/

var deck,
	player,
	dealer;

function startgame() {
	deck = new CardDeck();
    player = new Player(money, luck);
    dealer = new Dealer();
    return;
}

function deal() {
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
			player.hand.push(deck.deal(luck));
		} else {
			dealer.hand.push(deck.deal());
		}
	}
    return;
}

function check(hand){
	var sum = 0;
	var bust = false;
	for (var i = 0; i < hand.length; i++) {
		sum += hand[i].value;
	}
	if (sum > 21) {
		aceCheck(hand);
		bust = true;
	} else {
		bust = false;
	}
	return sum, bust;
}

function aceCheck(hand) {
	for (var i = 0; i < hand.length; i++) {
		if (hand[i].value == 11) {
			hand[i].value = 1;
			check(hand);
			break;
		}
	}
}

/*****************end game functions*********************/

/***************tests***************/
startgame();
deal();
console.log(dealer);
console.log(player);
console.log(deck);
console.log(deck.hit());
