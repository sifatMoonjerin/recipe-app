import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Ingredients.css';

const Ingredients = () => {
    const APP_ID = `3a8d5f7e`;
    const APP_KEY = `4f9d16cc15ec1acf30530217c75ee197`;

    const { item,label } = useParams();
    const [recipe,setRecipe] = useState([]);
    const [image,setImage] = useState('');
    

    useEffect(() => {
        async function loadRecipe() {
            console.log(item)
        const url = `https://api.edamam.com/search?q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
        const response = await fetch(url);
        const data = await response.json();
        const newRecipe = data.hits.find( recipe => recipe.recipe.label === label);
        
        setRecipe(newRecipe.recipe.ingredientLines)
        setImage(newRecipe.recipe.image)
        }

        if(!recipe.length){
            loadRecipe()
        }
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[recipe]);

    return (
        <div className="ingredient">
            <div className="ingredient-card">
                <img className="ingredient-image" src={image} alt=""/>
                <div className="ingredient-list">
                    <h3>{label}</h3>
                    <ul>
                        {recipe.map(e => <li>{e}</li>)}
                    </ul>
                    <Link to={`/${item}`}><button>Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Ingredients;