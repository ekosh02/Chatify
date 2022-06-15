import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { Indicator } from '../../styles/ActivityIndicator'
import { getProject } from '../../func/getApi'

import { Actions } from '../../styles/Actions'
import { styles } from '../../styles/AppBarAndList'

export function UserScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const api = 'users'

  useEffect(() => {
    getProject(setData, setLoading, api)
  }, []);


  return (
    <View style={styles.container}>
      <Actions />
   
      {chatList(loading, data, props)}

    </View>
  );

}

function chatList(loading, data, props) {

  return <View style={styles.listContainer}>
    {loading ? (
      <Indicator />
    ) : (
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RenderProject item={item} props={props} />
        )}
        contentContainerStyle={styles.contentContainerStyle} />
    )}
  </View>
}

const RenderProject = ({ item, props }) => {
  let params = {
    id: item.id,
    name: item.name,
    username: item.username,
    phone: item.phone,
    email: item.email,
    webside: item.wedside,
    bs: item.company.bs,
    catchPhrase: item.company.catchPhrase,
    companyName: item.company.name,
    street: item.address.street,
    suite: item.address.suite,
    city: item.address.city,
    zipcode: item.address.zipcode,

  }

  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() =>
        props.navigation.navigate('UserScreenDetails', params)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  )
}

