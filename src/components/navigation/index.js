import React from 'react';
import { Link } from 'gatsby';
import {css} from '@emotion/react';
import {StaticImage} from 'gatsby-plugin-image';
import { GoThreeBars } from "react-icons/go";
import './index.css';

const wrapper = css`
    height: 5rem;
    display: flex;
    align-items: center;
`;

const navCenter = css`
    display: flex;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`;

const logo = css`
    width: auto;
`;

const toggleBtn = css`
    width: 3.5rem;
    height: 2.25rem;
    font-size: 1.5rem;
    border-radius: 2rem;
    border: transparent;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 800px){
        display: none;
    }
`;

const navList = css`
    flex: 1;
    margin-left: 4rem;
    display: none;
    @media screen and (min-width: 800px){
        display: block;
    }
`;
    
const nav = css`
    flex: 1;
    display: flex;
`;

const navItem = css`
    cursor: pointer;
    margin: 0 1rem;
    position: relative;
    > a{
        @media screen and (min-width: 800px){
            color: var(--clr-white);
            font-size: 1rem;
            letter-spacing: 2px;
            font-weight: 500;
            padding: 10px 20px;
            &:hover ~ .nestedLinks{
                visibility: visible;
            }
        }
    }
`;
const nestedItem = css`
    a{
        font-weight: 700;
        color: rgb(10, 37, 64);

    }
`;

const arrow = css`
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    height: 10px;
    width: 10px;
    background-color: var(--clr-white);
`;


const Navigation = () => {
    return (
        <div css={wrapper}>
            <div css={navCenter}>
                <Link to="/">
                    <StaticImage 
                        src="../../images/logo.svg" 
                        alt="logo" 
                        css={logo}
                    />
                </Link>
                <button css={toggleBtn}><GoThreeBars/></button>
                <nav css={navList}>
                    <ul css={nav}>
                        <li css={navItem}>
                            <Link to="/">Products</Link>
                            <ul className="nestedLinks">
                                <li css={nestedItem}><Link to="/">Payment</Link></li>
                                <li css={nestedItem}><Link to="/">Terminal</Link></li>
                                <li css={nestedItem}><Link to="/">Contact</Link></li>
                                <li css={nestedItem}><Link to="/">Billing</Link></li>
                                <div css={arrow}/>
                            </ul>
                        </li>
                        <li css={navItem}>
                            <Link to="/">Developers</Link>
                            <ul className="nestedLinks">
                                <li css={nestedItem}><Link to="/">Documentation</Link></li>
                                <li css={nestedItem}><Link to="/">Libraries</Link></li>
                                <li css={nestedItem}><Link to="/">plugin</Link></li>
                                <div css={arrow}/>
                            </ul>
                        </li>
                        <li css={navItem}>
                            <Link to="/">Company</Link>
                            <ul className="nestedLinks">
                                <li css={nestedItem}><Link to="/">Jobs</Link></li>
                                <li css={nestedItem}><Link to="/">Customer</Link></li>
                                <div css={arrow}/>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default Navigation;