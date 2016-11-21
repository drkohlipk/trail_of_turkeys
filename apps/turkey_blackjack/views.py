from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages

# Create your views here.

def index(request):
    return render(request, "turkey_blackjack/index.html")

def deal(request):
    return redirect(reverse('turkey_blackjack:index'))
