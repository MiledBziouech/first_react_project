export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'af5eba0b92msh7107d67ae272240p19227ajsn2b6a9879b336',
  },
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'af5eba0b92msh7107d67ae272240p19227ajsn2b6a9879b336',
  },
};
export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

