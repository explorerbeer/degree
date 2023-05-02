import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function IconUserDrawer() {
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
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
}

export default IconUserDrawer;
