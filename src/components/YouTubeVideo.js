import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class YouTubeVideo extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>THIS IS YouTubeVideo PAGE!</Text>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
})