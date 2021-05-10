import { GlobalContext, TApplication, eventSubscribers } from 'lib';

import './styled.css';

const Navigate = ({ navName, path }: TApplication, onNavigate: (event: any) => void) => {
  const _htmlContainer = document.createElement('li');
  const _htmlAnchor = document.createElement('a');
  _htmlAnchor.innerText = navName;
  _htmlAnchor.href = path;

  _htmlAnchor.addEventListener('click', onNavigate);
  eventSubscribers.push(() => _htmlAnchor.removeEventListener('click', onNavigate));

  _htmlContainer.appendChild(_htmlAnchor);
  return _htmlContainer;
};

export const Header = () => {
  const _htmlContainer = document.createElement('header');
  const _htmlUl = document.createElement('ul');

  _htmlUl.className = 'header-menu';
  _htmlContainer.appendChild(_htmlUl);

  const { applications, history } = GlobalContext.context;

  const _onRoute = (e: MouseEvent) => {
    const anchor = e.target as HTMLAnchorElement;
    history.push(anchor.href);
    e.preventDefault();
  };

  applications.forEach(
    application => application.isNavVisible && _htmlUl.appendChild(Navigate(application, _onRoute))
  );

  return _htmlContainer;
};
