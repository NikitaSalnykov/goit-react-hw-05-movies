import { useEffect, useState } from 'react';
import { recommendedMovies } from 'services/tmdbAPI';
import {
  BigImage,
  MediumImage,
  MovieItem,
  MovieTitle,
  MoviesContainer,
  SmallImage,
} from './RecommendedMovies.styled';

export const RecommendedMovies = () => {
  const [recommended, setRecommended] = useState([]);
  const recommendedArray = ['Terminator', 'Lion', 'Class', 'Non', 'XXX'];

  useEffect(() => {
    const fetchData = async () => {
      try {
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
        <MovieItem key={index} isBig={index === 0}>
          {index === 0 ? (
            <BigImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
                  : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
              }
              alt={movie.title}
            />
          ) : index % 2 === 1 ? (
            <MediumImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
              }
              alt={movie.title}
            />
          ) : (
            <SmallImage
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
              }
              alt={movie.title}
            />
          )}
          <MovieTitle>{movie.title}</MovieTitle>
        </MovieItem>
      ))}
    </MoviesContainer>
  );
};
