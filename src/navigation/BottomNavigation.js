import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../styled-components/colors'

import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styled-components/styles'
import Home from '../pages/Home'
import CalculatorPage from '../pages/CalculatorPage'

const Tab = createBottomTabNavigator()

const bottomRoutes = [
  {
    name: 'Home',
    component: Home,
    Icon: ({ color, size }) => (
      <Icon
        name={color === colors.base ? 'home' : 'home-outline'}
        color={color}
        size={size}
      />
    )
  },
  {
    name: 'Calculator',
    component: CalculatorPage,
    Icon: ({ color, size }) => (
      <Icon
        name={color === colors.base ? 'calculator' : 'calculator-outline'}
        color={color}
        size={size}
      />
    )
  },
]

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.base,
        tabBarInactiveTintColor: colors.navBar.inactiveColor,
        tabBarInactiveBackgroundColor: colors.base,
        tabBarActiveBackgroundColor: colors.navBar.activeColor,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '7%',
        },
      }}
    >
      {bottomRoutes.map(({ name, component, Icon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: Icon,
            tabBarShowLabel: false,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default BottomNavigation