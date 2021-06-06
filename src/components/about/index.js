import React from 'react';
import {css} from '@emotion/react';
import {GiCompass, GiDiamondHard, GiStabbedNote, GiBriefcase} from 'react-icons/gi';
import Title from '../title';

const wrapper = css`
    width: 90vw;
    margin: 4rem auto 0;
    max-width: var(--max-width);
    @media screen and (min-width: 800px){
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const icon = css`
    font-size: 4rem;
    color: var(--clr-primary-5);
    margin-bottom: 1rem;
`;

const card = css`
    margin-bottom: 4rem;
    h4{
        font-weight: 500;
        text-transform: uppercase;
    }
    p{
        color: var(--clr-grey-3);
    }
    @media screen and (min-width: 800px){
        flex: 0 1 calc(50% - 1rem);
    }
`;


const About = () => (
    <section>
        <Title titleText="About Us"/>
        <div css={wrapper}>
        <article css={card}>
            <GiCompass css={icon}/>
            <h4>Mission</h4>
            <p> Activated charcoal post-ironic unicorn flexitarian tumeric, direct trade man bun mumblecore kickstarter art party.</p>
        </article>
        <article css={card}>
            <GiDiamondHard css={icon}/>
            <h4>Vision</h4>
            <p>Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on</p>
        </article>
        <article css={card}>
            <GiStabbedNote css={icon}/>
            <h4>History</h4>
            <p>Chia pinterest locavore letterpress tote bag. Subway tile PBR&B knausgaard locavore quinoa four loko disrupt photo booth hella.</p>
        </article>
        <article css={card}>
            <GiBriefcase css={icon}/>
            <h4>Work</h4>
            <p>Man braid banh mi prism disrupt hella cray mlkshk jean shorts typewriter synth salvia direct trade pabst knausgaard.</p>
        </article>

        </div>
    </section>
);

export default About;