# from django.shortcuts import render, redirect
import models

# Create your views here.

def index(request):
    return render(request, "turkeyblackjack/index.html")


def startgame(request):
    request.session['player'] = Player(request.session['User'].money, request.session['User'].luck)
    request.session['dealer'] = Dealer()
    return redirect(reverse("turkeyblackjack:index"))

def startdeck(request):
    request.session['deck'] = Card_Deck()
    return redirect(reverse("turkeyblackjack:deal"))

def deal(request):
    cards = request.session['deck'].gen
    for i in range (4):
        if (i % 2 == 0):
            request.session['dealer'].hand.append(cards[i])
        else:
            request.sesssion['player'].hand.append(cards[i])
    return redirect(reverse('turkeyblackjack:index'))
