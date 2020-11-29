export const navigateTo = (path: string, data?: any) => history.pushState(data, path, path);

export const createNavigate = (path: string, data?: any) => () => navigateTo(path, data);