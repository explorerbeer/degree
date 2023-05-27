import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { Investors } from './Investors';
import { investors } from '../../../mocks/investors';

interface IInvestorsSection {
  bottomSheetOnPressProj: (index: any) => void;
  selectedProj: any;
}

export const InvestorsSection = ({
  bottomSheetOnPressProj,
  selectedProj,
}: IInvestorsSection) => {
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={investors}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => bottomSheetOnPressProj(index)}
          >
            <Investors
              project={item.project}
              genre={item.genre}
              platform={item.platform}
              links={item.links}
              msgLink={item.msgLink}
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
