import { useState } from 'react';


export const AddCategory = ({ setCategories }) => {
  
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if ( inputValue.trim().length <= 1 ) return;
    
    setCategories( categories => [ inputValue, ...categories]);
    setInputValue('');
  }

  return (
    // <h3>AddCategory</h3>
    <form onSubmit={ (event) => onSubmit(event) }>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={ inputValue }
        // onChange={ (event) => onInputChange(event) }
        onChange={ onInputChange }
      /> 
    </form>
  )
}
