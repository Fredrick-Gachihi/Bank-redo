import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const initialState = {
    description: '',
    category: '',
    amount: '',
    date: ''
  };
  const [transaction, setTransaction] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onAddTransaction(transaction);
    setTransaction(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        value={transaction.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={transaction.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="text"
        name="amount"
        value={transaction.amount}
        onChange={handleChange}
        placeholder="Amount"
      />
      <input
        type="date"
        name="date"
        value={transaction.date}
        onChange={handleChange}
        placeholder="Date"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;