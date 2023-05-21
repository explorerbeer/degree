import React, {useContext, useMemo} from 'react';
import createModalDialogContext from '../base/createModalDialogContext';
import AlertModal, {IAlertOptions} from './AlertModal';

const {Context: AlertDialogContext, Provider: AlertDialogProvider} =
  createModalDialogContext<IAlertOptions>(({options, ...modalProps}) => (
    <AlertModal {...options} {...modalProps} />
  ));

export {AlertDialogContext, AlertDialogProvider};

export function useAlertDialog() {
  return useContext(AlertDialogContext);
}

// just for example of API
export function useExampleAlertDialog() {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: () =>
        alertDialog.show({
          title: 'Title',
          message: 'Message',
          positiveText: 'Yes',
          onPositivePress: () => alertDialog.dismiss(),
          negativeText: 'No',
          onNegativePress: () => alertDialog.dismiss(),
          neutralText: 'Cancel',
          onNeutralPress: () => alertDialog.dismiss(),
        }),
      dismiss: alertDialog.dismiss,
    }),
    [alertDialog],
  );
}

export function useConfirmAlertDialog() {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: (onConfirm: () => void, message?: string) =>
        alertDialog.show({
          title: 'Are you sure?',
          message: message,
          positiveText: 'Yes',
          onPositivePress: () => alertDialog.dismiss(onConfirm),
          neutralText: 'Cancel',
          onNeutralPress: () => alertDialog.dismiss(),
        }),
      dismiss: alertDialog.dismiss,
    }),
    [alertDialog],
  );
}

export function useConfirmLogOutAlertDialog() {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: (onConfirm: () => void) =>
        alertDialog.show({
          title: 'Logging out?',
          message: 'Are you sure you want to log out?',
          positiveText: 'Yes',
          onPositivePress: () => alertDialog.dismiss(onConfirm),
          neutralText: 'No',
          onNeutralPress: () => alertDialog.dismiss(),
        }),
      dismiss: alertDialog.dismiss,
    }),
    [alertDialog],
  );
}

export function useErrorAlertDialog() {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: (description?: string, positiveCallback?: () => void) =>
        alertDialog.show({
          title: 'Error',
          message: description,
          positiveText: 'Okay',
          onPositivePress: () => {
            alertDialog.dismiss();
            positiveCallback && positiveCallback();
          },
        }),
      dismiss: alertDialog.dismiss,
    }),
    [alertDialog],
  );
}

export function useShowUnsupportedYet() {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: () =>
        alertDialog.show({
          title: 'Unsupported on your operating system',
          positiveText: 'Okay',
          onPositivePress: () => alertDialog.dismiss(),
        }),
      dismiss: () => alertDialog.dismiss(),
    }),
    [alertDialog],
  );
}

export function useInfoAlert(
  title: string,
  message: string,
  callback?: () => void,
) {
  const alertDialog = useAlertDialog();

  return useMemo(
    () => ({
      show: () =>
        alertDialog.show({
          title,
          message,
          positiveText: 'Okay',
          onPositivePress: () => {
            callback && callback();
            alertDialog.dismiss();
          },
        }),
      dismiss: () => alertDialog.dismiss(),
    }),
    [alertDialog, callback, message, title],
  );
}
