import React from 'react';
import {css} from '@emotion/react';

const footer = css`
    background-color: var(--clr-black);
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        color: var(--clr-white);
        margin: 0;
    }
    a:active{
        color: rgb(85, 26, 139);
    }
`;

const Footer = () => (
    <div css={footer}>
        <p>&copy; Design Site Built With <a href="https://www.gatsbyjs.com/">Gatsby</a></p>
    </div>
)

export default Footer;