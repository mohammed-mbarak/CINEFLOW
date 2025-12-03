import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { searchMovies, getMovies } from '../services/api';
import '../css/Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load popular movies initially
    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                console.error(error);
                setError('An error occurred while fetching movies');
            } finally {
                setLoading(false);
            }
        };
        loadMovies();
    }, []);

    // Fetch live search suggestions as user types
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!searchQuery.trim()) {
                setSuggestions([]);
                return;
            }
            try {
                const data = await searchMovies(searchQuery);
                setSuggestions(data.slice(0, 5)); // top 5 suggestions
            } catch (error) {
                console.error(error);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 300); // debounce
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim() || loading) return;

        setLoading(true);
        try {
            const data = await searchMovies(searchQuery);
            setMovies(data);
            setError(data.length === 0 ? 'No movies found' : null);
            setSuggestions([]);
        } catch (error) {
            console.error(error);
            setError('An error occurred while searching for movies');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for movies...' 
                    className='search-input' 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                />
                <button type='submit' className='search-button'>Search</button>

                {suggestions.length > 0 && (
                    <ul className="suggestions-list">
                        {suggestions.map(movie => (
                            <li 
                                key={movie.id} 
                                onClick={() => {
                                    setSearchQuery(movie.title);
                                    setSuggestions([]);
                                }}
                            >
                                {movie.title}
                            </li>
                        ))}
                    </ul>
                )}
            </form>

            {error && <div className='error-message'>{error}</div>}

            {loading ? ( 
                <div className='loading'>Loading...</div> 
            ) : ( 
                <div className='movies-grid'>
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
