from django.shortcuts import render
from contact.forms import ContactForm


def index(request):
    form = ContactForm(request.POST)
    return render(request, 'index.html', {'form':form,})


