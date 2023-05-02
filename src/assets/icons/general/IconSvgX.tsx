import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSvgX() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M18 6L6 18" />
      <Path d="M6 6L18 18" />
    </Svg>
  );
}

export default IconSvgX;
