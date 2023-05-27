import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { specs } from '../../../mocks/specs';
import { Specs } from './Specs';

export const SpecsSection = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        data={specs}
        renderItem={({ item }) => (
          <Specs spec={item.profession} city={item.city} />
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
    paddingHorizontal: 15,
  },
});
