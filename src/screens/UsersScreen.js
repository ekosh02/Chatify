import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { Indicator } from '../styles/ActivityIndicator'
import { Colors } from '../color/colors'
import { newGetProject } from '../func/getApi'

import { Actions } from '../styles/Actions'

export function UsersScreen(props) {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  const api = 'users'

  useEffect(() => {
    getProject()
  }, []);

  const getProject = newGetProject(setData, setLoading, api)

  return (
    <View style={styles.container}>
      <Actions/>
     
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
  let params = ChatDetailsParams(item);
  return (
    <View style={styles.shell}>
      <TouchableOpacity onPress={() =>
        props.navigation.navigate('ChatScreenDetails', params)}>
        <Text style={styles.nameTextStyle}>{item.name}</Text>
        <Text style={styles.descriptionTextStyle}>{item.company.bs}</Text>
      </TouchableOpacity>
    </View>
  )
}

function ChatDetailsParams(item) {
  // params api ChatScreen -> ChatScreenDetails
  return {
    id: item.id,
    name: item.name,
    username: item.username,
    phone: item.phone,
    email: item.email,
    webside: item.wedside,
    bs: item.company.bs,
    catchPhrase: item.company.catchPhrase,
    companyName: item.company.name,
  }
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainPurple,
    flex: 1,
    justifyContent: 'flex-end'
  },
  listContainer: {
    height: "81%",
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
})



