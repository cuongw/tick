import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthLoadingScreen } from '../screens';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
