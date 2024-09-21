import axios from "axios";

const GITHUB_SEARCH_API_URL = "https://api.github.com/search/users";

const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;
