import { DivContainer } from 'components/pages/HomePage.styled';
import React from 'react'
import { Link, NavLink} from "react-router-dom";
import { CustomHeader } from './Header.styled'
import { SiThemoviedatabase } from 'react-icons/si';
const Header = () => {
  return (
    <CustomHeader>
      <DivContainer>
        <div style={{display: 'flex', alignItems: 'center', gap: 40}}>
          <Link  to='/'><SiThemoviedatabase style={{ width: 44, height: 44 }} /></Link>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
        </nav>    
        </div>
        </DivContainer>
    </CustomHeader>
  )
}

export default Header