import ReactOnRails from 'react-on-rails';

import Animals from '../bundles/Animals/components/Animals';

// This is how react_on_rails can see the Animals in the browser.
ReactOnRails.register({
  Animals,
});
