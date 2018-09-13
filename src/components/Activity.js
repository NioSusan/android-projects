import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation'
import Notifications from './Notifications'
import Icon from 'react-native-vector-icons/MaterialIcons';
class Activity extends Component{
    render(){
        return(
            <View>
                <Text>This is Inbox Page!</Text>
            </View>
            
        )
    }
}

export default createMaterialTopTabNavigator({
    Activity: {
        screen: Activity,
        navigationOptions:{
            tabBarLabel: 'Messages',
        }
    },
    Notifications: {
        screen: Notifications,
        navigationOptions:{
            tabBarLabel: 'Notifications',
        }
    }
}, {
    tabBarOptions: {
            style: {
                backgroundColor: '#03a9f4',
            }
    },
})
