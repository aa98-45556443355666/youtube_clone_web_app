import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 40,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url, page) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    ...options,
    params: {
      ...options.params,
      page,
    },
  });

  return data;
};

const fetchData = async () => {
  try {
    const totalPages = 5;

    for (let page = 0; page < totalPages; page++) {
      const data = await fetchFromAPI("", page);

      console.log(`Data for page ${page}:`, data);
    }
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error fetching data:", error);
  }
};

fetchData();
