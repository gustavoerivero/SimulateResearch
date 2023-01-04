import { createNativeStackNavigator } from '@react-navigation/native-stack'

import BottomNavigation from './BottomNavigation'

import styles from './styled-components/styles'
import DataTable from '../pages/DataTable'

const Stack = createNativeStackNavigator()

const stackRoutes = [
  {
    name: 'SignIn',
    component: BottomNavigation,
    options: {
      headerShown: false,
    }
  },
  {
    name: 'Resultados de la simulación',
    component: DataTable,
    options: {
      headerShown: true,
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