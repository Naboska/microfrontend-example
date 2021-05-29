import React, {useCallback} from 'react';

const PostPage = React.lazy(() => import('pages/PostPage').then(m => ({default: m.PostPage})));

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
