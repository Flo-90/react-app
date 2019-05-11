import React from 'react';

import { Navbar, Page, Block, Row, Col, Button } from 'framework7-react';

function Second() {
  return (
    <Page name="second" stacked>
        <Navbar title="Awesome App" backLink></Navbar>
        {/* Page content */}
        <Block>
          <p>Here comes main view page text</p>
        </Block>
        {/* Buttons to open panels */}
        <Row>
          <Col>
            <Button panelOpen="left">Left Panel</Button>
          </Col>
          <Col>
            <Button panelOpen="right">Right Panel</Button>
          </Col>
        </Row>
        {/* Button to open popup */}
        <Button popupOpen="#my-popup">Open Popup</Button>
    </Page>
  );
}

export default Second;