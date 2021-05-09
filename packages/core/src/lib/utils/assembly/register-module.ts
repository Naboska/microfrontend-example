import { CustomProps, registerApplication } from "single-spa";

import { TApplication } from "lib";
import { importModule } from "./import-module";
import { isModuleActive } from "./is-module-active";
import { domElementGetter } from "./dom-element-getter";
import {createContainerStyle} from "./create-container-style";

export const registerModule = <T extends CustomProps>(config: TApplication, globalProps: T) => {
  const { name, path } = config;
  const setAppStyle = createContainerStyle(name);

  const props = { path, domElementGetter, setAppStyle };

  registerApplication<T & Pick<TApplication, 'path'>>({
    name,
    app: importModule,
    activeWhen: isModuleActive(path),
    customProps: { ...globalProps, ...props }
  });
}