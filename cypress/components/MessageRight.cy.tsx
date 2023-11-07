import React from 'react';

import { MessageRight } from '../../src/components/Message/MessageRight';

describe('<MessageRight />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MessageRight name="Lam New" message="Bye" />);
  });
});
