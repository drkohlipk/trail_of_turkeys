from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User

def index(request):
	return render(request, 'logreg/index.html')

def process(request, typelogin): #route to process the entered information if a user attempts to log in or register
	result = User.objects.validator(request.POST, typelogin) #get a result based on the user's entered information
	request.session['loggedin'] = result['loggedin'] #store whether or not the user is logged in in session

	if result['loggedin']: #if the user is logged in based on the entered information...
		request.session['user'] = result['user'] #store the user's information in session
		return redirect(reverse('turkeytrail:index')) #redirect the user to the success route
	else: #if the user is not logged in based on the entered information...
		for error in result['errors']['reg']: #for every error...
			messages.error(request, error) #make a flash message
		for warning in result['errors']['login']:
			messages.warning(request, warning)
		return redirect(reverse('logreg:index')) #redirect back to root

def logout(request):
	request.session['loggedin'] = False #log the user out
	del request.session['user']
	return redirect('logreg:index') #redirect to root
