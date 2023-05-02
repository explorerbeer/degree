import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconSvgEmail() {
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
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <Path d="M22 6L12 13 2 6" />
    </Svg>
  );
}

export default IconSvgEmail;
