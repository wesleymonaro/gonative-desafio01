import {
  StyleSheet,
  Platform,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        paddingTop: 30,
        height: 80,
      },
      android: {
        paddingTop: 0,
        height: 50,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    fontWeight: '800',
    color: '#333',
    fontSize: 16,
  },
});

export default styles;
