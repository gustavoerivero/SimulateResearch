import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
})

export default styles