/* eslint-disable react-native/no-inline-styles */
import React, {memo, useEffect, useState} from 'react';
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseModal, {IBaseModalProps} from '../base/BaseModal';
import {COLORS, FONT_FAMILY} from '../../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FastImage, {Source} from 'react-native-fast-image';
import TextInputBase from '../../text-input/text-input-base';
import {TextInputContainer} from '../../text-input';
import {useCallback} from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useIsFocused} from '@react-navigation/native';

export interface IModalOptions extends IBaseModalProps {
  comments: Array<{
    text: string;
    source: Source;
    username: string;
  }>;
}
export default function createListSelectorModal() {
  return memo<IModalOptions>(({comments, ...modalProps}) => {
    const focus = useIsFocused();
    const sharedAnimatedValue = useSharedValue(1);

    const showHeader = useCallback(() => {
      sharedAnimatedValue.value = withTiming(1, {
        duration: 250,
        easing: Easing.linear,
      });
    }, [sharedAnimatedValue]);

    const hideHeader = useCallback(() => {
      if (focus) {
        sharedAnimatedValue.value = withTiming(0, {
          duration: 250,
          easing: Easing.linear,
        });
      }
    }, [focus, sharedAnimatedValue]);

    useEffect(() => {
      const willShowHandler = Keyboard.addListener('keyboardWillShow', () =>
        hideHeader(),
      );
      const willHideHandler = Keyboard.addListener('keyboardWillHide', () =>
        showHeader(),
      );
      const didShowHandler = Keyboard.addListener('keyboardDidShow', () =>
        hideHeader(),
      );
      const didHideHandler = Keyboard.addListener('keyboardDidHide', () =>
        showHeader(),
      );

      return () => {
        willShowHandler.remove();
        willHideHandler.remove();
        didShowHandler.remove();
        didHideHandler.remove();
      };
    }, [hideHeader, showHeader]);

    const headerAnimatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateY: interpolate(sharedAnimatedValue.value, [0, 1], [-330, 0]),
        },
      ],
    }));
    const insets = useSafeAreaInsets();
    const [comment, setComment] = useState('');
    return (
      <BaseModal
        {...modalProps}
        animationType={'slideFromBottom'}
        style={styles.container}>
        <View
          style={[
            styles.contentContainer,
            modalProps.visible ? styles.shadow : null,
          ]}>
          <View
            style={[
              styles.headerContainer,
              {
                paddingLeft: insets.left,
                paddingRight: insets.right,
              },
            ]}>
            <TouchableOpacity onPress={modalProps.onRequestDismiss}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 500,
              backgroundColor: COLORS.primary.MEDIUM_GRAY,
            }}>
            <FlatList
              keyboardShouldPersistTaps={'handled'}
              contentContainerStyle={{paddingHorizontal: 16}}
              data={comments}
              renderItem={({item}) => (
                <View style={{flexDirection: 'row', paddingBottom: 16}}>
                  <FastImage
                    style={{width: 25, height: 25, borderRadius: 20}}
                    source={item.source}
                  />
                  <View style={{marginLeft: 8}}>
                    <Text style={styles.nameText}>@{item.username}</Text>
                    <Text style={styles.commentText}>{item.text}</Text>
                  </View>
                </View>
              )}
              keyExtractor={item => '_' + item.username}
            />
            <Animated.View
              style={[
                {
                  height: 80,
                  justifyContent: 'center',
                  paddingHorizontal: 16,
                  backgroundColor: COLORS.primary.ANTHRACITE,
                },
                headerAnimatedStyle,
              ]}>
              <TextInputContainer
                style={{backgroundColor: COLORS.primary.DARK_GRAY}}
                withMessage={false}>
                <TextInputBase
                  onSubmitEditing={() => {
                    comments.push({
                      text: comment,
                      source: require('..//../../../assets/images/profile-pic.png'),
                      username: 'Rita Tulia',
                    });
                    Keyboard.dismiss();
                    setComment('');
                  }}
                  placeholder={'Your comment'}
                  onChangeText={t => setComment(t)}
                  value={comment}
                  color={COLORS.primary.LIGHT_BACKGROUND}
                  containerStyle={styles.loginContainer}
                  autoCapitalize={'none'}
                  returnKeyType="done"
                  blurOnSubmit={false}
                />
              </TextInputContainer>
            </Animated.View>
          </View>
        </View>
      </BaseModal>
    );
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    maxHeight: '80%',
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    overflow: 'hidden',
  },
  shadow: {
    elevation: 6,
    shadowColor: COLORS.primary.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary.MEDIUM_GRAY,
  },
  title: {
    fontSize: 22,
    lineHeight: 27,
    fontFamily: FONT_FAMILY.MontserratRegular,
    textAlign: 'center',
    color: COLORS.primary.LIGHT_BACKGROUND,
  },

  pickerRowContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  nextButton: {
    fontSize: 15,
    color: COLORS.primary.PWCC_YELLOW,
    fontFamily: FONT_FAMILY.MontserratBold,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  cancelButton: {
    fontSize: 15,
    color: COLORS.primary.PWCC_YELLOW,
    fontFamily: FONT_FAMILY.MontserratMedium,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  itemTitle: {
    fontSize: 15,
    color: COLORS.primary.ANTHRACITE,
    fontFamily: FONT_FAMILY.MontserratMedium,
  },
  commentText: {
    fontSize: 14,
    color: COLORS.primary.LIGHT_BACKGROUND,
    fontFamily: FONT_FAMILY.MontserratMedium,
    letterSpacing: 0.5,
    lineHeight: 18,
    paddingRight: 8,
  },
  nameText: {
    fontSize: 12,
    color: COLORS.primary.LIGHT_BACKGROUND,
    fontFamily: FONT_FAMILY.MontserratMedium,
    letterSpacing: -0.4,
    lineHeight: 12,
    marginBottom: 5,
  },
  loginContainer: {
    paddingHorizontal: 0,
  },
});
