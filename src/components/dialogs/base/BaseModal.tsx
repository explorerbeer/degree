import React, {memo, ReactElement} from 'react';
import {Platform, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Modal, {SupportedAnimation} from 'react-native-modal';
import {IBaseModalDialogProps} from './createModalDialogContext';

type TAnimationType = 'fade' | 'slideFromBottom';

const animations: Record<
  TAnimationType,
  {in: SupportedAnimation; out: SupportedAnimation}
> = {
  fade: {in: 'fadeIn', out: 'fadeOut'},
  slideFromBottom: {in: 'slideInUp', out: 'slideOutDown'},
};

export interface IBaseModalProps extends IBaseModalDialogProps {
  avoidKeyboard?: boolean;
  animationType?: TAnimationType;
  children?: ReactElement;
  style?: StyleProp<ViewStyle>;
}

const BaseModal = memo<IBaseModalProps>(
  ({
    visible,
    avoidKeyboard,
    animationType = 'fade',
    onRequestDismiss,
    onDismiss,
    children,
    style,
  }) => {
    return (
      <Modal
        isVisible={visible}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
        avoidKeyboard={avoidKeyboard && Platform.OS === 'ios'}
        onDismiss={onDismiss}
        onModalHide={Platform.OS === 'android' ? onDismiss : undefined}
        onBackdropPress={onRequestDismiss}
        onBackButtonPress={onRequestDismiss}
        animationIn={animations[animationType].in}
        animationOut={animations[animationType].out}
        style={[styles.container, style]}>
        {children}
      </Modal>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
});

export default BaseModal;
