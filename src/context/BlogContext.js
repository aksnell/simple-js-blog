import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        case 'ADD_POST':
            return [...state, {
                id: Math.floor((Math.random() * 99999)),
                title: action.payload.title,
                content: action.payload.content, 
            }];
        case 'REMOVE_POST':
            return state.filter((post) => post.id !== action.payload)
        case 'EDIT_POST':
            return state.map((post) => {
                return (post.id === action.payload.id) ? action.payload : post;
            })
        default:
            return state;
    }
};

const getPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get(`/posts`);
        dispatch({ type: 'GET_POSTS', payload: response.data })
    };
}

const addPost = (dispatch) => {
    return async (title, content, navigate) => {
        await jsonServer.post('/posts', { title, content });
        if (navigate) {
            navigate();
        }
    };
};

const removePost = (dispatch) => {
    return async id => {
        await jsonServer.delete(`/posts/${id}`)
        dispatch({ type: 'REMOVE_POST', payload: id });
    };
};

const editPost = (dispatch) => {
    return async (id, title, content, navigate) => {
        await jsonServer.put(`/posts/${id}`, {id, title, content})
        dispatch({ 
            type: 'EDIT_POST', 
            payload: { id, title, content } 
        });
        if (navigate) {
            navigate();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { getPosts, addPost, removePost, editPost }, 
    []
);