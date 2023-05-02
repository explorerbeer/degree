import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconHomeDrawer() {
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
      <Path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <Path d="M9 22L9 12 15 12 15 22" />
    </Svg>
  );
}

export default IconHomeDrawer;
