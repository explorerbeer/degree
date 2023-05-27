import React from 'react';
import { StyleSheet, Touchable, View } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { fakeTeamsLiked } from '../../../mocks/fakeTeamsLiked';
import { Liked } from './Liked';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

interface ITeamsSection {
  bottomSheetOnPress: (index: any) => void;
  selectedTeam: any;
}

export const LikedSection = ({
  bottomSheetOnPress,
  selectedTeam,
}: ITeamsSection) => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={fakeTeamsLiked}
        scrollEnabled={true}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetOnPress(index)}
          >
            <Liked
              teamTitle={item.teamTitle}
              city={item.city}
              specs={item.profession}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});
