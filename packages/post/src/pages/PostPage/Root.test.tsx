import React from 'react';
import {render} from '@testing-library/react';

import {PostPage} from './PostPage';

describe('PostPage component', () => {
  it('should be in the document', () => {
    const {getByText} = render(<PostPage>Testapp</PostPage>);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});
