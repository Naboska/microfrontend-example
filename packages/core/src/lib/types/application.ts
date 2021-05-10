import { AppProps } from 'single-spa';

export type TApplication = {
  name: string;
  path: string;
  navName?: string;
  isNavVisible?: boolean;
};

export interface IAppProps extends AppProps, Pick<TApplication, 'path'> {
  applications?: TApplication[];
}
