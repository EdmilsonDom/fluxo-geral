
from django import forms
from .models import Veiculo

class VeiculoForm(forms.ModelForm):
    class Meta:
        model = Veiculo
        fields = ['fornecedor', 'entrada', 'saida', 'data', 're', 'status']

