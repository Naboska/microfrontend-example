import React from 'react';

import {TPostPage} from './types';

export const PostPage: React.FC<TPostPage> = ({children}) => {
  return (
    <div>
      this is page <span>{children}</span>
    </div>
  );
};
