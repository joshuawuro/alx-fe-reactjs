import { useState, useEffect } from "react";

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
        <div className="grid mobile:grid-cols-1 tablet::grid-cols-2 laptop:grid-cols-4 gap-6">
          {recipe.map((recipe) => (
            <div
              key={recipe.id}
              className="w-60 rounded overflow-hidden shadow-lg bg-white"
            >
              <img src={recipe.image} alt={recipe.title} className="w-full" />
              <div className="px-6 py-4">
                <h2 className="px-6 py-4 font-bold text-xl mb-2">
                  {recipe.title}
                </h2>
                <p className="text-gray-700 text-sm">{recipe.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
