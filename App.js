import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import VideoItem from './src/components/videoItem'
import data from './data.json'

type Props = {};
export default class App extends Component<Props> {
  componentDidMount(){
    // axios.get('https://swapi.co/api/people')
    //   .then(({data}) => {
    //     console.log(data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image source={require('./src/images/logo.png')} style={{width: 98, height: 22}}></Image>
          <View style={styles.rightNav}>
            <TouchableOpacity>
              <Icon style={styles.navItem} name='search' size={25} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon style={styles.navItem} name='account-circle' size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <FlatList
            data={data.items}
            renderItem={(video) =><VideoItem video={video.item} />}
            keyExtractor={(item)=> item.id}
            ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor:"#cccccc"}}/>}
          />
        </View>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="home" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="whatshot" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="subscriptions" size={25}></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Icon name="folder" size={25}></Icon>
          </TouchableOpacity>
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
