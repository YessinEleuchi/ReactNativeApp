import 'react-native-gesture-handler'
import * as React from 'react'
import { store } from './src/state/store'
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux'
import SplashNav from './src/navigation/SplashNav'
import Toast from 'react-native-toast-message'
const App = () => {
  return (
    <NavigationContainer>

      <Provider store={store}>
        <SplashNav />
      </Provider>
      <Toast />
    </NavigationContainer>

  )
}

export default App