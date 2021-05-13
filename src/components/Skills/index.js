import React from 'react';

// import * as techs from '../../assets/images/technology-logo/*.png'

import { SkillsContainer, HeadingText, LogoContainer, LogoImg } from './styles';

const importAll = (r) =>
  r.keys().map((filename) => ({
    filename,
    static_path: r(filename).default,
  }));

const images = importAll(
  require.context(
    '../../assets/images/technology-logo',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

console.log(images[0]);

const Skills = () => {
  return (
    <SkillsContainer id='skills'>
      <HeadingText>Skills and technologies used ...</HeadingText>
      <LogoContainer>
        {images.map((image) => (
          <div
            style={{
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              margin: '12px',
            }}
          >
            <LogoImg src={image.static_path} alt={image.filename} />
          </div>
        ))}
      </LogoContainer>
    </SkillsContainer>
  );
};

export default Skills;
