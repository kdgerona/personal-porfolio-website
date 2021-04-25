import React from 'react'
import { HeaderContainer, HeaderNav } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNav href='#home'>Home</HeaderNav>
            <HeaderNav href='#home'>About</HeaderNav>
            <HeaderNav href='#home'>Resume</HeaderNav>
            <HeaderNav href='#home'>Contact</HeaderNav>
        </HeaderContainer>
    )
}

export default Header