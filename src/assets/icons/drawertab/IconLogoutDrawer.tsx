import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconLogOutDrawer() {
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
      <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <Path d="M16 17L21 12 16 7" />
      <Path d="M21 12L9 12" />
    </Svg>
  );
}

export default IconLogOutDrawer;
