import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { NeynarProvider } from '../.';

const provider = new NeynarProvider('270950A2-D46D-4216-A0B2-B3B91D796459');
console.log(provider);

const App = () => {
  return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
