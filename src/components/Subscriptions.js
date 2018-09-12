import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import { connect } from 'react-redux';
import { fetchSubcribedVideos } from '../actions/actionCreators';
import VideoItem from './videoItem'
import { NavigationEvents } from 'react-navigation';

class Subscriptions extends Component{
    
    render(){
        return(
            <View>  
                <NavigationEvents
                    onDidFocus={payload => this.props.fetchSubcribedVideos()}
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
    console.log('Subscription page: reduxState =>', reduxState.videos)
    return{
        loading: reduxState.videos.loading,
        error: reduxState.videos.error,
        data: reduxState.videos.data,
    }
}
export default connect(mapStateToProps, { fetchSubcribedVideos })(Subscriptions);
