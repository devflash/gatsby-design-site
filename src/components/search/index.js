import React, { useState } from 'react';
import { css } from '@emotion/react';
import Title from '../title';
import { ImCancelCircle } from 'react-icons/im';
import { GatsbyImage } from 'gatsby-plugin-image';
import useSearch from '../../hooks/useSearch';

const wrapper = css`
    width: 90vw;
    margin: 4rem auto 0;
    max-width: var(--max-width);
`;

const greyBackground = css`
    background-color: var(--clr-grey-10);
    padding-top: 0;
`;

const serachBox = css`
    height: 36px;
    display: flex;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`;
 
const searchInput = css`
    bacground-color: var(--clr-white);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    flex: 1 1 auto;
    padding: 8px 16px;
    font-size: 16px;
`;

const serachBtn = css`
    padding: 0 10px;
    border: 0;
    background-color: var(--clr-grey-5);
    color: var(--clr-white);
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const cardWrapper = css`
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const card = css`
    overflow: hidden;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 25px;
    flex-basis: 100%;
    cursor: pointer;
    transition: var(--transition);
    &:hover{
        box-shadow: 3px 2px 10px rgb(0, 0, 0, .5);
    }
    h4{
        margin: 0;
        padding: 16px;
        background-color: var(--clr-white);
    }
    @media screen and (min-width: 580px){
        flex-basis: 48%;
    }
    @media screen and (min-width: 900px){
        flex-basis: 31.33%;
    }
    
`;

const cardImg = css`
    width: 100%;
    height: 200px;
`;

const Search = ({products}) => {
    const [value, setValue] = useState('');
    const searchResult = useSearch(products, value);
    return (
    <section css={greyBackground}>
        <Title titleText="Search Project" />
        <div css={wrapper}>
            <div css={serachBox}>
                <input value={value} onChange={(e) => setValue(e.target.value)} css={searchInput} placeholder="Search here..." />
               {value.length > 0 && <button onClick={() => setValue('')} css={serachBtn}><ImCancelCircle /></button>}
            </div>

            <div css={cardWrapper}>
                {
                    searchResult.map((product) => (
                        <article css={card}>
                            <GatsbyImage 
                                image={product.image.gatsbyImageData}
                                alt="kitchen-1"
                                css={cardImg}
                            />
                            <h4>{product.description}</h4>
                        </article>
                    ))
                }
            </div>
        </div>
    </section>
)};

export default Search;