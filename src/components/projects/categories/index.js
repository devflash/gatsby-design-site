import React, { useState } from 'react';
import { css } from '@emotion/react';

const wrapper = css`
    width: 90vw;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;
`;

const category = css`
    padding: 0 5px;
    position: relative;
    button{
        font-size: 1rem;
        color: var(--clr-grey-6);
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

const underline = css`
    position: absolute;
    height: 1px;
    background-color: var(--clr-grey-6);
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: all 1s ease;
    margin: 0 auto;
`;

const active = css`
    width: 100%;
`;

const Categories = () => {
    const [state, setState] = useState(0);
    return (
    <ul css={wrapper}>
        <li css={category}>
            <button onClick={() => setState(0)}>All</button>
            <div css={[underline, state === 0 ? active : null]}></div>
        </li>
        <li css={category}>
            <button onClick={() => setState(1)}>Bedroom</button>
            <div css={[underline, state === 1 && active]}></div>
        </li>
        <li css={category}>
            <button onClick={() => setState(2)}>Kitchen</button>
            <div css={[underline, state === 2 && active]}></div>
        </li>
        <li css={category}>
            <button onClick={() => setState(3)}>Bathroom</button>
            <div css={[underline, state === 3 && active]}></div>
        </li>
    </ul>
)}

export default Categories;