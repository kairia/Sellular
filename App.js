import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import Navigation from './src/navigation';
import { store, persistor } from './src/state/store';

const App = () => {

  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <SafeAreaProvider> */}
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      {/* </SafeAreaView> */}
    {/* </SafeAreaProvider> */}
      </PersistGate>
    </Provider>
    

  );
}

export default App;