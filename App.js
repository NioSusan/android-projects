import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation'
import Home from './src/components/Home'
import Search from './src/components/Search'
import UploadVideo from './src/components/UploadVideo'
import Account from './src/components/Account'

export default class App extends Component{
    render() {
      return (
        <AppStackNavigator />
       
      )
    }
}
const AppStackNavigator =  createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions:{
      header: null
    }
  },
  Search: Search,
  UploadVideo: UploadVideo,
  Account: Account
})


