import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    borderRadius: 6,
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontWeight: '800',
    color: '#333',
    fontSize: 16,
    textAlign: 'center',
  },
  author: {
    color: '#999',
    marginBottom: 10,
    marginTop: 5,
    fontSize: 12,
  },
  content: {
    color: '#666',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 10,
    textAlign: 'left',
    lineHeight: 20,
    fontSize: 12,
  },
});

export default styles;
