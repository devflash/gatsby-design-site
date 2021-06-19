import React from 'react';
import { css } from '@emotion/react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Navigation from '../../components/navigation';
import Projects from '../../components/projects';
import Search from '../../components/search';

const navCss = css`
    background-color: var(--clr-primary-7);
`;

const gridCustomCss = css`
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 900px){
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ProjectsPage = ({data}) => {
  const { allContentfulProducts: {nodes: projects} } = data;
  return (
    <Layout>
        <Navigation customCSS={navCss}/>
        <Projects 
          products={projects}
          titleText="Our Projects"
          showCategories 
          gridCustomCss={gridCustomCss}
        />
        <Search/>
    </Layout>
)};

export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        id
        name
        description
        type
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default ProjectsPage;