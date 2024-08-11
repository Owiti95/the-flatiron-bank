import React, { useState } from 'react'

const TransactionForm = ({ transactions, setTransactions }) => {
    const [formData, setFormData] = useState({
        description: '',
        category: '',
        amount: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });


        // setFormData("")
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://deploy-eight-delta.vercel.app/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((transaction) => {
                setTransactions([transaction, ...transactions]);

                setFormData({ description: '', category: '', amount: '', date: '' });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className=' p-8 m-6  '>
            <form onSubmit={handleSubmit} className=' p-7 shadow-md rounded-md flex justify-center flex-col items-center custom-shadow'>
                <div className=' p-4 flex flex-col justify-center  items-center text-center' >
                    <label>Description:</label>
                    <input
                        type='text'
                        id='description'
                         name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className=' border-2 rounded-md shadow-md custom-shadow'
                        required
                    />
                </div>
                <div className=' p-4 flex flex-col justify-center  items-center text-cente'>
                    <label>Category:</label>
                    <input
                        type='text'
                        id='category'
                        name='category'
                        value={formData.category}
                        onChange={handleChange}
                        className=' border-2 rounded-md shadow-md custom-shadow'
                        required
                    />
                </div>
                <div className=' p-4 flex flex-col justify-center  items-center text-cente'>
                    <label>Amount:</label>
                    <input
                        type='number'
                        id='amount'
                        name='amount'
                        value={formData.amount}
                        onChange={handleChange}
                        className=' border-2 rounded-md shadow-md custom-shadow'
                        required
                    />
                </div>
                <div className=' mb-3'>
                    <label className='flex flex-col justify-center  items-center text-cente'>Date:</label>
                    <input
                    className=' p-2 border-2 rounded-md shadow-md custom-shadow'
                        type='date'
                        id='date'
                        name='date'
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div  >
                <button className=' p-2  bg-amber-900 rounded-md' type='submit'>Add</button>
            </form>
            <style jsx>{`
  .custom-shadow {
    box-shadow: 0 4px 6px -1px gold;
  }
`}</style>
        </div>
    );
};

export default TransactionForm;