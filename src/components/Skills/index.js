import React from 'react'

// import * as techs from '../../assets/images/technology-logo/*.png'

import {
    SkillsContainer,
    HeadingText,
    LogoContainer,
    LogoImg,
} from './styles'

const importAll = (r) => r.keys().map(filename => ({
    filename,
    static_path: r(filename).default
}));

const images = importAll(require.context('../../assets/images/technology-logo', false, /\.(png|jpe?g|svg)$/));

const Skills = () => {
    return (
        <SkillsContainer id='skills'>
            <HeadingText>Skills and technologies used ...</HeadingText>
            <LogoContainer>
                {
                    images.map((image, index) => (<LogoImg key={index} src={image.static_path} alt={image.filename}/>))
                }
            </LogoContainer>
        </SkillsContainer>
    )
}

export default Skills