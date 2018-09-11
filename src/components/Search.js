import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
import {StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';


export default class Search extends Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <TouchableOpacity>
                        <Icon onPress={() => this.props.navigation.navigate('Home')} name='arrow-back' size={25} />
                    </TouchableOpacity>
                   
                    <View style={styles.rightNav}>
                        <TouchableOpacity>
                            <Icon style={styles.navItem} name='mic' size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TextInput placeholder="Search YouTube"/> 
                </View>
            </View>
        )
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
    
});

