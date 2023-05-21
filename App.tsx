import React from 'react';
import {MainNavigator} from './src/navigation/MainNavigator';
import {AlertDialogProvider} from './src/components/dialogs/alert';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store';
import Loading from './src/components/loading';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <AlertDialogProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <MainNavigator />
        </PersistGate>
      </Provider>
    </AlertDialogProvider>
  );
};

export default App;
