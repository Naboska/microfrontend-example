import { CustomProps, LifeCycles } from 'single-spa';

import { IAppProps, SystemJs } from 'lib';

import { domElementGetter } from './dom-element-getter';

export const importModule = <T extends CustomProps>(config: IAppProps): Promise<LifeCycles<T>> => {
  const moduleNode = domElementGetter(config);
  const loaderNode: HTMLElement = document.createElement('div');
  loaderNode.innerText = 'loading';

  moduleNode.appendChild(loaderNode);
  const removeLoader = () => moduleNode.removeChild(loaderNode);

  return SystemJs.import<LifeCycles<T>>(config.name).finally(removeLoader);
};
