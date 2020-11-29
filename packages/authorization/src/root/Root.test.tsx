import React from 'react';
import {render} from '@testing-library/react';

import {Root} from './Root';

describe('Root component', () => {
  it('should be in the document', () => {
    const {getByText} = render(<Root>Testapp</Root>);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
