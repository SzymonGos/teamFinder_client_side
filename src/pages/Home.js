import React from 'react';
import HeroBanner from '../components/home/HeroBanner';
import Filter from '../components/home/Filter';
import Tabs from '../components/home/Tabs';


export default function Home() {
  return (
    <section className='home'>
      <HeroBanner />
      <main className='wrapper'>
        <Filter />
        <Tabs />
      </main>
    </section>
  );
}
