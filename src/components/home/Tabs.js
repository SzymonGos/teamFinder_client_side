import React from 'react';
import { useTabs, TabPanel } from "react-headless-tabs";
import TabsButton from './TabsButton';

export default function Tabs() {

  const [selectedTab, setSelectedTab] = useTabs([
    'map',
    'events'
  ])
  return (
    <section className='tabs-wrapper'>
      <div className='tabs'>
        <TabsButton
          isActive={selectedTab === 'map'}
          onClick={() => setSelectedTab('map')}
        >
          Map
        </TabsButton>
        <TabsButton
          isActive={selectedTab === 'events'}
          onClick={() => setSelectedTab('events')}
        >
          Events
        </TabsButton>
      </div>
      <div className='tabs__content'>
        <TabPanel
          className='tabs__panels'
          hidden={selectedTab !== 'map'}>
          map
        </TabPanel>
        <TabPanel
          className='tabs__panels'
          hidden={selectedTab !== 'events'}>
          Events
        </TabPanel>
      </div>
    </section>
  );
}
