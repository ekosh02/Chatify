import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {getProject} from '../../func/getApi';
import {styles} from './../../styles/AppBarAndList';
import Indicator from '../../styles/ActivityIndicator';
import {DetailsAppBar} from '../../styles/DetailsAppBar';

export function PostScreenDetails(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const item = props.route.params;
  const api = 'users/' + item.userId;

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  let params = {
    id: data?.id,
    name: data?.name,
    username: data?.username,
    phone: data?.phone,
    email: data?.email,
    webside: data?.wedside,
    bs: data?.company?.bs,
    catchPhrase: data?.company?.catchPhrase,
    companyName: data?.company?.name,
    street: data?.address?.street,
    suite: data?.address?.suite,
    city: data?.address?.city,
    zipcode: data?.address?.zipcode,
  };
  return (
    <SafeAreaView>
      {loading ? (
        <Indicator />
      ) : (
        <View>
          <DetailsAppBar data={data} />
          <View style={styles.shell}>
            <Text></Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('UserScreenDetails', params)
              }>
              <Text style={styles.nameTextStyle}>{item.title}</Text>
              <Text style={styles.descriptionTextStyle}>{item.body}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
