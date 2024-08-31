
from django.db import models

class Veiculo(models.Model):
    fornecedor = models.CharField(max_length=100)
    entrada = models.TimeField()
    saida = models.TimeField()
    data = models.DateField()
    re = models.CharField(max_length=100)
    status = models.CharField(max_length=50, choices=[('Na Doca', 'Na Doca'), ('Saindo', 'Saindo')])

    def __str__(self):
        return f"{self.fornecedor} - {self.status}"
