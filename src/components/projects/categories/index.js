import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import {useStaticQuery, graphql} from 'gatsby';
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
        text-transform: capitalize;
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

const query = graphql`
{
  allContentfulProducts {
    nodes {
      type
      id
    }
  }
}
`;

const populateCategories = (data) => {
    return ['all', ...new Set(data.map((cur) => cur.type))];
}

const Categories = ({setType}) => {
    const [state, setState] = useState(0);
    const [categories, setCategories] = useState([]);
    const { allContentfulProducts: {nodes: data}} = useStaticQuery(query);

    useEffect(() => {
        const uniqueCategories = populateCategories(data);
        setCategories(uniqueCategories);
    },[]);

    const categoryClick = (type, index) => {
        setState(index);
        setType(type);
    }
    return (
    <ul css={wrapper}>
        {
            categories.map((cur, index) => (
                <li key={index} css={category}>
                    <button onClick={() => categoryClick(cur, index)}>{cur}</button>
                    <div css={[underline, state === index ? active : null]}></div>
                </li>
            ))
        }
    </ul>
)}

export default Categories;