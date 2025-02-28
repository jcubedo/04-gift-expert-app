import { useState } from 'react';

//export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evita que se refresque
        if (inputValue.trim() === '') return;

        onNewCategory(inputValue.trim());
        // setCategories( categories => [ inputValue, ...categories ]); // La añadimos al inicio
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                //onChange={event => onInputChange(event)}
                onChange={onInputChange} // como estamos lanzando el mismo se puede resumir
            />
        </form>
    )
}
