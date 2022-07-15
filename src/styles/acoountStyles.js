import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from './colors';

const {width, height} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  appBar: {
    height: 70,
    borderBottomWidth: 1.5,
    borderColor: Colors.whiteGray,
    backgroundColor: 'white',
    marginHorizontal: 0,
  },
  arrowBackStyle: {
    height: 28,
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
    left: 16,
    top: 20,
    position: 'absolute',
  },
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  nameContainerStyle: {
    top: 2,
    left: 50,
    marginHorizontal: 16,
    marginVertical: 16,
    alignSelf: 'flex-start',
    maxWidth: width - 110,
    position: 'absolute',
  },
  nameTextStyle: {
    fontSize: 28,
    fontWeight: '600',
    color: Colors.blackText,
  },
  formContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 40,
    marginHorizontal: 16,
    marginTop: 30,
    borderRadius: 20,
  },
  textInput: {
    marginVertical: 10,
    paddingHorizontal: 13,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f7f7f7',
  },
  pressContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,

    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Colors.mainPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPress: {
    color: 'white',
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressContainer2: {
    top: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPress2: {
    color: Colors.mainPurple,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginKeyboard: {
    marginBottom: '30',
  },
});
