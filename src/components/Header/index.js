import React, { useState, useEffect } from 'react'
import { HeaderContainer, HeaderNav } from './styles'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [show, setShow] = useState(true)

    useEffect(() => {
        const scrollEventHandler = () => {
            // window.scrollY >= 20 ? setScrolled(true) : setScrolled(false)

            if(window.scrollY <= 10){
                setShow(true)
                setScrolled(false)
            } else if(window.scrollY <= 650){
                setShow(false)
            }
            else {
                setShow(true)
                setScrolled(true)
            }

            console.log(window.scrollY)
        }

        window.addEventListener('scroll', scrollEventHandler)

        return () => {
            window.removeEventListener('scroll', scrollEventHandler)
        }
    }, [])

    return (
        <HeaderContainer active={scrolled} show={show}>
            <HeaderNav href='#home'>HOME</HeaderNav>
            <HeaderNav href='#about'>ABOUT</HeaderNav>
            <HeaderNav href='#skills'>SKILLS</HeaderNav>
            <HeaderNav href='#portfolio'>PORTFOLIO</HeaderNav>
        </HeaderContainer>
    )
}

export default Header