import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('')

const handleSubmit =  (e) => {
    e.preventDefault()
    console.log('submit')
    if(inputValue === '') {
      return
    }else{
      setCategories(categories => [inputValue, ...categories])
      setInputValue('');
    }
}

  return (
  <header>
    <form className="container_form" onSubmit={ handleSubmit }>
        <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="One Piece"
        />
        <div className='separator'></div>
        <input type="submit" value="Search"/>
    </form>
  </header>
  )
}

export default AddCategory

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}