import React from 'react';
import {StyleSheet, View, Image, Text, Pressable, SafeAreaView} from 'react-native';

import Screen_1a from './Screen_1a';
import { Card } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#FFFFFF',
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 2, backgroundColor: '#33CCFF', alignItems: 'center', justifyContent: 'center'}}> 
        <Image source={require('./Ellipse8.png')} />
      </View>
      <View style={{flex: 1, backgroundColor: '#33CCFF', alignItems: 'center', justifyContent: 'flex-start'}}> 
        <Text style={{fontFamily: 'Roboto', fontSize: 25, fontWeight: 700, lineHeight: 29.3}}>GROW</Text>
        <Text style={{fontFamily: 'Roboto', fontSize: 25, fontWeight: 700, lineHeight: 29.3}}>YOUR BUSINESS </Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#33CCFF', alignItems: 'center'}}> 
        <Text style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: 15, fontWeight: 700}}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#33CCFF', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around'}}> 
        <Pressable style={{height: 48, width: 119, backgroundColor: '#FFCC00', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: 17, fontWeight: 700}}>LOGIN</Text>
        </Pressable>
        <Pressable style={{height: 48, width: 119, backgroundColor: '#FFCC00', borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center', fontFamily: 'Roboto', fontSize: 17, fontWeight: 700}}>LOGIN</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;