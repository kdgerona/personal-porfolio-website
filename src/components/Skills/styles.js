import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #fff;
  padding: 5% 10%;
`;

export const HeadingText = styled.h2`
  margin: 0;
  font-style: italic;
  padding-bottom: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  -webkit-transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  -moz-transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  -o-transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    cursor: pointer;
    transform: scale(1.25);
    -webkit-transform: scale(1.25);
    -moz-transform: scale(1.25);
    -o-transform: scale(1.25);
  }
`;
