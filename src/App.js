import React, { Component } from 'react';

import MainNav from './Components/Navigation/MainNav/MainNav';
import HomeTab from './Components/Tabs/HomeTab/HomeTab';
import WorkoutTab from './Components/Tabs/WorkoutTab/WorkoutTab';
import Panel from './Components/Navigation/Panel/Panel';

import { F7App, F7View, F7Page, F7Tabs } from 'framework7-react';


const f7params = {
  theme: 'md',
  name: 'GymRoutine',
  id: 'com.gymroutine.alpha',
  routes: []
}

class App extends Component {
  
  render() { 
    return (
      <F7App params={f7params}>
        <F7View main url="/">
          <F7Page pageContent={false}>
            <MainNav />
            
            <F7Tabs animated>
              <HomeTab />
              <WorkoutTab />
            </F7Tabs>
          </F7Page>
        </F7View>

        <Panel />
      </F7App>
      );
  }
}
 
export default App;