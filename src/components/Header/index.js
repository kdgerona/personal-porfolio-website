import React from 'react'
import { HeaderContainer, HeaderNav } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNav href='#home'>HOME</HeaderNav>
            <HeaderNav href='#about'>ABOUT</HeaderNav>
            <HeaderNav href='#skills'>SKILLS</HeaderNav>
            <HeaderNav href='#portfolio'>PORTFOLIO</HeaderNav>
        </HeaderContainer>
    )
}

export default Header