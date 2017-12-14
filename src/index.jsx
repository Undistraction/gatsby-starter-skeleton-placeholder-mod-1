import ReactDOM from 'react-dom';
// eslint-disable-next-line
import React from 'react';

export default context => {
  context.style.backgroundColor = '#FF0000';
  ReactDOM.render(<div>Code Run From Installed NPM Module</div>, context);
};
