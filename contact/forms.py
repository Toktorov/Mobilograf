from django import forms
from .models import Contact


class ContactForm(forms.ModelForm):

    class Meta:
        model = Contact
        fields = (
            'name',
            'email',
            'number',
        )
        widgets = {
            "name": forms.TextInput(
                attrs={'class': 'form-control', 'placeholder': 'Например: Иван Иванов Иванович'}
            ),
            "email": forms.TextInput(
                attrs={'class': 'form-control', 'placeholder': 'Например: test@gmail.com'}
            ),
            "number": forms.TextInput(
                attrs={'class': 'form-control', 'placeholder': 'Например: 0 703 882 069'}
            ),
        }
        labels = {
            'name': 'ФИО',
            'email': 'E-mail',
            'number': 'Номер телефона',
        }
