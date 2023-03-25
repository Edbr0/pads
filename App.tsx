import { ThemeProvider } from 'styled-components/native' 
import Home from './src/screens/Home'
import dark from './src/theme/dark';
import light from './src/theme/light';
import { StatusBar, StyleSheet, Switch, View, Text } from 'react-native'
import { useState } from 'react';

export default function App() {

  const [isEnabled, setIsEnabled] = useState(true);
  const [themeSelected, setThemeSelected] = useState(dark)

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    isEnabled ? setThemeSelected(light) : setThemeSelected(dark)
  } 

  return (
    <ThemeProvider theme={themeSelected}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {/* <View style={ styles.stack }>
          <Switch  
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text style={ styles.title }>
            Dark mode { isEnabled ? 'on' : 'off'}
          </Text>
        </View> */}
        <Home/>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  stack:{
    justifyContent:'flex-end',
    backgroundColor: dark.COLORS.PRIMARY,
    flexDirection: 'row',
    paddingRight: 10,
    width: '100%'
 },
 title:{
  color: dark.COLORS.TEXT_PRIMARY,
  fontSize: 20,
  fontWeight: "400",
  marginTop: 8
}
})