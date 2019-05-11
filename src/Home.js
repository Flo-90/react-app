import React from 'react';
import Nav from './components/Nav';
import Second from './components/Second';

import { 
  App,
  Tabs,
  Tab,
  Toolbar,
  Link,
  Block,
  Navbar,
  Page,
  List,
  ListItem,
  View
} from 'framework7-react';

function Home() {

  const f7params = {
    theme: 'md',
    name: 'GymApp',
    id: 'com.demoapp.test',
    routes: []

  }

  const randomId = 'second';

  f7params.routes = {
    path: `/${randomId}/`,
    component: Second
  }

  return (
    <App params={f7params}>
      <View main url="/">
        <Page pageContent={false}>
          <Navbar title="Animated Tabs"></Navbar>
          <Toolbar tabbar top>
            <Link tabLink="#tab-1" tabLinkActive>Tab 1</Link>
            <Link tabLink="#tab-2">Tab 2</Link>
          </Toolbar>
          <Tabs animated>
            <Tab id="tab-1" className="page-content" tabActive>
              <Block>
                <p>Tab 1 content</p>
                ...
              </Block>
            </Tab>
            <Tab id="tab-2" className="page-content">
              <List>
                <ListItem title="Link 1" href="/second/" />
                <ListItem title="Link 3" link="#" />
              </List>
            </Tab>
          </Tabs>
        </Page>
        <Second />
        
        </View>

        <View>
          <Navbar title="Animated Tabs"></Navbar>
          <Tabs>
            <Tab id="workout" className="page-content">
              Workout Tab
            </Tab>
          </Tabs>
        </View>

        
      
    </App>
  );
}

export default Home;
