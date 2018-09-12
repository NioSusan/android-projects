import {
    FETCH_VIDEOS,
    LOADING,
    ADD_ERROR
} from '../actions/types';

const initialStateVideos= {
    loading:false,
    error: null,
    data: [],
}

export default function (state = initialStateVideos, action) {
    switch(action.type){
        case LOADING:
        console.log('Reducer: LOADING')
            return {...state, loading: true };
        case ADD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: []
            };
        case FETCH_VIDEOS:
        console.log('Reducer: FETCH_VIDEOS')
        console.log('videosReducer: action.payload =>', action.payload)
            return {
                ...state, 
                loading: false,
                error: null,
                data: action.payload
            };
        default:
            return state;
    }
}