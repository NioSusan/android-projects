import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { fetchTrendingVideos } from '../actions/actionCreators';
import VideoItem from './videoItem'
import { NavigationEvents } from 'react-navigation';

class Trending extends Component{

    render(){
        return(
            <View>  
                <NavigationEvents
                    onDidFocus={payload => this.props.fetchTrendingVideos()}
                />
                <FlatList
                    data={this.props.data.items}
                    renderItem={(video) =><VideoItem navigation={this.props.navigation} video={video.item} />}
                    keyExtractor={(item)=> item.etag}
                    ItemSeparatorComponent={()=><View style={{height: 0.5, backgroundColor:"#cccccc"}}/>}
                />
            </View>
            
        )
    }
}

function mapStateToProps(reduxState){
    console.log('Trending page: reduxState =>', reduxState.videos)
    return{
        loading: reduxState.videos.loading,
        error: reduxState.videos.error,
        data: reduxState.videos.data,
    }
}
export default connect(mapStateToProps, { fetchTrendingVideos })(Trending);
