import React from 'react';
import renderer from 'react-test-renderer';

import ThanksPage from './ThanksPage';

it('renders correctly', () => {
  const component = renderer
    .create(<ThanksPage />)
    .toJSON();

  expect(component).toMatchSnapshot();
});
