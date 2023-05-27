import React, { useState } from 'react';
import { MainNavigator } from './src/navigation/MainNavigator';
import { AlertDialogProvider } from './src/components/dialogs/alert';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import Loading from './src/components/loading';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeContext } from './src/ThemeContext';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <AlertDialogProvider>
        <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <MainNavigator />
          </PersistGate>
        </Provider>
      </AlertDialogProvider>
    </ThemeContext.Provider>
  );
};

export default App;
