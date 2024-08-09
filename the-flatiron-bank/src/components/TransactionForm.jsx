import React, {useState} from 'react'

const TransactionForm = ({transactions, setTransactions}) => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((transaction) => {
        setTransactions([transaction, ...transactions]);

        setFormData({description: '', category: '', amount: '', date: ''});
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    };

    return (
    <div>
        <form>
            <div>
                <label>Description:</label>
                <input
                type='text'
                id='description'
                name='description'
                value={formData.description}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                type='text'
                id='Category'
                name='Category'
                value={formData.category}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                type='number'
                id='amount'
                value={formData.amount}
                onChange={handleChange}
                required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleChange}
                required
                />
            </div>
            <button>Add</button>
        </form>
    </div>
  );
};

export default TransactionForm;