// var luck = document.getElementById('luck').innerHTML(),
// 	money = document.getElementById('money').innerHTML();
var luck = 2,
	dealbtn = document.getElementById('deal'),
	hitbtn = document.getElementById('hit'),
	staybtn = document.getElementById('stay'),
	splitbtnyes = document.getElementById('splity'),
	splitbtnno = document.getElementById('splitn'),
	dblbtn = document.getElementById('dbl'),
	resetbtn = document.getElementById('reset'),
	btnmsg = document.getElementById('btnmsg'),
	monies = document.getElementById('monies'),
	money = parseInt(monies.innerHTML),
	messbox = document.getElementById('message'),
	dealerHand = document.getElementById('dealerHand'),
	mon = document.getElementById('mon'),
	send_value = document.getElementById('send_value'),
	yourHand = document.getElementById('yourHand'),
	bet = document.getElementById('bet');

/*****************start constructor functions*********************/

function CardDeck() {
	this.cards = [{
		'name': 'blacktwo',
		'value': 2,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 1.392% 2.804%"
	}, {
		'name': 'redtwo',
		'value': 2,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 1.392% 91.589%"
	}, {
		'name': 'blackthree',
		'value': 3,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 9.506% 2.804%"
	}, {
		'name': 'redthree',
		'value': 3,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 9.506% 91.589%"
	}, {
		'name': 'blackfour',
		'value': 4,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 17.744% 2.804%"
	}, {
		'name': 'redfour',
		'value': 4,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 17.744% 91.589%"
	}, {
		'name': 'blackfive',
		'value': 5,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 25.982% 2.804%"
	}, {
		'name': 'redfive',
		'value': 5,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 25.982% 91.589%"
	}, {
		'name': 'blacksix',
		'value': 6,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 34.221% 2.804%"
	}, {
		'name': 'redsix',
		'value': 6,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 34.221% 91.589%"
	}, {
		'name': 'blackseven',
		'value': 7,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 42.332% 2.804%"
	}, {
		'name': 'redseven',
		'value': 7,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 42.332% 91.589%"
	}, {
		'name': 'blackeight',
		'value': 8,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 50.57% 2.804%"
	}, {
		'name': 'redeight',
		'value': 8,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 50.57% 91.589%"
	}, {
		'name': 'blacknine',
		'value': 9,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 58.809% 2.804%"
	}, {
		'name': 'rednine',
		'value': 9,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 58.809% 91.589%"
	}, {
		'name': 'blackten',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 67.047% 2.804%"
	}, {
		'name': 'redten',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 67.047% 91.589%"
	}, {
		'name': 'blackjack',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 75.254% 2.804%"
	}, {
		'name': 'redjack',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 75.254% 91.589%"
	}, {
		'name': 'blackqueen',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 83.397% 2.804%"
	}, {
		'name': 'redqueen',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 83.397% 91.589%"
	}, {
		'name': 'blackking',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 91.635% 2.804%"
	}, {
		'name': 'redking',
		'value': 10,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 91.635% 91.589%"
	}, {
		'name': 'blackace',
		'value': 11,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 99.873% 2.804%"
	}, {
		'name': 'redace',
		'value': 11,
		'quantity': 2,
		'url': "url(../../static/turkey_blackjack/images/Cards.png) no-repeat 99.873% 91.589%"
	}];

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
			card = {
				'face': this.cards[num].name,
				'value': this.cards[num].value,
				'url': this.cards[num].url
			};
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
			card.url = this.cards[num].url;
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
	this.bet = 0;

	this.check = function() {
		this.sum = 0;
		for (var i = 0; i < this.hand.length; i++) {
			this.sum += this.hand[i].value;
		}
		if (this.sum > 21) {
			if (this.aceCheck()) {
				this.check();
			} else {
				this.bust = true;
			}
		} else if (this.sum == 21 && this.hand.length == 2) {
			this.blackjack = true;
		} else {
			this.bust = false;
			this.blackjack = false;
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

	this.hit = function() {
		this.hand.push(deck.hit(this.luck));
	};

}

/*****************end constructor functions*********************/

/*****************start game functions*********************/

var deck,
	player,
	dealer;

function shuffle() {
	deck = new CardDeck();
}

function startgame() {
	console.log(money);
	if (money === 0) {
		money = 20;
	}
	player = new Player(money, luck);
	dealer = new Player(0, 2);
	yourHand.innerHTML = '';
	dealerHand.innerHTML = '';
	messbox.innerHTML = '';
	monies.innerHTML = player.money;
	resetbtn.classList.add('hidden');
	bet.value = 5;
	return;
}

function deal() {
	shuffle();
	if (parseInt(bet.value) > player.money) {
		alert("You don't have enough money to bet that much...nice try...");
		bet.focus();
		return;
	} else if (parseInt(bet.value) <= 0) {
		alert("Please enter a valid bet amount.");
		bet.focus();
		return;
	}
	if ((parseInt(bet.value) * 2) <= player.money) {
		dblbtn.classList.remove('hidden');
	}
	resetbtn.classList.add('hidden');
	yourHand.innerHTML = '';
	dealerHand.innerHTML = '';
	messbox.innerHTML = '';
	dealbtn.classList.add('hidden');
	hitbtn.classList.remove('hidden');
	staybtn.classList.remove('hidden');
	bet.disabled = true;
	bet.style.color = 'gray';
	player.bet = parseInt(bet.value);
	monies.innerHTML = player.money - player.bet;
	player.blackjack = false;
	dealer.blackjack = false;
	var handcard = '';
	var dealcard = '';
	for (var i = 0; i < 4; i++) {
		if (i % 2 === 0) {
			player.hand.push(deck.deal(player.luck));
		} else {
			dealer.hand.push(deck.deal(dealer.luck));
		}
	}
	for (var j = 0; j < 2; j++) {
		handcard += '<div style="background:' + player.hand[j].url +
			'" class="card"></div>';
	}
	yourHand.innerHTML = handcard;
	dealcard =
		'<div style="background: url(../../static/turkey_blackjack/images/cardback.png) no-repeat" class="card"></div><div style="background:' +
		dealer.hand[1].url +
		'" class="card"></div>';
	dealerHand.innerHTML = dealcard;
	dealer.check();
	player.check();
	if (dealer.blackjack || player.blackjack) {
		end();
		return;
	}
	// if (player.hand[0].value == player.hand[1].value) {
	// 	btnmsg.innerHTML = "Would you like to split?";
	// 	dealbtn.classList.add('hidden');
	// 	hitbtn.classList.add('hidden');
	// 	staybtn.classList.add('hidden');
	// 	splitbtnyes.classList.remove('hidden');
	// 	splitbtnno.classList.remove('hidden');
	// }
	return;
}

function hit() {
	var handcard = '';
	player.hit();
	for (var j = 0; j < player.hand.length; j++) {
		handcard += '<div style="background:' + player.hand[j].url +
			'" class="card"></div>';
	}
	dblbtn.classList.add('hidden');
	yourHand.innerHTML = handcard;
	player.check();
	if (player.bust) {
		end();
		return;
	}
	return;
}

// function split() {
//
// }

function dbl() {
	player.bet *= 2;
	hit();
	stay();
}

function stay() {
	var soft = false;
	if (dealer.sum == 17) {
		soft = dealer.softCheck();
	}
	if ((dealer.sum == 17 && soft) || dealer.sum < 17) {
		dealer.hit();
		dealer.check();
		stay();
	} else {
		end();
	}
}

function end() {
	var message = '';
	var dealHand = '';
	for (var j = 0; j < dealer.hand.length; j++) {
		dealHand += '<div style="background:' + dealer.hand[j].url +
			'" class="card"></div>';
	}
	dealerHand.innerHTML = dealHand;
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
	dealbtn.classList.remove('hidden');
	hitbtn.classList.add('hidden');
	dblbtn.classList.add('hidden');
	staybtn.classList.add('hidden');
	bet.disabled = false;
	bet.style.color = 'red';
	bet.setAttribute('max', player.money);
	console.log(player.hand);
	console.log('******************************************************');
	console.log(dealer.hand);
	player.hand = [];
	dealer.hand = [];
	if (player.money === 0) {
		message += "You are completely out of money, play again?";
		resetbtn.classList.remove('hidden');
	}
	return message;
}

/*****************end game functions*********************/

/****************start function calls********************/

dealbtn.onclick = function() {
	deal();
};

hitbtn.onclick = function() {
	hit();
};

dblbtn.onclick = function() {
	dbl();
};

staybtn.onclick = function() {
	stay();
};

resetbtn.onclick = function() {
	startgame();
};

startgame();

/*****************end function calls*********************/
