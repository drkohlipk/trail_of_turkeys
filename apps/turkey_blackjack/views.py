from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from ..logreg.models import User

# Create your views here.

def index(request):
	if request.session['loggedin'] == False:
		return redirect(reverse('logreg:index'))
	context = {
		'user' : request.session['user'],
		'money' : User.objects.get(id = request.session['user'].id).money
	}
	print (request.session['user'].money)
	return render(request, "turkey_blackjack/index.html", context)

def home(request):
	User.objects.filter(id = request.session['user'].id).update(money = request.POST['money'])
	request.session['user'].money = request.POST['money']
	return redirect(reverse('turkeytrail:index'))
