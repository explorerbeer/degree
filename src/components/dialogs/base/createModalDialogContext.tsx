import React, {
  createContext,
  memo,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactNative from 'react-native';
import {useForceUpdate} from '../../../hooks';

const unstable_batchedUpdates = (ReactNative as any).unstable_batchedUpdates;

export type TDismissCallback = () => void;

export interface IBaseModalDialogProps {
  visible: boolean;
  onRequestDismiss: () => void;
  onDismiss?: () => void;
}

interface IRenderArgs<Options> extends IBaseModalDialogProps {
  options: Options;
}

export type TRenderCallback<Options> = (
  args: IRenderArgs<Options>,
) => ReactElement;

export interface IBaseModalDialogContext<Options> {
  show: (opt: Options) => void;
  dismiss: (callback?: TDismissCallback) => void;
}

export default function createModalDialogContext<Options>(
  renderCallback: TRenderCallback<Options>,
) {
  const BaseModalDialogContext = createContext<
    IBaseModalDialogContext<Options>
  >({
    show: () => 0,
    dismiss: () => 0,
  });

  return {
    Context: BaseModalDialogContext,
    Provider: memo(({children}) => {
      const [, forceUpdate] = useForceUpdate();
      const visibleRef = useRef(false);
      const [options, setOptions] = useState<Options>();
      const [dismissCallback, setDismissCallback] = useState<{
        callback: TDismissCallback;
      }>();

      const dismiss = useCallback(() => {
        visibleRef.current = false;
        forceUpdate();
      }, [forceUpdate]);

      const value = useMemo<IBaseModalDialogContext<Options>>(
        () => ({
          show: opt => {
            visibleRef.current = true;
            setOptions(opt);
          },
          dismiss: callback => {
            if (visibleRef.current) {
              visibleRef.current = false;
              setDismissCallback({
                callback: () =>
                  unstable_batchedUpdates(() => {
                    setOptions(undefined);
                    setDismissCallback(undefined);
                    callback && callback();
                  }),
              });
            }
          },
        }),
        [],
      );

      return (
        <BaseModalDialogContext.Provider value={value}>
          {children}
          {options
            ? renderCallback({
                options,
                visible: visibleRef.current,
                onRequestDismiss: dismiss,
                onDismiss: dismissCallback?.callback,
              })
            : null}
        </BaseModalDialogContext.Provider>
      );
    }),
  };
}
