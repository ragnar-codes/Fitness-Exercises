export const exerciseOptions = {
    method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0bac4db036msh176337af21b321fp1bf30ajsn4d5cb9f55721',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '0bac4db036msh176337af21b321fp1bf30ajsn4d5cb9f55721',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };