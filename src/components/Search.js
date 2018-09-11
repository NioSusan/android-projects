import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import YTSearch from 'youtube-api-search';
import VideoItem from './videoItem'
const API_KEY = 'AIzaSyBugMM-xZoRiwlngP5Pm676T_PcAngpEZ8';
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            videos: []
        };
    }

    static navigationOptions = {
        header: null
    }
    videoSearch(term) {
        YTSearch ({ key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                 videos: videos,
             })
        })
       
    }
    handleKeyDown = (e) => {
       if(e.nativeEvent.key==='Enter'){
           this.videoSearch(this.state.term)
       }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Icon onPress={() => this.props.navigation.navigate('Home')} name='arrow-back' size={25} />
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.searchInput} 
                        placeholder="Search YouTube" 
                        onChangeText={(term) => this.setState({term})}
                        onKeyPress={this.handleKeyDown.bind(this)}
                        value={this.state.term}
                        /> 
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='mic' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>  
                    <FlatList
                        data={this.state.videos}
                        renderItem={(video) =><VideoItem navigation={this.props.navigation} video={video.item} />}
                        keyExtractor={(item)=> item.etag}
                        ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor:"#cccccc"}}/>}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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
    searchInput:{
        width: 300,
        paddingLeft: 30,
        fontSize: 20,
    }
    
});

