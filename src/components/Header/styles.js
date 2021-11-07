import styled from 'styled-components'

export const HeaderContainer = styled.div`
    /* display: flex; */
    display: ${props => props.show ? 'flex' : 'none' };
    background-color: ${props => props.active ? '#333' : 'transparent' };
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
`
export const HeaderNav = styled.a`
    color: white;
    text-decoration: none;
    padding: 10px;
    font-weight: bold;

    :hover {
        color: #fe6928;
    }
`