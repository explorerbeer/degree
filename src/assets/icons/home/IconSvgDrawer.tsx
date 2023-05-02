import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function IconSvgDrawer() {
  return (
    <Svg width={44} height={44} viewBox="0 0 44 44" fill="none">
      <Rect width={44} height={44} rx={12} fill="#FF7F50" />
      <Path
        d="M14 28h7m-7-12h16-16zm0 6h16-16z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconSvgDrawer;
