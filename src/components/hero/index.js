import React from 'react';
import {css} from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';
import {Link} from 'gatsby';

const wrapper = css`
    position: relative;
    z-index: 100;
    margin-top: -5rem;
`;

const heroImg = css`
    height: 100vh;
`;

const heroText = css`
    text-align: center;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    color: var(--clr-white);
    background-color: rgba(0,0,0,0.5);
    h1{
        text-transform: uppercase;
        font-weight: 500;
        line-height: 1.25;
        margin: 2rem 0 3rem;
        letter-spacing: 3px;
        @media screen and (min-width: 800px){
            letter-spacing: 5px;
        }
    }
    h3{
        font-family: Caveat, cursive;
        font-weight: 400; 
    }
`;

const heroBtn = css`
    border: 2px solid var(--clr-white);
    font-size: 1rem;
    color: var(--clr-white);
    letter-spacing: 5px;
    transition: all .5s ease;
    padding: 0.25rem 1rem;
    &:hover{
        background-color: var(--clr-white);
        color: var(--clr-black)
    }
    @media screen and (min-width: 800px){
        padding: 0.5rem 1.25rem;
        font-size: 1.25rem;
    }
`;

const content = css`
    width: 80vw;
    max-width: 800px;
`;



const Hero = () => (
    <div css={wrapper}>
        <StaticImage 
            src="../../images/mainBcg.png" 
            alt="hero image" 
            layout="fullWidth"
            placeholder="blurred"
            css={heroImg}
        />
        
        <div css={heroText}>
            <div css={content}>
                <h3>If you can dream it, we can create it</h3>
                <h1>let your home be inique and stylish</h1>
                <Link to="/projects" css={heroBtn}>Projects</Link>
            </div>
        </div>
    </div>
)


export default Hero;