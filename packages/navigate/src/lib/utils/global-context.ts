import { TAppProps } from '../types';

type TGlobalContext = {
  Provider: (value: TAppProps, widgets: () => HTMLElement[]) => Element;
  context: TAppProps;
  root: HTMLElement;
};

export const GlobalContext: TGlobalContext = {
  Provider: (value, widgets) => {
    GlobalContext.context = value;
    widgets().forEach(w => GlobalContext.root.appendChild(w));

    return GlobalContext.root;
  },
  context: {} as any,
  root: document.createElement('span'),
};
