import { TApplication } from "lib";

export const applications: TApplication[] = [
  {
    name: '@mfe/navigate',
    path: '',
    navName: 'Навигация',
    isNavVisible: false
  },
  {
    name: '@mfe/post',
    path: 'post/',
    navName: 'Пост',
    isNavVisible: false
  },
  {
    name: '@mfe/posts',
    path: '/',
    navName: 'Главная',
    isNavVisible: true
  },
];
