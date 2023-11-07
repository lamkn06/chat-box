
import { MessageLeft } from '../../src/components/Message/MessageLeft';

describe('<MessageLeft />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MessageLeft name="Lam" message="Hi" />);
  });
});
