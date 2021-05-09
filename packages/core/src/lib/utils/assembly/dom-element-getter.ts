import { IAppProps } from "lib";

const createModuleNode = (name: string) => {
  const node = document.createElement('div');
  node.id = name;

  return node;
};

export const domElementGetter = (config: IAppProps): Element | null => {
  console.log(config);
  if (config) {
    const { name } = config;

    const findNode = document.querySelector(`div[id$='${name}']`);

    if (!findNode) {
      const root = document.body;
      const moduleNode = createModuleNode(name);

      root.appendChild(moduleNode);

      return moduleNode;
    }

    return findNode;
  }

  return null;
}