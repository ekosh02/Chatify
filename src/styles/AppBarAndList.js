import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainPurple,
    flex: 1,
    justifyContent: 'flex-end',
  },
  listContainer: {
    height: '88%',
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: '30%',
  },
  shell: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  nameTextStyle: {
    fontSize: 18,
    color: Colors.blackText,
    fontWeight: '600',
  },
  descriptionTextStyle: {
    color: Colors.darkGray,
  },
});
