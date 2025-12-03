import React, { useState } from 'react';
import { useMovieContext } from '../contexts/MovieContext';
import { getMovieVideos } from '../services/api';
import '../css/MovieCard.css';

const MovieCard = ({ movie }) => {
    const { addFavorite, removeFavorite, isFavorite } = useMovieContext();
    const isFav = isFavorite(movie);

    const [trailerUrl, setTrailerUrl] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFavorite = (e) => {
        e.preventDefault();
        if (isFav) removeFavorite(movie);
        else addFavorite(movie);
    };

    const handleWatchTrailer = async () => {
        try {
            const videos = await getMovieVideos(movie.id);
            const youtubeTrailer = videos.find(video => video.site === "YouTube" && video.type === "Trailer");
            if (youtubeTrailer) {
                setTrailerUrl(`https://www.youtube.com/watch?v=${youtubeTrailer.key}`);
                setIsModalOpen(true);
            } else {
                alert("Trailer not available");
            }
        } catch (err) {
            console.error(err);
            alert("Error fetching trailer");
        }
    };

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className='movie-overlay'>
                    <button className={`favorite-btn ${isFav ? "active" : ""}`} onClick={handleFavorite}>❤</button>
                    <button className='trailer-btn' onClick={handleWatchTrailer}>▶ Trailer</button>
                </div>
            </div>
            <div className='movie-info'>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${trailerUrl.split("v=")[1]}`}
                            title={movie.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieCard;
