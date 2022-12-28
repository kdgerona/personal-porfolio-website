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
    SpanBold
} from './styles'

const Home = () => {
    return (
        <>
        <ParticlesBg type='polygon' color='#ff0000' bg={true}/>
        <HomeContainer id='home'>
            <Name>Kevin Dave Gerona</Name>
            <Introduction>I am a <SpanBold>Full Stack Developer</SpanBold> and I'm divergent in different technologies. Welcome to my domain of the internet. Let's start building!</Introduction>
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