import React, { Component } from 'react';
import { ServerItem1, ServerItem2, ServerItem3 } from './ServerItem';

export default class ServerChart extends Component {
  render() {
    return (
      <div style={{ minWidth: '1000px' }}>
        <ServerItem1 />
        <div style={{ margin: '0 auto', overflow: 'hidden' }}>
          <ServerItem2 />
          <ServerItem2 />
          <ServerItem2 />
          <ServerItem2 />
        </div>

        <div style={{ margin: '0 auto', overflow: 'hidden' }}>
          <ServerItem3 />
        </div>
      </div>
    );
  }
}
