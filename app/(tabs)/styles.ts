import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fdfcfe',
    marginTop: 48,
  },
  eventDate: {
    fontSize: 16,
    color: '#6b6b6b',
  },
  input: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button:{
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form:{
    width: '100%',
    flexDirection: 'row',
    gap: 16,
    marginTop: 36,
    marginBottom: 42,
  }
});