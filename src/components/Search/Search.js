import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import Recipe from "../Recipe/Recipe";
import { useParams } from "react-router-dom";
import './Search.css';

const Search = () => {
    const APP_ID = `3a8d5f7e`;
    const APP_KEY = `4f9d16cc15ec1acf30530217c75ee197`;
    const { item } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [searchTitle, setSearchTitle] = useState(item?item:'');
    

    const getRecipe = (event) => {
        event.preventDefault();
        setSearchTitle(event.target.searchRecipe.value);
    };


    useEffect(() => {
        async function loadRecipe() {
        const url = `https://api.edamam.com/search?q=${searchTitle}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
        const response = await fetch(url);
        const data = await response.json();
        setRecipes(data.hits);
        
        }
        loadRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTitle]);

    return (
        <div>
            <Form getRecipe={getRecipe} />
            <div className="menu">
                {recipes.map(recipe => {
                    return (
                    <Recipe item={searchTitle} recipe={recipe} />
                    );
                })}
            </div>
        </div>
    );
};

export default Search;