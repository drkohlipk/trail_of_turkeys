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
	send_value = document.getElementById('send_value'),
	hand = document.getElementById('hand');

/*****************start constructor functions*********************/

function CardDeck() {
	this.cards = [
		{
			'name' : 'blacktwo',
			'value' : 2,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 1.393% 3.241%"
		},
		{
			'name' : 'redtwo',
			'value' : 2,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 1.393% 91.628%"
		},
		{
			'name' : 'blackthree',
			'value' : 3,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 9.563% 3.241%"
		},
		{
			'name' : 'redthree',
			'value' : 3,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 9.563% 91.628%"
		},
		{
			'name' : 'blackfour',
			'value' : 4,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 17.744% 3.241%"
		},
		{
			'name' : 'redfour',
			'value' : 4,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 17.744% 91.628%"
		},
		{
			'name' : 'blackfive',
			'value' : 5,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 25.966% 3.241%"
		},
		{
			'name' : 'redfive',
			'value' : 5,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 25.966% 91.628%"
		},
		{
			'name' : 'blacksix',
			'value' : 6,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 34.157% 3.241%"
		},
		{
			'name' : 'redsix',
			'value' : 6,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 34.157% 91.628%"
		},
		{
			'name' : 'blackseven',
			'value' : 7,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 42.369% 3.241%"
		},
		{
			'name' : 'redseven',
			'value' : 7,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 42.369% 91.628%"
		},
		{
			'name' : 'blackeight',
			'value' : 8,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 50.602% 3.241%"
		},
		{
			'name' : 'redeight',
			'value' : 8,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 50.602% 91.628%"
		},
		{
			'name' : 'blacknine',
			'value' : 9,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 58.771% 3.241%"
		},
		{
			'name' : 'rednine',
			'value' : 9,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 58.771% 91.628%"
		},
		{
			'name' : 'blackten',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 66.984% 3.241%"
		},
		{
			'name' : 'redten',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 66.984% 91.628%"
		},
		{
			'name' : 'blackjack',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 75.222% 3.241%"
		},
		{
			'name' : 'redjack',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 75.222% 91.628%"
		},
		{
			'name' : 'blackqueen',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 83.407% 3.241%"
		},
		{
			'name' : 'redqueen',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 83.407% 91.628%"
		},
		{
			'name' : 'blackking',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 91.635% 3.241%"
		},
		{
			'name' : 'redking',
			'value' : 10,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 91.635% 91.628%"
		},
		{
			'name' : 'blackace',
			'value' : 11,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 99.81% 3.241%"
		},
		{
			'name' : 'redace',
			'value' : 11,
			'quantity' : 2,
			'url' : "url('../images/Cards.png') no-repeat 99.81% 91.628%"
		}
	];

	this.rando = function(luck) {
		var num;
		if (luck >= 3) {
			var lucky = Math.floor(Math.random() * luck);
			if (lucky < 2) {
				num = Math.floor(Math.random() * 26);
			} else {
				num = Math.floor(Math.random() * 14);
				num += 12;
			}
		} else if (luck == 1) {
			var unlucky = Math.floor(Math.random() * 3);
			if (unlucky < 2) {
				num = Math.floor(Math.random() * 26);
			} else {
				num = 11;
				num -= Math.floor(Math.random() * 12);
			}
		} else {
			num = Math.floor(Math.random() * 26);
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
	for (var j = 0; j < 2; j++) {
		var handcard = '<div class="card"></div>';
		handcard.style.backgroundImage = player.hand[j].url;
		hand.appendChild(handcard);
		playHand.push(player.hand[j].face);
	}
	dealer.check();
	player.check();
	if (dealer.blackjack || player.blackjack) {
		end();
	}
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
