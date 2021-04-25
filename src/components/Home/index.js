import React from 'react'
import ParticlesBg from 'particles-bg'
import { 
    HomeContainer,
    Name,
    Introduction,
    HorizontalDivider
} from './styles'

const Home = () => {
    return (
        <>
        <ParticlesBg type='polygon' color='#ff0000' bg={true}/>
        <HomeContainer>
            <Name>Kevin Dave Gerona</Name>
            <Introduction>I am a Front-End Software Engineer and I use ReactJS for web applications and Flutter for mobile applications. This project is my personal portfolio.</Introduction>
            <HorizontalDivider />
        </HomeContainer>
        </>
    )
}

export default Home