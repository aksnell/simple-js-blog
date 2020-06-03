import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import PostScreen from './src/screens/PostScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
  {
  Index: IndexScreen,
  Post: PostScreen,
  Create: CreateScreen,
  Edit: EditScreen,
  }, 
  {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs',
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App/>
    </Provider>
  );
}

