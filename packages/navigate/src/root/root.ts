import { TAppProps, eventSubscribers } from 'lib';

import { RootWidget } from './RootWidget';

export const bootstrap = () => Promise.resolve();

export const mount = async (globalProps: TAppProps) => {
  RootWidget(globalProps);
};

export const unmount = async ({ domElement }: TAppProps) => {
  eventSubscribers.forEach(unsubscribe => unsubscribe());
  domElement.childNodes.forEach(el => domElement.removeChild(el));
};
