import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('renders learn react link', () => {
  const { getByText } = render(<App id={'123'}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
