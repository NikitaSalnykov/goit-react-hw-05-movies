import { List } from '@mui/material';
import { TrendingItem } from 'components/TrendingItem/TrendingItem';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/tmdbAPI';
import { Loader } from 'components/Loader/Loader';

export const TrendingList = () => {
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
    <List>
      {isLoading && <Loader />}
      {notFoundText ? (
        <p>Oops, something went wrong, there is no connection to the server</p>
      ) : (
        trendingList.map(
          ({ title, name, overview, id, release_date, poster_path='https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'}, index) => (
            <TrendingItem
              key={id}
              title={title || name}
              overview={overview}
              release={release_date}
              poster_path={poster_path}
              rate={index}
              id={id}
            />
          )
        )
      )}
    </List>
  );
};
