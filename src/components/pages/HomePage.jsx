import { TrendingList } from 'components/TrendingList/TrendingList'
import React, { useState } from 'react'
import { getMovieCredits, getMovieDetails, getMovieReviews, getTrendingMovies, searchMovies } from 'services/tmdbAPI'
import { Container, Section } from './HomePage.styled'

export const HomePage = () => {
  const [filmId, setfilmId] = useState(null)

  return (
    <Section>
      <Container>
        <h2>Trending today:</h2>
        <TrendingList/>
      </Container>
    </Section>
  )
}

