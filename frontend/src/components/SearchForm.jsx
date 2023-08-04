import { useState } from "react"

const SearchForm = ({ onSubmit }) => {
    const [ingredient, setIngredient] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(ingredient);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Enter an ingredient..."
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm