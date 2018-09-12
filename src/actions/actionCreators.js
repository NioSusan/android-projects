import {
    FETCH_VIDEOS,
    LOADING
} from './types';

import { addError } from './errors';
import axios from 'axios'

function handleRequest(){
    console.log('actionCreators: hit handleRequest!')
    return{
        type: LOADING,
    }
}

function handleGetVideos(data){
    console.log('actionCreators: hit handleGetVideos! data =>', data)
    return{
        type: FETCH_VIDEOS,
        payload: data
    }
}

export function fetchTrendingVideos(){
    return dispatch => {
        dispatch(handleRequest())
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&key=AIzaSyBugMM-xZoRiwlngP5Pm676T_PcAngpEZ8&maxResults=8')
            .then(({data}) => {
                console.log('actionCreators: fetchVideos() data ==>',data)
                dispatch(handleGetVideos(data))
            })
            .catch(error => {
                console.log('fetchVideos() error ==>',error.message)
                dispatch(addError(error.message))
            })
    }
}

export function fetchSubcribedVideos(){
    return dispatch => {
        dispatch(handleRequest())
        axios.get('https://www.googleapis.com/youtube/v3/videos?videoCategoryId=10&part=snippet,statistics&chart=mostPopular&regionCode=US&key=AIzaSyBugMM-xZoRiwlngP5Pm676T_PcAngpEZ8&maxResults=8')
            .then(({data}) => {
                console.log('actionCreators: fetchSubcribedVideos() data ==>',data)
                dispatch(handleGetVideos(data))
            })
            .catch(error => {
                console.log('fetchSubcribedVideos() error ==>',error.message)
                dispatch(addError(error.message))
            })
    }
}
