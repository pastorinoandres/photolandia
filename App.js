import React from 'react';
import ReactNavigationContainer from './app/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function App() {
  return (
    <SafeAreaProvider>
      <ReactNavigationContainer/>
    </SafeAreaProvider>
  );
}


export default App;
