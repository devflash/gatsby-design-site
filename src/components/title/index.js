import React from 'react';
import { css } from '@emotion/react';

const title = css`
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        font-size: 1.8rem;
        color: var(--clr-primary-5);
        margin-right: 1rem;
        font-weight: 700;
    }
    h2{
        font-weight: 500;
        margin:0;
    }
`;

const Title = ({titleText}) => (
    <div css={title}>
        <span>/</span>
        <h2>{titleText}</h2>
    </div>
    );

export default Title;