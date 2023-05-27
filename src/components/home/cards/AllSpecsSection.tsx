import React from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { specs } from '../../../mocks/specs';
import { AllSpecs } from './AllSpecs';

interface ISpecsSection {
  bottomSheetSpecsOnPress: (index: any) => void;
  selectedSpec: any;
}

export const AllSpecsSection = ({
  bottomSheetSpecsOnPress,
  selectedSpec,
}: ISpecsSection) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        data={specs}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetSpecsOnPress(index)}
          >
            <AllSpecs
              profession={item.profession}
              nickName={item.nickName}
              city={item.city}
              specLink={item.specLink}
              descr={item.descr}
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
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flatList: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
});
