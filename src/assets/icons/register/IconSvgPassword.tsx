import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function IconSvgPassword() {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6A6A6A"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <Path d="M7 11V7a5 5 0 0110 0v4" />
    </Svg>
  );
}

export default IconSvgPassword;
