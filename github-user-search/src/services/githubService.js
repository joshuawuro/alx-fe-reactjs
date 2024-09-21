import axios from "axios";

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users?q";

const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");
  setUserData([]);

  const query = [];
  if (username) query.push(`user:${username}`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  try {
    const data = await fetchUserData(query.join("+"));
    setUserData(data.items || []);
  } catch (error) {
    setError("Looks like we can’t find the user");
  } finally {
    setLoading(false);
  }
};

export default fetchUserData;
