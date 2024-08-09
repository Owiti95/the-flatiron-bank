import React, { useEffect, useState } from 'react'
import Transaction from './components/Transaction'
import SearchBar from './components/SearchBar'
import TransactionForm from './components/TransactionForm'

const App = () => {

  const [transactions,setTransactions]=useState([]);
  const [searchText,setSearchText] = useState ('')
  
  const handleSearch = (text) => {
    setSearchText(text)
  }
  
    useEffect(() =>{
      fetch('http://localhost:3000/transactions')
      .then(res =>res.json())
      .then(transaction =>setTransactions(transaction)
      )
    },[])

  return (
    <div >
    <div className=' flex justify-evenly p-4 '>
    <h1>The Bank Of Flatiron</h1>
    <SearchBar onSearch={handleSearch}/>
    </div>
    <div >
   
    <Transaction 
    transactions={transactions} searchText={searchText} />
     <TransactionForm transactions={transactions} setTransactions={setTransactions} />
    </div>
  </div>
  )
}

export default App;