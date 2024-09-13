import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [recipe, setRecipe] = useState(null);

  // Fetch the recipe data when component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      } catch (error) {
        alert("Error loading recipe data:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  // If the recipe is not found or still loading
  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 shadow-sm">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        className="w-full max-w-md mx-auto mb-4"
        src={recipe.image}
        alt={recipe.title}
      />
      <p className="text-lg mb-4">{recipe.summary}</p>
      <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
      {<p className="text-lg">{recipe.instructions}</p>}
    </div>
  );
};

export default RecipeDetail;
