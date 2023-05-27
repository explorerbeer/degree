import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function IconCVDark() {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
      <Path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </Svg>
  );
}

export default IconCVDark;
