from django import template

register = template.Library()

@register.simple_tag
def get_money(user_id):
	request.session['user'].money = request.POST['money']
	return
