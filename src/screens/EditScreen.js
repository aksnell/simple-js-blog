import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';

import PostForm from '../components/PostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ( { navigation } ) => {
    
    const id = navigation.getParam('id');
    const { state, editPost } = useContext(Context);
    const post = state.find((post) => post.id === id);

    return ( 
        <PostForm 
            initialValues={{ title: post.title, content: post.content }}
            onSubmit={(title, content) => {
                editPost(id, title, content, () => navigation.pop());
            }}
        />
    )
    
};

const styles = StyleSheet.create({});

export default EditScreen;