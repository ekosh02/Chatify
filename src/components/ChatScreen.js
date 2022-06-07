import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'
import React, { useEffect, useState, useContext } from 'react';
import { AppBar } from '../tab/AppBar';

import { Actions } from '../tab/Actions';
import axios from 'axios';
import Indicator from './../styles/ActivityIndicator' 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../color/colors';



export function ChatScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    getProject()
  }, []);

  const getProject = () => {
    axios
      .get('users')
      .then(result => {
        console.log('photos is worked', result.data);
        setData(result.data)
        setLoading(false)
       
      })
      .catch(error => {
        console.log('Error at posts : ', error);

      });
  }

  return (
   <View style={styles.purpleBackgroup}>
     <AppBar/>
     <Actions/>

       {loading ? (
       <Indicator/>
       ) : (
        <FlatList
          data={data}
          // ListHeaderComponent={({item, index, props}) => (
          //   <RenderProjectRow
          //   data={data}
          //   props={props}
          //   item={item}
          //   />
          // )}
          renderItem={({item, index, props}) => (
            <RenderProject item={item} index={index} props={props} />
          )}
        />
      )}

   </View>  
  );

}


const RenderProject = ({item, index, props}) => {
  const [state, setState] = useState(false);


  return (<View style={styles.shell}><View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.titleTextStyle}>{item.name}</Text>
        <Text>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
    </View>)
}

const RenderProjectRow = ({item, index, props, data}) => {
  const [state, setState] = useState(false);

  useEffect(() => {}, []);
  return (<View style={styles.test}>
  <Text>{data[0].name}</Text>
    </View>)
}



export const styles = StyleSheet.create({
  purpleBackgroup: {
    backgroundColor: Colors.mainPurple,
  },
  shell: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleTextStyle: {
    fontSize: 18,
    fontWeight: '600',
  }, 
})
