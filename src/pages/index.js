import React from "react"
import Layout from '../components/layout';
import Hero from '../components/hero';
import Navigation from '../components/navigation';

export default function Home() {
  return(
    <Layout>
      <Navigation/>
      <Hero/>
    </Layout>
  );
}
