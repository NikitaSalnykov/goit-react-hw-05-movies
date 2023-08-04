import { Link, useLocation } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ReadMore, TrendingOverlay } from './TrendingItem.styled';
import PropTypes from 'prop-types';


export const TrendingItem = ({
  title,
  rate,
  overview,
  release,
  poster_path,
  id,
}) => {

  const location = useLocation();
  
  const shortenedOverview = (overview) => {
    return overview.length > 240
      ? overview.split(' ').slice(0, 40).join(' ') + '...'
      : overview
  }

  return (
    <TrendingOverlay>
       <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={title}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w200/${poster_path}`
              : 'https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
          }
        />
      </ListItemAvatar>
      <Link to={`/movies/${id}`} state={location}>
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
  {` ${shortenedOverview(overview)}`}
             {overview.length > 240 && (
                <ReadMore>Read more</ReadMore>
              )}
            </React.Fragment>
          }
        />
      </Link>
    </ListItem>
   </TrendingOverlay>
  );
};

TrendingItem.propTypes = {
  title: PropTypes.string.isRequired,
  rate: PropTypes.number,
  overview: PropTypes.string.isRequired,
  release: PropTypes.string,
  poster_path: PropTypes.string,
  id: PropTypes.number.isRequired,
};