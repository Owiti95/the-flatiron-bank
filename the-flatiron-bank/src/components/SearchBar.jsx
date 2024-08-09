import React, {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [searchText, setSearchText] = useState('')

    const handleInputChange = (e) =>{
        const newSearchText = e.target.value;
        setSearchText(newSearchText)
        onSearch(newSearchText)
    }
  
    return (
    <div>
        <input
        type="text"
        onchange={handleInputChange}
        placeholder='search....'
        />
    </div>
  )
}

export default SearchBar