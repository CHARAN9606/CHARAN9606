from django.db import models
from django.forms import CharField


class Product(models.Model):
    name = models.CharField(max_length = 200)
    price = models.FloatField()
    stock = models.IntegerField()
    image_url = models.CharField(max_length = 2083)

class Offer(models.Model):
    code  = models.CharField(max_length=50)
    description = models.CharField(max_length = 200)
    discount = models.FloatField()



