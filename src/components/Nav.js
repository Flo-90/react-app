import React from 'react';

import { Navbar, Link } from 'framework7-react';

function Nav() {

  const style = {
      backgroundColor: 'red',
      color: '#fff'
  }  

  return (
    <Navbar title="My App" subtitle="subtitle" style={style}>
        <Link href="#tab-1" tabLink>Tab1</Link>
        <Link href="#tab-2" tabLink>Tab2</Link>
    </Navbar>
  );
}

export default Nav;