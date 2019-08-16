import React from 'react';
import renderer from 'react-test-renderer';

import ResetRequestPage from './ResetRequestPage';

it('renders correctly', () => {
  const component = renderer
    .create(<ResetRequestPage />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
