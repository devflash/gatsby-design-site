import React from "react"
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import About from '../components/about';
import Projects from '../components/projects';
import Survey from '../components/survey';

const gridCustomCss = css`
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 900px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1200px){
    grid-template-areas: 
        "a b b"
        "a c d"
  }
`;

const Home = ({data}) => {
  console.log(data);
  const { allContentfulProducts: { nodes:products } } = data;
  return(
    <Layout>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects 
        products={products}
        titleText="Latest Projects" 
        showCategories={false} 
        gridDynamic 
        gridCustomCss={gridCustomCss}
        />
      <Survey/>
    </Layout>
  );
}

export const query = graphql`
  {
    allContentfulProducts(limit: 4, sort: {order: ASC, fields: createdAt}) {
      nodes {
        id
        name
        description
        type
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default Home;