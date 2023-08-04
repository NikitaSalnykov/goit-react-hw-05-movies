import { DivContainer, Section } from './HomePage.styled';
import { List } from '@mui/material';
import { MovieItems } from 'components/MovieItems/MovieItems';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trendingList, setTrendingList] = useState([]);
  const [notFoundText, setNotFoundText] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingList(response);
      } catch (error) {
        console.error('Error fetching data:', error);
        setNotFoundText(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section>
      <DivContainer>
        <h2>Trending today:</h2>
        <List>
          {isLoading && <Loader />}
          {notFoundText ? (
            <p>
              Oops, something went wrong, there is no connection to the server
            </p>
          ) : (
            <MovieItems array={trendingList} />
          )}
        </List>
      </DivContainer>
    </Section>
  );
};

export default HomePage;
