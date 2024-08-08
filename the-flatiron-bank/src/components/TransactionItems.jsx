import React from 'react'

const TransactionItems = ({description,category,amount,date}) => {
  
    return (
    <tbody>
        <tr>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td>{date}</td>
        </tr>
    </tbody>
  )
}

export default TransactionItems