const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = import.meta.env.VITE_TMDB_API_URL;

export const getMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
};

// Fetch trailers/videos for a specific movie
export const getMovieVideos = async (movieId) => {
    try {
        const response = await fetch(`${API_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results; // contains trailers, teasers, clips
    } catch (error) {
        console.error("Error fetching movie videos:", error);
        return [];
    }
};
