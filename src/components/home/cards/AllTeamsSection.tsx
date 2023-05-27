import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { teams } from '../../../mocks/teams';
import { AllTeams } from './AllTeams';

interface ITeamsSection {
  bottomSheetOnPress: (index: any) => void;
  selectedTeam: any;
}

export const AllTeamsSection = ({
  bottomSheetOnPress,
  selectedTeam,
}: ITeamsSection) => {
  return (
    <ScrollView style={styles.flatList}>
      <FlatList
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        data={teams}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetOnPress(index)}
          >
            <AllTeams
              teamTitle={item.teamTitle}
              city={item.city}
              profession={item.profession}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
