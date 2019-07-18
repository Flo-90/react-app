import React from 'react';

import { F7Tab } from 'framework7-react';

import Days from './Days/Days';

const HomeTab = () => {
    return ( 
        <F7Tab id="tab-1" className="page-content" tabActive>
           
                <Days />
            
        </F7Tab>
     );
}
 
export default HomeTab;