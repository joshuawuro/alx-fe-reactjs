import { useState, useEffect } from "react";

function RecipeDetail() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        alert("Error fetching data from server: ", error);
      }
    }
    fetchDetails();
  }, []);
  return (
    <>
      <div className="container">
        <div>
          {details.map((details) => {
            <div key={details.id}>
              <img src={recipe.image} alt={recipe.title} className="w-full" />
              <div>
                <h3 className="shadow-sm">{details.ingredients}</h3>
                <p>{details.instructions}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}

export default RecipeDetail;
