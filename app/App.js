import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { backgroundColorPantalla } from './assets/colors/colores';
import Home from './screens/Home/Home';

const App = () => {
  return (
   <>
        <StatusBar backgroundColor={backgroundColorPantalla} barStyle={'light-content'} />
        <Home/>
   </>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: backgroundColorPantalla,
        flex: 1,
    }
});

export default App