

function displayTruckAnimation() {
    const truckAnimation = document.getElementById('truck-animation');
    truckAnimation.classList.remove('hidden');}
    document.getElementById('formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
      
        // Captura os valores dos campos
        const fornecedor = document.getElementById('fornecedor').value;
        const entrada = document.getElementById('entrada').value;
        const saida = document.getElementById('saida').value;
        const data = document.getElementById('data').value;
        const re = document.getElementById('re').value;
      
        // Formata os dados em uma string CSV
        const linha = `${fornecedor},${entrada},${saida},${data},${re}\n`;
      
        // Aqui você pode enviar os dados para o servidor ou manipulá-los conforme necessário
        console.log(linha); // Apenas para visualização no console
      
        // Exemplo de envio via AJAX para um servidor (opcional)
        /*
        fetch('seu-servidor-endpoint', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fornecedor, entrada, saida, data, re })
        }).then(response => {
          if (response.ok) {
            alert('Dados registrados com sucesso!');
          } else {
            alert('Erro ao registrar os dados.');
          }
        });
        */
      });
      
    document.getElementById('Adicionar').addEventListener('click'), function() 
        // Mover o caminhão
      {  let caminhao = document.getElementById('caminhao');
        caminhao.classList.add('move-caminhao');}
        
        import React, { useState } from 'react';
        import './estilo.css';
        
        function mov() {
          const [fornecedores, setFornecedores] = useState('');
          const [entrada, setEntrada] = useState('');
          const [saida, setSaida] = useState('');
          const [data, setData] = useState('');
          const [re, setRe] = useState('');
          const handleSubmit = (e) => {
            e.preventDefault();
            const novoPagamento = {
              fornecedores,
              entrada: parseFloat(entrada),
              saida,
              data,
              re,
              
            };
            setPagamentos([...pagamentos, novoPagamento]);
            setFornecedores('');
            setEntrada('');
            setSaida('');
            setData('');
            setRe('');
          };
        
          return (
            <div className="estilo">
              <h1>Fluxo de Veiculos</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Fornecedores"
                  value={fornecedores}
                  onChange={(e) => setFornecedores(e.target.value)}
                  required
                />
                <input
                  type="time"
                  placeholder="entrada"
                  value={entrada}
                  onChange={(e) => setEntrada(e.target.value)}
                  required
                />
                 <input
                  type="time"
                  placeholder="saida"
                  value={saida}
                  onChange={(e) => setSaida(e.target.value)}
                  required
                />
                <input
                  type="date"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  required
                />
                <input
                  type="re"
                  value={re}
                  onChange={(e) => setRe(e.target.value)}
                  required
                />
                <button type="submit">Adicionar Registro</button>
              </form>
         </div>
          );
        }
        
        export default Mov;