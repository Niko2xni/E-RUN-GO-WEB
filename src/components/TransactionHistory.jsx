import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
  
            <th>Order ID</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trx) => (
            <tr key={trx.id}>
              <td>{trx.id}</td>
              <td>{trx.orderId}</td>
              {/* UPDATED: Uses Peso symbol */}
              <td className="amount">₱{trx.amount.toFixed(2)}</td>
              <td>{trx.method}</td>
              <td>
                <span className={`pay-status ${trx.status.toLowerCase()}`}>
                  {trx.status}
                </span>
              </td>
              <td>{trx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;