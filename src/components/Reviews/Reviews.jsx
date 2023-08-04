import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/tmdbAPI';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListReviews } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [notFoundText, setNotFoundText] = useState(false);

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieReviews(`${params.id}`);
        if (response.results.length === 0) setNotFoundText(true);
        setReviews(response.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <ListReviews>
      {notFoundText ? (
        <p>We don`t have any information about cast for this movie</p>
      ) : (
        reviews.map(el => (
          <ListItem alignItems="flex-start" key={el.id}>
            <ListItemAvatar>
              <Avatar
                alt={`${el.author}`}
                src={`https://image.tmdb.org/t/p/w200/${el.author_details.avatar_path}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${el.author}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`Grade: ${el.author_details.rating}/10.  `}
                  </Typography>
                  {el.content}
                </React.Fragment>
              }
            />
          </ListItem>
        ))
      )}
    </ListReviews>
  );
};
