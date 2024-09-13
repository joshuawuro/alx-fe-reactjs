import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch("./src/data.json");
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Error loading recipe data:", error);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <div className="container mx-auto p-4 h-screen">
        <h2 className="font-bold text-center my-3">RECIPES</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipe.map((recipe) => (
            <div
              key={recipe.id}
              className="w-60 rounded overflow-hidden shadow-sm hover:shadow-md bg-white hover:bg-slate-100"
            >
              <Link to={`/recipe/${recipe.id}`}>
                <img className="w-full" src={recipe.image} alt={recipe.title} />
              </Link>{" "}
              <div className="px-6 py-4">
                <Link to={`/recipe/${recipe.id}`}>
                  <h2 className="font-bold text-base mb-2">{recipe.title}</h2>
                </Link>
                <p className="text-gray-700 text-sm">{recipe.summary}</p>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default HomePage;
