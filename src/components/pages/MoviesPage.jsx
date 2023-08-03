import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchMovies } from 'services/tmdbAPI'
import { Section } from './HomePage.styled'

export const MoviesPage = () => {
  const [value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams('')
  const [films, setFilms] = useState([])
  const search = searchParams.get('value') ?? '';
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await searchMovies(search.trim())
      return response
    }
    fetchData()
  }, [search])
  


  const handleSearch = () => {
    setSearchParams({value})
  }

  return (
    <Section>
      <Container>
        <input
        type="text"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
        placeholder='search movie'
      />
      <button onClick={handleSearch}>Search</button>
      </Container>
    </Section>
  )
}
