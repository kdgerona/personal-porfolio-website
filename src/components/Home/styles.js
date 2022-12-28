import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`

export const Name = styled.h1`
    font-size: calc(100% + 6vw);
    color: white;
    margin: 0;
`
export const Introduction = styled.p`
    font-size: calc(100% + .5vw);
    color: white;
    padding: 0 25% 0 25%;
`
export const HorizontalDivider = styled.hr`
    width: 40%;
    margin: 18px auto 24px auto;
    border-color: #2F2D2E;
    border-color: rgba(150, 150, 150, .1);
`
export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const SocialLinkButton = styled.a`
    display: flex;
    align-items: center;
    background-color: #34495e;
    color: white;
    padding: 15%;
    margin: 10%;
    font-weight: bold;
    text-decoration: none;

    border: 1px solid #34495e;
    border-radius: 10px;
`

export const SocialLinkIcon = styled(FontAwesomeIcon)`
    padding-right: 5%;
`

export const ScrollDownContainer = styled.div`
    position: absolute;
    bottom: 0;
`

export const ScrollDownButtonLink = styled.a``

export const ScrollDownButtonIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 2.5em;
    padding: 100% 0;

    :hover {
        color: blue;
    }
`

export const SpanBold = styled.span`
    font-size: calc(100% + .5vw);
    color: white;
    font-weight: 900;
`