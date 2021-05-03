import React from 'react'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { 
    FooterContainer,
    NavigateUpIcon,
    SocialLinkIconContainer,
    Link,
    SocialLinkIcon,
    CopyrightFullText
 } from './styles'

const Footer = () => {
    const current_year = new Date().getFullYear()

    return (
        <FooterContainer>
            <Link href='#home'><NavigateUpIcon icon={faChevronCircleUp}></NavigateUpIcon></Link>
            <SocialLinkIconContainer>
                <Link href='https://www.facebook.com/KevinDaveGerona' target='_blank'><SocialLinkIcon className='facebook-icon' icon={faFacebookF} /></Link>
                <Link href='https://www.linkedin.com/in/kevindavegerona' target='_blank'><SocialLinkIcon className='linkedin-icon' icon={faLinkedinIn} /></Link>
                <Link href='https://github.com/kdgerona' target='_blank'><SocialLinkIcon className='github-icon' icon={faGithub} /></Link>
            </SocialLinkIconContainer>
            <CopyrightFullText>© Copyright {current_year} | Kevin Dave Gerona</CopyrightFullText>
        </FooterContainer>
    )
}

export default Footer