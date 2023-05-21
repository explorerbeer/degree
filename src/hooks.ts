import {useCallback, useState} from 'react';

export function useForceUpdate(): [boolean, Function] {
  const [value, forceUpdate] = useState<boolean>(false);

  const forceUpdateCallback = useCallback(() => forceUpdate(prev => !prev), []);

  return [value, forceUpdateCallback];
}
export const randomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const randomScale = () => {
  const scale = Math.floor(Math.random() * 1.5) + 1.2;
  return scale;
};
