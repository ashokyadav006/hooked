import React from 'react';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

  const Movie = ({ movie }) => {
    const poster = movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    return (
        <a className="movie" href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank">
            <h2>{movie.Title}</h2>
            <div>
                <img
                    width="200px"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}
                />
            </div>
            <p>{movie.Year}</p>
        </a>
    );
  }

  export default Movie;