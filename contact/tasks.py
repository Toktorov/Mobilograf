from django.conf import settings
from django.core.mail import EmailMessage

from sanjar.celery import app



@app.task
def send_info(name, email, number):
    message = f"""
    ФИО: {name}
    Элек.почта: {email}
    Номер телефона: {number}
    """
    email = EmailMessage(
        "Мобилография Санжар!",
        message, settings.EMAIL_HOST_USER,
        ['oichiev.edzen@gmail.com', 'sanjar24072000@gmail.com'],
    )
    email.send(fail_silently=False)

