export type TApplication = {
  isNavVisible: boolean;
  name: string;
  navName: string;
  path: string;
};

export type TAppProps = {
  domElement: HTMLElement;
  applications: TApplication[];
  history: {
    push: (path: string) => void;
  };
  theme: Record<string, any>;
};
