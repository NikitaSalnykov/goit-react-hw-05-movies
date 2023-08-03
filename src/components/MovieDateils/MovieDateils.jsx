import { Button } from '@mui/material';
import { DivContainer, Section } from 'components/pages/HomePage.styled';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/tmdbAPI';
import { ListInform, MovieContainer } from './MovieDateils.styled';

export const MovieDateils = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/movies');
  console.log(backLinkLocationRef);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const poster = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;

  return (
    <Section>
      <DivContainer>
        <Link to={backLinkLocationRef.current}>
          <Button
            variant="contained"
            style={{
              marginBottom: 20,
              backgroundColor: 'orange',
              color: 'black',
            }}
          >
            Back
          </Button>
        </Link>

        <MovieContainer>
          <img
            src={poster}
            alt={movie.title}
            loading="lazy"
            width={600}
            height={600}
          />
          <div>
            <h2>
              {movie.title}
              {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
            </h2>
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres &&
                movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)}
            </ul>
          </div>
        </MovieContainer>
        <div>
          <ListInform>
            <li>
              <NavLink to="cast">
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#b63810', color: 'white' }}
                >
                  Cast
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews">
                <Button
                  variant="contained"
                  style={{ backgroundColor: '#b63810', color: 'white' }}
                >
                  Reviews
                </Button>
              </NavLink>
            </li>
          </ListInform>
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </DivContainer>
    </Section>
  );
};
