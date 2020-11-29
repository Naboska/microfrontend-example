import { createApplications } from './utils';
import { TApplication } from "./types";

const applications: TApplication[] = [
  {
    name: '@mfe/authorization',
    path: ''
  }
];

const main = createApplications(applications);

main.start();