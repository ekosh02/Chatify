import {
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import React, { useEffect, useState } from 'react'

import { getProject } from '../../func/getApi';
import { chatList } from './AlbumsScreenDetails';
import { styles } from './../../styles/AppBarAndList'
import Actions from '../../styles/Actions';

export function ContactScreen(props) {


  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const api = 'photos'

  useEffect(() => {
    getProject(setData, setLoading, api)
  }, []);


  return (
    <View>
       {chatList(loading, data, props)}
    </View>
  );
}
