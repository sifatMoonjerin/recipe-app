import React from 'react';
import './Form.css';

function Form(props){
    return(
        <form onSubmit={props.getRecipe} className="searchForm">
            <input type="text" name="searchRecipe" placeholder="Recipe" required
            ></input>
            <button type="submit" class="search-btn">Search</button>
        </form>
    );
}

export default Form;