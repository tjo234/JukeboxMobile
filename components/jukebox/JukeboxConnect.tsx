import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, NativeEventEmitter, NativeModules } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import MPD from './MPD';


export function JukeboxConnect() {
  const [servers, setServers] = useState(['raspberrypi.local:6600']);

  const onConnectServer = () => {
    alert('Clicked!')
  };
  return (
    <ThemedView>
      <ThemedText>CONNECT TO SERVER{'\n'}</ThemedText>
      {servers.map((s) => (
        <TouchableHighlight style={styles.container} onPress={onConnectServer}>
        <View style={styles.btnContainer}>
         <Ionicons name="server" size="30" style={styles.btnIcon} />
         <ThemedText style={styles.text}>{s}</ThemedText>
        </View>
        </TouchableHighlight>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'col',
    alignItems: 'left',
  },
   btnContainer: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,  
    color: 'white',
    padding: 20,
  },
  btnIcon: {
    color: 'white',
  },
  h1: {
    size: 32,
  },
  text: {
    marginLeft: 20,
    marginTop:5,
    fontSize: 24
  }
});