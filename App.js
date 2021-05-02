import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {creatAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadStory from "./Screens/ReadStory"
import WriteStory from "./Screens/WriteStory"


class App extends React.Component{
  render(){
    return(
      < AppContainer />
    )
  }
}

const TabNvigator = createBottomTabNavigator({
  ReadStory: {screen: ReadStory},
  WriteStory: {screen: WriteStory}
})

const AppContainer = createAppContainer(TabNavigator)