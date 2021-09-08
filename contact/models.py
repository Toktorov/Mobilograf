from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(
        verbose_name="ФИО", max_length=255, db_index=True, blank=True, null=True
    )
    email = models.EmailField(
        verbose_name="E-mail", max_length=255, blank=True, null=True
    )
    number = models.CharField(
        verbose_name="Телефон", max_length=14, blank=True, null=True
    )

    def __str__(self):
        return f"ФИО: {self.name}, Тел: {self.number} -- Элек.почта: {self.email}"

    class Meta:
        ordering = ('-id',)
    