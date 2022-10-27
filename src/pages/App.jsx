import React from 'react';
import { Col } from 'antd';
import { Search } from '../components';

const App = () => {
  return (
    <div className='App'>
      <Col span={8} offset={8}>
        <Search />
      </Col>
    </div>
  );
};

export { App };
