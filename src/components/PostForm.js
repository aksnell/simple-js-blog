import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const PostForm = ( { onSubmit, initialValues = { title: '', content: '' } } ) => {
    
    const { addPost } = useContext(Context);
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text
                style={styles.label}
            >
                Title</Text>
            <TextInput
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />
            <Text
                style={styles.label}
            >
                Content
            </Text>
            <TextInput
                value={content}
                onChangeText={text => setContent(text)}
                style={styles.input}
            />
            <Button
                title='Add Post'
                onPress={() => {
                        onSubmit(title, content);
                    }
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5,
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
});

export default PostForm;