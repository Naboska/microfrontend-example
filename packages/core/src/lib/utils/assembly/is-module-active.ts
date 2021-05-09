export const isModuleActive = (path: string) => (location: Location) => {
  const isRootPath = path === '/';

  if (!path) return true;
  if (isRootPath) return location.pathname === '/';

  return location.pathname.startsWith(path);
}