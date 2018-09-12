import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { fetchTrendingVideos } from '../actions/actionCreators';
import VideoItem from './videoItem'

class Trending extends Component{

    componentDidMount(){
        console.log('Trending page: componentDidMount()')
        this.props.fetchTrendingVideos()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.data !== this.props.data){
            // this.props.fetchTrendingVideos()
        }
    }
    render(){
        return(
            <View>  
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
