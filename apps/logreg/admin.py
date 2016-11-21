from django.contrib import admin
from .models import User as U

class UAdmin(admin.ModelAdmin):
    pass
admin.site.register(U, UAdmin)
