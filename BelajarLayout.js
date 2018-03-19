import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
  return (
       <View style={styles.containerMain}>
        <View style={styles.box1}>
        <Text style={{ padding: 10, fontSize: 20, color: 'black', textAlign: 'center' }} >
        Pendidikan Teknik Informatika </Text>
        </View>
        <View style={styles.box2}>
        <Text style={styles.text}> By.Inda Sundhari </Text>
        </View>
        <View style={styles.box3}>
        <View style={styles.button}><Text> 1 </Text></View>
        <View style={styles.button}><Text> 2 </Text></View>
        <View style={styles.button}><Text> 3 </Text></View>
        <View style={styles.button}><Text> 4 </Text></View>
        </View>
        <View style={styles.box4}>
        <View style={styles.button}><Text> 5 </Text></View>
        <View style={styles.button}><Text> 6 </Text></View>
        <View style={styles.button}><Text> 7 </Text></View>
        <View style={styles.button}><Text> 8 </Text></View>
        </View>
        <View style={styles.box5}>
        <Text style={{ padding: 10, fontSize: 15, color: 'black', textAlign: 'center' }} >
        #jaenKuliahdiPTI </Text>
        </View>

      </View>
     );
   }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#81D4FA',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.8,
    backgroundColor: '#03A9F4',
  },
  box2: {
    flex: 2,
    backgroundColor: '#B3E5FC',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#03A9F4',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box4: {
    flex: 1,
    backgroundColor: '#03A9F4',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: '#F8BBD0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box5: {
    flex: 0.5,
    backgroundColor: '#03A9F4',
    margin: 10,
  },
  text: {
    fontSize: 20
  },
});
