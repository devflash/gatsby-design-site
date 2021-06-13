import React from 'react';
import { css } from '@emotion/react';
import Title from '../title';
import { StaticImage } from 'gatsby-plugin-image';
import Categories from './categories';

const wrapper = css`
    width: 90vw;
    margin: 4rem auto 0;
    max-width: var(--max-width);
    display: grid;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
    gap: 2rem;
`;

const greyBackground = css`
    background-color: var(--clr-grey-10);
`;

const projectImage = css`
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
`;

const card = css`
    position: relative;
    &:hover > div{
        opacity: .8;
    }
    `;
    
    const info = css`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--clr-white);
    background-color: var(--clr-primary-7);
    opacity: 0;
    transition: var(--transition);
    p{
        color: var(--clr-white);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
`;

const card0 = css`
    @media screen and (min-width: 1200px){
        grid-area: a
    }
`;
const card1 = css`
    @media screen and (min-width: 1200px){
        grid-area: b
    }
`;
const card2 = css`
    @media screen and (min-width: 1200px){
        grid-area: c
    }
`;
const card3 = css`
    @media screen and (min-width: 1200px){
        grid-area: d
    }
`;


const Projects = ({titleText, showCategories, gridDynamic=false, gridCustomCss}) => (
    <section css={greyBackground}>
        <Title titleText={titleText}/>
        {showCategories && <Categories />}
        <div css={[wrapper, gridCustomCss]}>
            <article css={[card, gridDynamic && card0]}>
                <StaticImage 
                    src="../../images/temp-images/kitchen-1.png"
                    alt="kitchen-1"
                    layout="constrained"
                    css={projectImage}
                />
                <div css={info}>
                    <p>- Kitchen -</p>
                    <h3>Modern kitchen</h3>
                </div>
            </article>
            <article css={[card, gridDynamic && card1]}>
                <StaticImage 
                    src="../../images/temp-images/bathroom-1.png"
                    alt="kitchen-1"
                    layout="constrained"
                    css={projectImage}
                />
                <div css={info}>
                    <p>- bathroom -</p>
                    <h3>Outside bathroom</h3>
                </div>
            </article>
            <article css={[card, gridDynamic && card2]}>
                <StaticImage 
                    src="../../images/temp-images/bedroom-1.png"
                    alt="kitchen-1"
                    layout="constrained"
                    css={projectImage}
                />
                <div css={info}>
                    <p>- bedroom -</p>
                    <h3>Comfy Bedroom</h3>
                </div>
            </article>
            <article css={[card, gridDynamic && card3]}>
                <StaticImage 
                    src="../../images/temp-images/kitchen-1.png"
                    alt="kitchen-1"
                    layout="constrained"
                    css={projectImage} 
                />
                <div css={info}>
                    <p>- Kitchen -</p>
                    <h3>Modern kitchen</h3>
                </div>
            </article>
        </div>
    </section>
);


export default Projects;