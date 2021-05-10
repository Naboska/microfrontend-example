import { setVariables } from 'css-vars-adapter';

import { GlobalContext, TAppProps } from 'lib';
import { Header } from 'widgets';

export const RootWidget = (config: TAppProps) => {
  setVariables(config.theme);

  GlobalContext.root = config.domElement;
  GlobalContext.Provider(config, () => [Header()]);
};
