import csv
from django.http import HttpResponse


def export_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="pagamentos.csv"'

    writer = csv.writer(response)
    writer.writerow(['Fornecedores', 'Entrada', 'Saida', 'Data', 'RE', 'Status',])

    pagamentos = pagamento.objects.all()
    for pagamento in pagamentos:
        writer.writerow([
            pagamento.fornecedores.nome, 
            pagamento.entrada, 
            pagamento.saida, 
            pagamento.data, 
            pagamento.re,
            pagamento.status,
        ])

    return response




