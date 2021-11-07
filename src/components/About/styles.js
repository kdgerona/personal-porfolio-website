import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const AboutContainer = styled.div`
    display: flex;
    background-color: #000524;
    padding: 5% 10%;
    overflow: hidden;
`

export const ProfileSection = styled.div`
    width: 100%;
    flex-shrink: 2;
`

export const ImageContainer = styled.div`
    height: 40%;
    width: 100%;
`

export const ImageProfile = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100%;
`

export const DetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    width: 100%;

    .highlight {
        background-color: yellow;
        color: black;
        padding: 0 1%;
    }
`

export const AboutHeading = styled.h2`
    color: white;
`

export const AboutContent = styled.p`
    color: #ccc;
    text-align: justify;
    margin: 1% 0;
    line-height: 30px;
`

export const DownloadResumeLink = styled.a`
    color: #ccc;
    margin: 2% 0;
    line-height: 30px;
    width: 30%;
    background-color: darkgreen;
    text-decoration: none;
`

export const DownloadResumeIcon = styled(FontAwesomeIcon)`
    padding-right: 5%;
`