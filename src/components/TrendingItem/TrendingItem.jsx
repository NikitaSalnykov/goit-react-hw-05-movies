import { Link, useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';

export const TrendingItem = ({
  title,
  rate,
  overview,
  release,
  poster_path,
  id,
}) => {
  const location = useLocation();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={title}
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
        />
      </ListItemAvatar>
      <Link to={`movies/${id}`} state={location}>
        <ListItemText
          primary={rate + 1 ? `#${rate + 1} ${title}` : `${title}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {release ? `Release: ${release}` : ''}
              </Typography>
              {` ${overview}`}
            </React.Fragment>
          }
        />
      </Link>
    </ListItem>
  );
};
