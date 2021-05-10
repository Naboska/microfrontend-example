import { IAppProps } from 'lib';

const createModuleNode = (name: string) => {
  const node = document.createElement('div');
  node.id = name;

  return node;
};

export const domElementGetter = ({ name }: Pick<IAppProps, 'name'>): Element => {
  const findNode = document.querySelector(`div[id$='${name}']`);

  if (!findNode) {
    const root = document.body;
    const moduleNode = createModuleNode(name);

    root.appendChild(moduleNode);

    return moduleNode;
  }

  return findNode;
};
