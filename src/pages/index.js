import React from "react"
import Layout from '../components/layout';
import Hero from '../components/hero';
import Navigation from '../components/navigation';
import About from '../components/about';
import Projects from '../components/projects';

export default function Home() {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
      <About/>
      <Projects/>
    </Layout>
  );
}
