export const movieApi = {
  popular: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_MOVIE_URL}/popular?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  nowPlaying: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_MOVIE_URL}/now_playing?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  topRated: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_MOVIE_URL}/top_rated?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  upcoming: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_MOVIE_URL}/upcoming?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  detail: async (id) => {
    return await fetch(
      `${process.env.REACT_APP_MOVIE_URL}/${id}?${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_VIDEOS}`
    ).then((res) => res.json());
  },
  search: async (term) => {
    const { results } = await fetch(
      `${process.env.REACT_APP_SEARCH_URL}/movie?${process.env.REACT_APP_API_KEY}&query=${term}`
    ).then((res) => res.json());
    return results;
  },
};

export const tvApi = {
  topRated: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_TV_URL}/top_rated?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  popular: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_TV_URL}/popular?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  airingToday: async () => {
    const { results } = await fetch(
      `${process.env.REACT_APP_TV_URL}/airing_today?${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return results;
  },
  detail: async (id) => {
    return await fetch(
      `${process.env.REACT_APP_TV_URL}/${id}?${process.env.REACT_APP_API_KEY}&${process.env.REACT_APP_VIDEOS}`
    ).then((res) => res.json());
  },
  search: async (term) => {
    const { results } = await fetch(
      `${process.env.REACT_APP_SEARCH_URL}/tv?${process.env.REACT_APP_API_KEY}&query=${term}`
    ).then((res) => res.json());
    return results;
  },
};
