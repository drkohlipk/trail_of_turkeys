from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

# Create your views here.

def index(request):
	if request.session['loggedin'] == False:
		return redirect(reverse('logreg:index'))
	context = {
		'user_id' : request.session['user'].id
	}
	return render(request, "turkey_blackjack/index.html", context)
