##########################################
from django.views.generic import CreateView

from .models import Contact
from .forms import ContactForm
from .tasks import send_info


class ContactView(CreateView):
    model = Contact
    form_class = ContactForm
    success_url = '/' 

    
    def form_valid(self, form):
        form.save()
        send_info.delay(
            form.instance.name,
            form.instance.email,
            form.instance.number,
            )
        return super().form_valid(form)
    
