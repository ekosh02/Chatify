import { StyleSheet } from 'react-native';
import { Colors } from '../color/colors';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainPurple,
    flex: 1,
    justifyContent: 'flex-end'
  },
  listContainer: {
    height: "86%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  contentContainerStyle: {
    paddingTop: 20,
  },
  shell: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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