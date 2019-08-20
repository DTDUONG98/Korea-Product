import React from 'react';
import ReactDOM from 'react-dom';
import Login from './View/Home/Index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});
