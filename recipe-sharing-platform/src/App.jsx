import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import HomePage from "./components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />4
      </Routes>
    </Router>
  );
}

export default App;
