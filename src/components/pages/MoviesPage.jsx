import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/tmdbAPI';
import { Section } from './HomePage.styled';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';

export const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const [films, setFilms] = useState([]);
  const search = searchParams.get('value') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      const response = await searchMovies(search.trim());
      setFilms(response.results);
    };
    fetchData();
  }, [search]);

  console.log(films);

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ value });
  };

  return (
    <Section>
      <Container>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="search movie"
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {films.map(
            ({ title, name, overview, id, release_date, poster_path }) => (
              <TrendingItem
                key={id}
                title={title || name}
                overview={overview}
                release={release_date}
                poster_path={poster_path}
                id={id}
              />
            )
          )}
        </ul>
      </Container>
    </Section>
  );
};
