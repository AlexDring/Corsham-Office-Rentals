import * as React from 'react';
import Hero from '../components/Hero';
import Navigation from '../components/Nav';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
      </main>
    </>
  );
}
