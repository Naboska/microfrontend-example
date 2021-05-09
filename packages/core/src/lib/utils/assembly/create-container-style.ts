type TStyleFn = (mainContainer: string) => string;

export const createContainerStyle = (name: string) => {
  const container = document.createElement('style');
  container.dataset.appStyle = name;

  document.head.append(container);

  const styleName = name.replace('@', '\\@').replaceAll('/', '\\/')

  return (styles: string | TStyleFn) => {
    const mainContainer = `[id$=${styleName}]`;

    container.innerHTML =
      typeof styles === 'function'
        ? styles(mainContainer)
        : `${mainContainer} { ${styles} }`;
  }
}