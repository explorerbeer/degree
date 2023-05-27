import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconSvgLikeActive from '../../../assets/icons/flatlists/IconSvgActiveLike';
import IconSvgLike from '../../../assets/icons/flatlists/IconSvgLike';
import { ThemeContext } from '../../../ThemeContext';
import IconSvgLikeDark from '../../../assets/icons/flatlists/IconSvgLikeDark';

interface Props {
  onPress: () => void;
}

export const LikeButton: React.FC<Props> = ({ onPress }) => {
  const [liked, setLiked] = useState(true);
  const { darkMode } = useContext(ThemeContext);

  const handlePress = () => {
    setLiked(!liked);
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.likeStyle}>
        {darkMode ? (
          liked ? (
            <IconSvgLikeActive />
          ) : (
            <IconSvgLikeDark />
          )
        ) : liked ? (
          <IconSvgLikeActive />
        ) : (
          <IconSvgLike />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  likeStyle: {
    paddingTop: 16,
    paddingRight: 15,
  },
});
