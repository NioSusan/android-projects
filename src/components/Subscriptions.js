import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { fetchSubcribedVideos } from '../actions/actionCreators';
import VideoItem from './videoItem'

class Subscriptions extends Component{
    componentDidMount(){
        console.log('Subcription page: componentDidMount()')
        this.props.fetchSubcribedVideos()
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps.data !== this.props.data){
            // console.log('Subcription page: componentDidUpdate()this.props.data', this.props.data)
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
export default connect(mapStateToProps, { fetchSubcribedVideos })(Subscriptions);
