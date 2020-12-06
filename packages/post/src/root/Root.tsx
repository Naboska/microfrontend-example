import React, {useCallback} from 'react';

import {PostPage} from 'pages';

export const Root = ({history}) => {
  const goBack = useCallback(() => {
    if (history.length > 1) history.back();
    else history.replace('/');
  }, [history]);

  return (
    <>
      <button onClick={goBack}>go back</button>
      <PostPage />
    </>
  );
};
