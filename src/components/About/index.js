import React from 'react'
import ProfileImage from '../../assets/images/profile.jpg'
import { 
    AboutContainer,
    ProfileSection,
    DetailsSection,
    ImageContainer,
    ImageProfile,
    AboutHeading,
    AboutContent,
 } from './styles'

const About = () => {
    return (
        <AboutContainer id='about'>
            <ProfileSection>
                <ImageContainer>
                    <ImageProfile src={ProfileImage} alt='profile' />
                </ImageContainer>
            </ProfileSection>
            <DetailsSection>
                <AboutHeading>About Me</AboutHeading>
                <AboutContent>
                Hello there! I am Kevin Dave Gerona a Front-End Software Engineer. I have progressive work and experience in the industry as a professional, contributing my skills and academic knowledge. Managed and multitasking different kinds of projects handling both Frontend and Backend Development as well as can work on Cross Platform Development. Gained knowledge, standards and new technologies through work experiences.
                </AboutContent>
                <AboutHeading>Contact Details</AboutHeading>
                <AboutContent>Kevin Dave Gerona</AboutContent>
                <AboutContent>Zamora St. Centro</AboutContent>
                <AboutContent>Mandaue City Philippines, 6014</AboutContent>
                <AboutContent>+639557262300</AboutContent>
                <AboutContent>kevindavegerona@gmail.com</AboutContent>
            </DetailsSection>
        </AboutContainer>
    )
}

export default About