import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { teams } from '../../../mocks/teams';
import { Teams } from './Teams';

interface ITeamsSection {
  bottomSheetOnPress: (index: any) => void;
  selectedTeam: any;
}

export const TeamsSection = ({
  bottomSheetOnPress,
  selectedTeam,
}: ITeamsSection) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={teams}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetOnPress(index)}
          >
            <Teams
              teamTitle={item.teamTitle}
              city={item.city}
              profession={item.profession}
              links={item.links}
              descr={item.descr}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
