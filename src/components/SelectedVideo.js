import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, WebView, Image, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default SelectedVideo = (props) =>{
   if(props){
       console.log(props.navigation.state.params.video)
    }
    let videoId = props.navigation.state.params.video.id.videoId
    let title = props.navigation.state.params.video.snippet.title
    let channelTitle = props.navigation.state.params.video.snippet.channelTitle
    return(
        <View style={styles.container}>
            <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Icon onPress={() => props.navigation.navigate('Home')} name='arrow-back' size={25} />
                    </TouchableOpacity>
            </View>
            <View style={styles.videoContainer}>
                <WebView
                    source={{uri: `https://www.youtube.com/embed/${videoId}`}}
                    style={styles.webview}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                    />    
            </View>
            <View style={styles.videoDetails}>
                <Text style={styles.videoTitle}>{title}</Text>
                <View style={styles.descContainer}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/women/0.jpg'}} style={{width: 50, height: 50, borderRadius: 25}}/>
                    <Text style={styles.videoChannelTitle}>{channelTitle}</Text>
                </View>
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 55,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 25,
    },
    webview: {
        flex: 1,
        width: '100%',
        height: '50%'
    },
    videoContainer:{
        height: 250,
    },
    videoDetails: {
        paddingTop: 10,
        paddingHorizontal: 15,
        flex: 1
    },
    videoTitle: {
        fontSize: 17,
        color: '#3c3c3c'
    },
    videoChannelTitle: {
        fontSize: 20,
        paddingTop: 3,
        paddingHorizontal: 10,
    },
    descContainer: {
        flexDirection: 'row',
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: "gray",
    },
    
});