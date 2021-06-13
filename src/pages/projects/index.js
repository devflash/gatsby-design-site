import React from 'react';
import { css } from '@emotion/react';
import Layout from '../../components/layout';
import Navigation from '../../components/navigation';
import Projects from '../../components/projects';

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

const ProjectsPage = () => (
    <Layout>
        <Navigation customCSS={navCss}/>
        <Projects titleText="Our Projects" showCategories gridCustomCss={gridCustomCss} />
    </Layout>
);

export default ProjectsPage;