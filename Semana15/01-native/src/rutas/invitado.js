import HomeScreen from './../screens/Home';
import LoginScreen from './../screens/Login';
import RegisterScreen from './../screens/Register';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
const InvitadoNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Login: {
            screen: LoginScreen
        },
        Register: {
            screen: RegisterScreen
        }
    },
    {
        initialRouteName: 'Home'
    }
);
export default createAppContainer(InvitadoNavigator);