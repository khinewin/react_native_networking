import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Patients from './screens/Patients'
import Newpatient from './screens/Newpatient'
import Check from './screens/Check'

export default class App extends React.Component {
  render(){

    const MyStack=createStackNavigator({
      Check:{
        screen: Check
      },
        Patients: {
          screen :Patients
        },
        Newpatient: {
          screen: Newpatient
        }
    },{
      initialRouteName: "Check",
      defaultNavigationOptions:{
        header:null
      }
    })

    const AppContainer=createAppContainer(MyStack)

    return(<AppContainer></AppContainer>)
  }
}

