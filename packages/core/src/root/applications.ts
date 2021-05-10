import { TApplication } from 'lib';

export const applications: TApplication[] = [
  {
    name: '@mfe/navigate',
    path: '',
    navName: 'Навигация',
    isNavVisible: false,
  },
  {
    name: '@mfe/main',
    path: '/',
    navName: 'Главная',
    isNavVisible: true,
  },
  {
    name: '@mfe/post',
    path: 'post/',
    navName: 'Пост',
    isNavVisible: false,
  },
  {
    name: '@mfe/championship-map',
    path: 'championship',
    navName: 'Карта чемпионатов',
    isNavVisible: true,
  },
];
