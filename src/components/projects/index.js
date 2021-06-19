import React, {useState, useEffect} from 'react';
import { css } from '@emotion/react';
import Title from '../title';
import { GatsbyImage } from 'gatsby-plugin-image';
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

const filterProducts = (data, type) => {
    if(type === 'all') 
        return data;
    else
        return data.filter((cur) => cur.type === type);
}

const Projects = ({products, titleText, showCategories, gridDynamic=false, gridCustomCss}) => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [type, setType] = useState('all');

    useEffect(() => {
        setFilteredProducts(filterProducts(products, type));
    },[type]);

    return (
    <section css={greyBackground}>
        <Title titleText={titleText}/>
        {showCategories && <Categories products={products} setType={setType}/>}
        <div css={[wrapper, gridCustomCss]}>
            {
                filteredProducts.map((product) => (
                    <article key={product.id} css={[card, gridDynamic && card0]}>
                        <GatsbyImage 
                            image={product.image.gatsbyImageData}
                            alt="kitchen-1"
                            layout="constrained"
                            css={projectImage}
                        />
                        <div css={info}>
                            <p>- {product.name} -</p>
                            <h3>{product.description}</h3>
                        </div>
                    </article>

                ))
            }
        </div>
    </section>
)};


export default Projects;