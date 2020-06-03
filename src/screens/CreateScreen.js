import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import PostForm from '../components/PostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ( { navigation } ) => {
    
    const { addPost } = useContext(Context);

    return <PostForm onSubmit={(title, content) => {
        addPost(title, content, () => navigation.navigate('Index'));
    }}/>
};

const styles = StyleSheet.create({});

export default CreateScreen;