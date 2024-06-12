import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    padding: 16,
    backgroundColor: '#f0f2f5',
  },
  itemContainer: {
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
