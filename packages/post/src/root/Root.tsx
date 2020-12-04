import React, {useCallback, useEffect, useState} from 'react';

import {PostPage} from 'pages';

export const Root = ({history}) => {
  const [historyContext, setHistoryContext] = useState<[]>([]);

  const goBack = useCallback(() => {
    if (history.length > 1) history.back();
    else history.push('/');
  }, [history]);

  useEffect(() => {
    const unsubscribe = history.subscribe(setHistoryContext);

    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <>
      <span>{JSON.stringify(historyContext)}</span>
      <br />
      <button onClick={goBack}>go back</button>
      <PostPage />
    </>
  );
};
