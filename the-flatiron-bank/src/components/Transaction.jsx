import React from 'react'
import TransactionItems from './TransactionItems'

const Transaction = ({transactions,searchText}) => {
  return (
    <div className='bg-yellow-700 rounded-lg p-4'>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            {transactions
            .filter((transaction) =>
            searchText === '' || transaction.description.toLowerCase().includes(searchText.toLowerCase())
        ) 
        
            .map(transaction=> <TransactionItems
            
            key={transaction.id}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
                date={transaction.date}
            />
            
            )}

        </table>
    </div>
  )
}

export default Transaction;