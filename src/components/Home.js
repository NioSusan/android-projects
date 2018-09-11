import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './videoItem'
import YTSearch from 'youtube-api-search';
import { createBottomTabNavigator } from 'react-navigation'
import Trending from './Trending'
import Subscriptions from './Subscriptions'
import Activity from './Activity'
import Library from './Library'

const API_KEY = 'AIzaSyBugMM-xZoRiwlngP5Pm676T_PcAngpEZ8';

export class Home extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props){
        super(props)
        this.state = {
        videos: [],
        selectedVideo: null
        }
        this.videoSearch('music')
    }
  
  videoSearch(term) {
    YTSearch ({ key: API_KEY, term: term}, (videos) => {
        this.setState({ 
             videos: videos,
             selectedVideo: videos[0]
         })
    })
  }
  
  componentDidMount(){
    this.videoSearch('music')
  
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('../images/logo.png')} style={{width: 98, height: 22}}></Image>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon onPress={() => this.props.navigation.navigate('UploadVideo')} style={styles.navItem} name='videocam' size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon onPress={() => this.props.navigation.navigate('Search')} style={styles.navItem} name='search' size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon onPress={() => this.props.navigation.navigate('Account')} style={styles.navItem} name='account-circle' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View>        
          <FlatList
            data={this.state.videos}
            renderItem={(video) =><VideoItem video={video.item} />}
            keyExtractor={(item)=> item.etag}
            ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor:"#cccccc"}}/>}
          />
        </View>
      </View>
    );
  }
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
  body: {
    flex: 1
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4,
  }
});

export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            header: null,
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="home" size={25}></Icon>
            )
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions:{
            header: null,
            tabBarLabel: 'Trending',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="whatshot" size={25}></Icon>
            )
        }
    },
    Subscriptions: {
        screen: Subscriptions,
        navigationOptions:{
            header: null,
            tabBarLabel: 'Subscriptions',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="subscriptions" size={25}></Icon>
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions:{
            header: null,
            tabBarLabel: 'Activity',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="notifications" size={25}></Icon>
            )
        }
    },
    Library: {
        screen: Library,
        navigationOptions:{
            header: null,
            tabBarLabel: 'Library',
            tabBarIcon: ({tintColor}) =>(
                <Icon name="folder" size={25}></Icon>
            )
        }
    },
   
})