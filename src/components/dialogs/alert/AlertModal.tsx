import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseModal, {IBaseModalProps} from '../base/BaseModal';

export interface IAlertOptions {
  title?: string;
  message?: string;
  positiveText?: string;
  negativeText?: string;
  neutralText?: string;
  onPositivePress?: () => void;
  onNegativePress?: () => void;
  onNeutralPress?: () => void;
}

interface IAlertModalProps extends IBaseModalProps, IAlertOptions {}

const AlertModal = memo<IAlertModalProps>(({title, message, ...modalProps}) => {
  return (
    <BaseModal {...modalProps}>
      <View
        style={[styles.container, modalProps.visible ? styles.shadow : null]}>
        <View style={styles.headerContainer}>
          {title ? (
            <>
              <Text testID={`alert-title-${title}`} style={styles.title}>
                {title}
              </Text>
            </>
          ) : null}
          {message ? (
            <>
              <View style={styles.messageContainer}>
                <Text testID={`alert-title-${message}`} style={styles.message}>
                  {message}
                </Text>
              </View>
            </>
          ) : null}
        </View>
      </View>
    </BaseModal>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    maxWidth: 280,
    paddingVertical: 16,
  },
  shadow: {
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  headerContainer: {
    paddingHorizontal: 9,
    paddingBottom: 8,
  },
  messageContainer: {
    height: 79,
  },
  title: {
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
  },
  btn: {
    marginHorizontal: 16,
  },
});

export default AlertModal;
