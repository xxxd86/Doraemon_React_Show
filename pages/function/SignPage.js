import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';
import SDK from '../../Doraemon-SDK/index';
function SignPage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'NormalSign', title: '普通签到'},
          {key: 'GestureSign', title: '手势签到'},
          {key: 'MapSign', title: '位置签到'},
          {key: 'CodeSign', title: '签到码签到'},
        ]}
        renderItem={({item}) =>
          <View>
            <Button title={item.title} onPress={() => SDK.SignFuntion()} />
          </View>
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 22},
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
export default SignPage;
