import * as React from 'react';
import {Button, View, Text, StyleSheet, FlatList} from 'react-native';
function AmapPage({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'AmapShowPage', title: '地图展示功能'},
          {key: 'MyLocationPage', title: '定位当前位置信息'},
        ]}
        renderItem={({item}) =>
          <View>
            <Button
              title={item.title}
              onPress={() => navigation.navigate(item.key)}
            />
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
export default AmapPage;
