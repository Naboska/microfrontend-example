export const createRootStyle = (offsetHeight: number) => (mainContainer: string) => `
  ${mainContainer} {
    height: calc(100% - ${offsetHeight}px);
  }

  ${mainContainer} .single-spa-container {
    position: relative;
    height: 100%;
  }
`;
