import React from 'react';
import { Helmet } from 'react-helmet';

const HomeContainer: React.SFC = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      Home
    </div>
  );
};

export default HomeContainer;
