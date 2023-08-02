import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React from 'react';



export const TrendingItem = ({title, rate, overview, release, poster_path }) => {
const poster = `https://image.tmdb.org/t/p/w200/${poster_path}`
  return (
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={poster} />
      </ListItemAvatar>
      <a href="/">
          <ListItemText
        primary={`#${rate+1} ${title}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {release ? `Release: ${release}`: ''} 
              </Typography>
              {` ${overview}`}

            </React.Fragment>
          }
      />
      </a>
    </ListItem>

  )
}
