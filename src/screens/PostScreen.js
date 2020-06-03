import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const PostScreen = ( { navigation } ) => {
    
    const { state } = useContext(Context);

    const post = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{post.title}</Text>
            <Text>{post.content}</Text>
        </View>
    );
};

PostScreen.navigationOptions = ( { navigation } ) => {
    return {
        headerRight: <TouchableOpacity
                        onPress={() => navigation.navigate('Edit', {
                            id: navigation.getParam('id'),
                        })}
                     >
                        <FontAwesome name='pencil' size={35}/>
                     </TouchableOpacity>,
    };
};

const styles = StyleSheet.create({});

export default PostScreen;