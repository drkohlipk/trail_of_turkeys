from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse

def index(request):
	if not request.session['loggedin']:
		return redirect(reverse('logreg:index'))

	context = {
		'characters' : ['Josiah', 'Isabelle', 'Benjamin', 'Emily', 'Samuel', 'Sarah']
	}
	return render(request, 'turkeytrail/splash.html', context)

def roll(request):
	return redirect(request, 'turkeytrail:index')
