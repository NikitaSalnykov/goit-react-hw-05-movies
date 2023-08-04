import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/tmdbAPI';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { ListCast } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();
  const [notFoundText, setNotFoundText] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieCredits(`${params.id}`);
        if (response.cast.length === 0) setNotFoundText(true);
        setCast(response.cast);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <ListCast>
      {notFoundText ? (
        <p>We don`t have any information about cast for this movie</p>
      ) : (
        cast.map(el => (
          <ListItem alignItems="flex-start" key={el.id}>
            <ListItemAvatar>
              <Avatar
                alt={`${el.name}`}
                src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${el.name}`}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {el.character}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        ))
      )}
    </ListCast>
  );
};
