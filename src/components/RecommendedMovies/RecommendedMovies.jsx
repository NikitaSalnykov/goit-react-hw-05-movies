import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { recommendedMovies } from 'services/tmdbAPI';
import {
  BigImage,
  MovieItem,
  MoviesContainer,
  MovieTitle,
} from './RecommendedMovies.styled';

export const RecommendedMovies = () => {
  const location = useLocation();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommendedArray = [
          'princess mononoke',
          'La La Land',
          'Calvary',
          'Blade Runner 2049',
          'The Grand Budapest Hotel',
          'Gayniggers from Outer Space',
        ];
        const recommendedData = [];
        for (const film of recommendedArray) {
          console.log(film);
          const response = await recommendedMovies(film);
          recommendedData.push(response);
        }
        setRecommended(recommendedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MoviesContainer>
      {recommended.map((movie, index) => (
        <MovieItem key={index}>
          <BigImage
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
            }
            alt={movie.title}
          />
          <MovieTitle>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}{' '}
              {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
            </Link>
          </MovieTitle>
        </MovieItem>
      ))}
    </MoviesContainer>
  );
};
