import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

function Recipe(props){
    const { label, image } = props.recipe.recipe;
    const item = props.item;

    return(
        <div className="card">
            <img src={image} alt={label}></img>
            <div className="container">
                <h4>{label}</h4>
                <Link to={`/${item}/${label}`} ><button>Ingredients</button></Link>
            </div>
        </div>
    );
}

export default Recipe;