import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0D0D0D;
    padding: 3% 10%;
`

export const SocialLinkIconContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5%;

    a {
        padding: 0% 2%;
    }

    .facebook-icon {
        :hover {
            color: #3b5998;
            font-size: 2em;
        }
    }

    .linkedin-icon {
        :hover {
            color: #0072b1;
            font-size: 2em;
        }
    }

    .github-icon {
        :hover {
            color: #F0F6FC;
            font-size: 2em;
        }
    }
`

export const Link = styled.a``

export const SocialLinkIcon = styled(FontAwesomeIcon)`
    color: #303030;
    font-size: 1.8em;
`
export const NavigateUpIcon = styled(FontAwesomeIcon)`
    color: whitesmoke;
    font-size: 2.5em;

    :hover {
        color: blue;
    }
`

export const CopyrightFullText = styled.p`
    color: #303030;
    font-size: 14px;
    margin: 0;
`