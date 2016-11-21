// var luck = document.getElementById('luck').innerHTML(),
// 	money = document.getElementById('money').innerHTML();
var luck = 3,
	money = 20,
	dealbtn = document.getElementById('deal'),
	hitbtn = document.getElementById('hit'),
	staybtn = document.getElementById('stay'),
	monies = document.getElementById('money'),
	messbox = document.getElementById('message'),
	your_hand = document.getElementById('player_hand'),
	dealer_hand = document.getElementById('dealer_hand'),
	mon = doument.getElementById('mon'),
	send_value = document.getElementById('send_value');

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
			var lucky = Math.floor(Math.random() * luck);
			if (lucky < 2) {
				num = Math.floor(Math.random() * 13);
			} else {
				num = Math.floor(Math.random() * 7);
				num += 6;
			}
		} else if (luck == 1) {
			var unlucky = Math.floor(Math.random() * 3);
			if (unlucky < 2) {
				num = Math.floor(Math.random() * 13);
			} else {
				num = 6;
				num -= Math.floor(Math.random() * 7);
			}
		} else {
			num = Math.floor(Math.random() * 13);
		}
		return num;
	};

	this.deal = function(luck) {
		var num = this.rando(luck),
        	card = {'face':this.cards[num].name, 'value': this.cards[num].value};
        this.cards[num].quantity -= 1;
        return card;
	};

	this.hit = function(luck) {
		var card = {},
			num = this.rando(luck);
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

function Player(money, luck) {
    this.money = money;
    this.luck = luck;
    this.hand = [];
	this.bust = false;
	this.sum = 0;
	this.blackjack = false;
	this.bet = 5;

	this.check = function() {
		this.sum = 0;
		for (var i = 0; i < this.hand.length; i++) {
			this.sum += this.hand[i].value;
		}
		if (this.sum > 21) {
			if(this.aceCheck()) {
				this.check();
			} else {
				this.bust = true;
			}
		} else if (this.sum == 21 && this.hand.length == 2) {
			this.blackjack = true;
		} else {
			this.bust = false;
		}
		return this;
	};

	this.aceCheck = function() {
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i].value == 11) {
				this.hand[i].value = 1;
				return true;
			}
		}
		return false;
	};

	this.softCheck = function() {
		var soft = false;
		for (var i = 0; i < this.hand.length; i++) {
			if (this.hand[i].value == 11) {
				soft = true;
				break;
			}
		}
		return soft;
	};

	this.hit = function () {
		this.hand.push(deck.hit(this.luck));
	};

}

/*****************end constructor functions*********************/

/*****************start game functions*********************/

var deck,
	player,
	dealer;

function startgame() {
	deck = new CardDeck();
    player = new Player(money, luck);
    dealer = new Player(0, 2);
    return;
}

function deal() {
	var playHand = [],
			dealHand = [];
    for (var i = 0; i < 4; i++) {
        if (i % 2 === 0) {
			player.hand.push(deck.deal(player.luck));
		} else {
			dealer.hand.push(deck.deal(dealer.luck));
		}
	}
	dealer.check();
	player.check();
	if (dealer.blackjack || player.blackjack) {
		console.log(end());
	}
	for (var j = 0; j < 2; j++){
		playHand.push(player.hand[j].face);
		dealHand.push(dealer.hand[j].face);
	}
		your_hand.innerHTML = playHand;
		dealer_hand.innerHTML = dealHand;
		return;
}
dealbtn.onclick = function(){deal();};

function hit() {
	var playHand = [];
	player.hit();
	player.check();
	if (player.bust) {
		console.log(end());
	}
	for (var j = 0; j < player.hand.length; j++){
		playHand.push(player.hand[j].face);
	}
	your_hand.innerHTML = playHand;
	return;
}
hitbtn.onclick = function(){hit();};

function stay() {
	var soft = false;
	var dealHand = [];
	if (dealer.sum == 17) {
		soft = dealer.softCheck();
	}
	if ((dealer.sum == 17 && soft) || dealer.sum < 17) {
		dealer.hit();
		dealer.check();
		stay();
	} else {
		for (var j = 0; j < dealer.hand.length; j++){
			dealHand.push(dealer.hand[j].face);
		}
		dealer_hand.innerHTML = dealHand;
		console.log(end());
	}
}
staybtn.onclick = function(){stay();};

function end() {
	var message;
	if (player.bust) {
		message = "Player loses, dealer wins.";
		player.money -= player.bet;
	} else if (dealer.bust) {
		message = "Player wins, dealer loses.";
		player.money += player.bet;
	} else if (player.blackjack && !dealer.blackjack) {
		message = "Winner Winner Turkey dinner!!";
		player.money += (player.bet * 2);
	} else if (dealer.blackjack && !player.blackjack) {
		message = "Ouch!!!  You lose...";
		player.money -= player.bet;
	} else if (player.sum > dealer.sum) {
		message = "Player wins, dealer loses.";
		player.money += player.bet;
	} else if (dealer.sum > player.sum) {
		message = "Player loses, dealer wins.";
		player.money -= player.bet;
	} else if (player.sum == dealer.sum) {
		message = "Push, deal again.";
	}
	mon.value = player.money;
	monies.innerHTML = player.money;
	messbox.innerHTML = message;
	return message;
}

/*****************end game functions*********************/

/***************tests***************/
startgame();
// deal();
// console.log(dealer);
// console.log(player);
// stay();
// console.log(dealer);
// console.log(player);
