import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconLikeDrawer() {
  return (
    <Svg
      width={36}
      height={36}
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </Svg>
  );
}

export default IconLikeDrawer;
