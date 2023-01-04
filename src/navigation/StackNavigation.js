import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigation from './BottomNavigation'

import styles from './styled-components/styles'

const Stack = createNativeStackNavigator()

const stackRoutes = [
  {
    name: 'SignIn',
    component: BottomNavigation,
    options: {
      headerShown: false,
    }
  },

]

const StackNavigation = () => {

  return (
    <Stack.Navigator
      initialRouteName={stackRoutes[0].name}
      screenOptions={styles.stackStyles}
    >
      {stackRoutes
        .map(({ name, component, options }) => (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={options}
          />
        ))}
    </Stack.Navigator>
  )

}

export default StackNavigation