import styled from 'styled-components'

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    background-color: transparent;
    justify-content: center;
    align-items: center;
`

export const Name = styled.h1`
    font-size: 5em;
    color: white;
    margin: 0;
`
export const Introduction = styled.p`
    color: white;
    padding: 0 20% 0 20%;
`
export const HorizontalDivider = styled.hr`
    width: 40%;
    margin: 18px auto 24px auto;
    border-color: #2F2D2E;
    border-color: rgba(150, 150, 150, .1);
`