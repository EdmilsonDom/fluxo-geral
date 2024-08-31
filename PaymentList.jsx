PaymentList.jsx

import React, { useEffect, useState } from 'react';

function PaymentList() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetch('/api/pagamentos/')
      .then(response => response.json())
      .then(data => setPayments(data));
  }, []);

  const deletePayment = (id) => {
    fetch(`/api/pagamentos/${id}/`, {
      method: 'DELETE',
    }).then(() => setPayments(payments.filter(payment => payment.id !== id)));
  };

  return (
    <div>
      <h2>Pagamentos</h2>
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Valor</th>
            <th>Data de Vencimento</th>
            <th>Status</th>
            <th>Quantidade Faltante</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.cliente.nome}</td>
              <td>{payment.valor}</td>
              <td>{payment.data_vencimento}</td>
              <td>
                {payment.status === 'pendente' ? '🔴 Pendente' : '🟢 Pago'}
              </td>
              <td>{payment.quantidade_faltante}</td>
              <td>
                <button onClick={() => deletePayment(payment.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentList;

