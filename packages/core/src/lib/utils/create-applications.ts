import * as singleSpa from 'single-spa';

import { TApplication, theme } from 'lib';
import { SystemJs } from './systemjs';
import { createHistory, createContainerStyle } from "lib";

export const createApplications = (applications: TApplication[]) => {
  const history = createHistory();

  const globalProps = {
    applications,
    theme,
    history
  };

  const register = (application: TApplication): void => {
    const {name, path} = application;
    const isRootPath = path === '/';
    const setAppStyle = createContainerStyle(name);

    singleSpa.registerApplication({
      name,
      app: () => SystemJs.import(name),
      activeWhen: (location: Location) => isRootPath ? location.pathname === '/' : location.pathname.startsWith(`/${path}`),
      customProps: { ...globalProps, path, setAppStyle }
    });
  }

  return {
    start() {
      applications.forEach(register);
      singleSpa.start();
    }
  }
}

