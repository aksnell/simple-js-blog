import React, { useContext, useEffect } from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, removePost, getPosts } = useContext(Context);

    useEffect(() => {
        getPosts();        
        const listener = navigation.addListener('didFocus', () => {
            getPosts();
        });
        //Run when the component screen is completely de-mounted.
        return () => {
            listener.remove();
        };
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(post) => post.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Post', { id: item.id })}
                        >
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity
                                onPress={() => removePost(item.id)}
                            >
                                <Feather style={styles.icon} name='trash'/>
                            </TouchableOpacity>
                        </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ( { navigation }) => {
    return {
        headerRight: <TouchableOpacity
                        onPress={() => navigation.navigate('Create')}
                     >
                        <Feather name='plus' size={30}/>
                     </TouchableOpacity>,
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;