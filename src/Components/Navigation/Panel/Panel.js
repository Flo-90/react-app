import React from 'react';

import PanelLinks from './PaneLinks/PanelLinks';

import { F7Panel, F7View } from 'framework7-react';

const Panel = () => {

    return ( 
        <F7Panel right resizable>
            <F7View>
                <PanelLinks />      
            </F7View>
        </F7Panel>
     );
}
 
export default Panel;