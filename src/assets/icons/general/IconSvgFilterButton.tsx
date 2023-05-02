import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const IconSvgFilterButton = () => (
  <Svg width={53} height={53} fill="none">
    <Rect width={53} height={53} rx={15} fill="#FF7F50" />
    <Path
      d="M37 21.667H25.667m0 0a2.667 2.667 0 1 0-5.334 0m5.334 0a2.667 2.667 0 0 1-5.334 0m0 0H17m20 10.666h-3.333m0 0a2.667 2.667 0 0 0-5.334 0m5.334 0a2.667 2.667 0 1 1-5.334 0m0 0H17"
      stroke="#fff"
      strokeWidth={1.5}
    />
  </Svg>
);

export default IconSvgFilterButton;
