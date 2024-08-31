from django.shortcuts import render, redirect
from .models import Veiculo
from .forms import VeiculoForm

def fluxo_veiculos(request):
    if request.method == 'POST':
        form = VeiculoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('fluxo_veiculos')
    else:
        form = VeiculoForm()
    
    veiculos = Veiculo.objects.all()
    return render(request, 'fluxo_veiculos.html', {'form': form, 'veiculos': veiculos})

