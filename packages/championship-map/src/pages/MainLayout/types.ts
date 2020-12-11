export enum ETilesKey {
  Streets = 'streets',
  Hybrid = 'hybrid',
  Satellite = 'satellite',
}

export const MAP_TILES_NAME = {
  [ETilesKey.Streets]: 'Схема',
  [ETilesKey.Hybrid]: 'Гибрид',
  [ETilesKey.Satellite]: 'Спутник',
};

export const MAP_TILES_URL = {
  [ETilesKey.Streets]: 'm&x',
  [ETilesKey.Hybrid]: 's,h&x',
  [ETilesKey.Satellite]: 's&x',
};
