import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/tmdbAPI';
import { DivContainer, Section } from './HomePage.styled';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { Button, List, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormSearch } from 'components/MovieDateils/MovieDateils.styled';
import { Loader } from 'components/Loader/Loader';
import { LoaderForm } from './MoviePage.styled';

export const MoviesPage = () => {
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('query');
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notFoundText, setNotFoundText] = useState(false);
  const prevValueRef = useRef('');

  const search = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await searchMovies(search);
        prevValueRef.current = value;
        setIsLoading(true);
        setFilms(response.results);
        setNotFoundText(false);
        if (films && response.results.length === 0) {
          setIsLoading(false);
          setFilms(null);
          return toast.error(`'${value}' not found`, {
            autoClose: 3500,
            hideProgressBar: false,
            theme: 'dark',
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setNotFoundText(true);
        setFilms(null);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);
  дело;

  const handleSearch = e => {
    e.preventDefault();
    console.log(setSearchParams);

    setSearchParams({ query: value });
    setIsLoading(true);
    if (prevValueRef.current === value) {
      if (value === '') toast.info('Enter movie title to search');
      return setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
  };

  return (
    <Section>
      <DivContainer>
        <FormSearch onSubmit={handleSearch} style={{ position: 'relative' }}>
          <TextField
            fullWidth
            label="Search movie"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          {isLoading && (
            <LoaderForm>
              <Loader style={{ height: 20, width: 20 }} />
            </LoaderForm>
          )}
          <Button
            variant="contained"
            size="large"
            type="submit"
            id="fullWidth"
            style={{ backgroundColor: 'orange', color: 'black' }}
          >
            Search
          </Button>
        </FormSearch>
        <List>
          {notFoundText ? (
            <p>
              Oops, something went wrong, there is no connection to the server
            </p>
          ) : films != null && films.length > 0 ? (
            films.map(
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
            )
          ) : (
            <p>Enter movie title to search</p>
          )}
        </List>
        <ToastContainer />
      </DivContainer>
    </Section>
  );
};
