import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Notifications extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>This is Notifications page!</Text>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
})