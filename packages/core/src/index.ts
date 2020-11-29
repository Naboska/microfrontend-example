import { createApplications } from './utils';
import { TApplication } from "./types";

const applications: TApplication[] = [
  {
    name: '@mfe/post',
    path: 'post'
  }
];

const main = createApplications(applications);

main.start();