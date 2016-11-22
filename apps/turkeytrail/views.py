from django.shortcuts import render, redirect

def index(request):
	if request.session['loggedin'] == False:
		return redirect(reverse('logreg:index'))
	context = {
		'characters' : ['josiah', 'isabelle', 'benjamin', 'emily', 'samuel', 'sarah'],
		'names' : ['Josiah', 'Isabelle', 'Benjamin', 'Emily', 'Samuel', 'Sarah']
	}
	return render(request, 'turkeytrail/splash.html', context)

def roll(request):
	return redirect(request, 'turkeytrail:index')
