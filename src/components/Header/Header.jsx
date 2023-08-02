import { Container } from '@mui/material';
import React from 'react'
import { NavLink} from "react-router-dom";
import { CustomHeader } from './Header.styled'

const Header = () => {
  return (
    <CustomHeader>
      <Container>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        </nav>
        </Container>
    </CustomHeader>
  )
}

export default Header