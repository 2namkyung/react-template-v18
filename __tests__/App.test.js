import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('renders learn react link', () => {
  const utils = render(<App />);
  utils.getByText('This is a React Template');
});
