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
        onChange={handleInputChange}
        placeholder='search by description....'
        />
    </div>
  )
}

export default SearchBar