import React from 'react';
import {css} from '@emotion/react';
import Title from '../title';
import { FaVoteYea } from 'react-icons/fa'

const wrapper = css`
    width: 90vw;
    margin: 4rem auto 0;
    max-width: var(--max-width);  
    h3{
        text-align: center;
        color: var(--clr-grey-5);
        margin-bottom: 4rem;
    }  
`;

const surveyCon = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const survey = css`
    background-color: var(--clr-grey-10);
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    flex-basis: 100%;
    @media screen and (min-width: 992px){
        flex-basis: 48%;
    }
    @media screen and (min-width: 1200px){
        flex-basis: 31.33%;
    }
`;

const key = css`
    background-color: var(--clr-primary-7);
    color: var(--clr-white);
    font-size: 24px;
    padding: 8px 16px;
    border-radius: 5px;
`;

const surveybtn = css`
    background-color: transparent;
    outline: 0;
    border: 0;
    color: var(--clr-black);
    font-size: 32px;
`;

const surveyInfo = css`
    h4{
        font-size: 14px;
        color: var(--clr-black);
        display: block;
        margin: 0;
    }
    p {
        font-size: 14px;
        color: var(--clr-grey-5);
        margin: 0;
    }
`;



const Survey = () => (
    <section>
        <Title titleText="Survey"/>
        <div css={wrapper}>
            <h3>Most important Room in the house</h3>
            <ul css={surveyCon}>
                <li css={survey}>
                    <div css={key}>BA</div>
                    <div css={surveyInfo}>
                        <h4>Bathroom</h4>
                        <p>1581 votes</p>
                    </div>
                    <button css={surveybtn}>
                        <FaVoteYea/>
                    </button>
                </li>
                <li css={survey}>
                    <div css={key}>K</div>
                    <div css={surveyInfo}>
                        <h4>Kitchen</h4>
                        <p>1581 votes</p>
                    </div>
                    <button css={surveybtn}>
                        <FaVoteYea/>
                    </button>
                </li>
                <li css={survey}>
                    <div css={key}>BE</div>
                    <div css={surveyInfo}>
                        <h4>Bedroom</h4>
                        <p>1581 votes</p>
                    </div>
                    <button css={surveybtn}>
                        <FaVoteYea/>
                    </button>
                </li>
            </ul>
        </div>
    </section>
);


export default Survey;