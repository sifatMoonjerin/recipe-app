import React from 'react';

function Form(props){
    return(
        <form onSubmit={props.getRecipe} className="searchForm">
            <input type="text" name="searchRecipe" placeholder="Recipe" required></input>
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;