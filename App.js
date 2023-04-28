import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homescreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './screens/About';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Cart from './screens/cart';
const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();
export default function App() {
  
  return (
    
       <TailwindProvider>
       <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'About') {
              iconName = focused
                ? 'apps'
                : 'apps-outline';
            } else if (route.name === 'HITECMART') {
              iconName = focused ? 'home' : 'home-outline';
            }
            else if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }
            else if (route.name === 'Wish') {
              iconName = focused ? 'heart-circle' : 'heart-circle-outline';
            }
            else if (route.name === 'user') {
              iconName = focused ? 'person' : 'person-outline';
            }

            
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'tomato',
        })} >
          <Tab.Screen name="HITECMART" component={HomeScreen} options={{ tabBarLabel: '' }} />
          <Tab.Screen name="About" component={About} options={{ tabBarLabel: '' }} />
          <Tab.Screen name="cart" component={Cart} options={{ tabBarLabel: '' }}   />
          <Tab.Screen name="Wish" component={About} options={{ tabBarLabel: '' }} />
          <Tab.Screen name="user" component={About} options={{ tabBarLabel: '' }} />
        </Tab.Navigator>
        </NavigationContainer>
        </TailwindProvider>
       
  );
}
