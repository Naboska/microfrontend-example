import * as singleSpa from 'single-spa';

import { TApplication } from '../types';
import { SystemJs } from './systemjs';

export const createApplications = (applications: TApplication[]) => {
  const globalProps = {
    applications
  };

  const register = (application: TApplication): void => {
    const {name, path} = application;

    singleSpa.registerApplication({
      name,
      app: () => SystemJs.import(name),
      activeWhen: (location: Location) => location.pathname.startsWith(`/${path}`),
      customProps: { ...globalProps, path }
    });
  }

  return {
    start() {
      applications.forEach(register);
      singleSpa.start();
    }
  }
}

