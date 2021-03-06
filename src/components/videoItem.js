import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SelectedVideo from './SelectedVideo'

export default class VideoItem extends Component {
    handleSelectedVideo = () => {
       console.log('SELECTED VIDEO!', this.props.video)
       this.props.navigation.replace('SelectedVideo', {video: this.props.video})
    }
    render(){
        let video = this.props.video;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handleSelectedVideo}>
                    <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height: 200}}/>
                </TouchableOpacity>
                    <View style={styles.descContainer}>
                        <Image source={{uri: 'https://randomuser.me/api/portraits/women/0.jpg'}} style={{width: 50, height: 50, borderRadius: 25}}/>
                        <View style={styles.videoDetails}>
                            <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                            <Text style={styles.videoChannelTitle}>{video.snippet.channelTitle + " · " + nFormatter((video.statistics ? video.statistics.viewCount  : 1000000), 1) }</Text>
                        </View>
                        <TouchableOpacity>
                            <Icon name="more-vert" size={20} color="#999999"/>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}

function nFormatter(num=1000000, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views';
  }

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    videoDetails: {
        paddingHorizontal: 15,
        flex: 1
    },
    videoTitle: {
        fontSize: 16,
        color: '#3c3c3c'
    },
    videoChannelTitle: {
        fontSize: 15,
        paddingTop: 3,
    }
})


  
  