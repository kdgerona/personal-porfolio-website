import React from 'react'
import { HeaderContainer, HeaderNav } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderNav href='#home'>HOME</HeaderNav>
            <HeaderNav href='#about'>ABOUT</HeaderNav>
            <HeaderNav href='#resume'>RESUME</HeaderNav>
            <HeaderNav href='#contact'>CONTACT</HeaderNav>
        </HeaderContainer>
    )
}

export default Header