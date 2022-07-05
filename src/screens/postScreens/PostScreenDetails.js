import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {getProject} from '../../func/getApi';
import {styles} from './../../styles/AppBarAndList';
import Indicator from '../../styles/ActivityIndicator';
import {DetailsAppBar} from '../../styles/DetailsAppBar';
const {height} = Dimensions.get('screen');

export function PostScreenDetails(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const item = props.route.params;
  const api = 'users/' + item.userId;

  useEffect(() => {
    getProject(setData, setLoading, api);
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <Indicator />
      ) : (
        <View>
          <DetailsAppBar data={data} />
          <View style={styles.shell}>
            <ScrollView>
              <View style={{minHeight: height, paddingTop: 13,}}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('UserScreenDetails', data)
                  }>
                  <Text style={styles.nameTextStyle}>{item.title}</Text>
                  <Text style={styles.descriptionTextStyle}>{item.body}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
