import { List } from '@mui/material'
import { TrendingItem } from 'components/TrendingItem/TrendingItem'
import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from 'services/tmdbAPI'

export const TrendingList = () => {
    const [trendingList, setTrendingList] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingList(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [])

  console.log(trendingList);
  
  return (
    <List>
      {trendingList.map(({title, name, overview, id, release_date, poster_path}, index)=> (
        <TrendingItem key={id} title={title || name} overview={overview} release={release_date} poster_path={poster_path} rate={index} />
      ))}
    </List>
  )
}
