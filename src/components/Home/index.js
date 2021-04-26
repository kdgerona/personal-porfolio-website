import React from 'react'
import ParticlesBg from 'particles-bg'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { 
    HomeContainer,
    Name,
    Introduction,
    HorizontalDivider,
    SocialContainer,
    SocialLinkButton,
    ScrollDownContainer,
    ScrollDownButtonLink,
    ScrollDownButtonIcon,
    SocialLinkIcon,
} from './styles'

const Home = () => {
    return (
        <>
        <ParticlesBg type='polygon' color='#ff0000' bg={true}/>
        <HomeContainer id='home'>
            <Name>Kevin Dave Gerona</Name>
            <Introduction>I am a Front-End Software Engineer and I use ReactJS for web applications and Flutter for mobile applications. This project is my personal portfolio.</Introduction>
            <HorizontalDivider />
            <SocialContainer>
                <SocialLinkButton href='https://www.linkedin.com/in/kevindavegerona' target="_blank"><SocialLinkIcon icon={faLinkedinIn} />LinkedIn</SocialLinkButton>
                <SocialLinkButton href='https://github.com/kdgerona' target="_blank"><SocialLinkIcon icon={faGithub} />Github</SocialLinkButton>
            </SocialContainer>
            <ScrollDownContainer>
                <ScrollDownButtonLink href='#about'>
                    <ScrollDownButtonIcon icon={faChevronCircleDown} />
                </ScrollDownButtonLink>
            </ScrollDownContainer>
        </HomeContainer>
        </>
    )
}

export default Home