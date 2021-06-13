import React from "react"
import { css } from '@emotion/react';
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

export default function Home() {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects gridDynamic gridCustomCss={gridCustomCss}/>
      <Survey/>
    </Layout>
  );
}
