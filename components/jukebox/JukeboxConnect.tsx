import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight, NativeEventEmitter, NativeModules } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Zeroconf from 'react-native-zeroconf';

const zeroconf = new Zeroconf();

export function JukeboxConnect() {

  const [servers, setServers] = useState([]);

  zeroconf.on('resolved', device => {
    console.log('[Resolve]', JSON.stringify(device, null, 2));
    setServers([...servers, device]);
  });

  console.log('Running TCP Scan....')
  zeroconf.scan('mpd', 'tcp', 'local.');

  useEffect(() => {
    console.log('UseEffect: Start');
    return () => {
      console.log('Stopping TCP Scan');
      zeroconf.stop();
    };
  }, [servers]);

  const onButtonPress = () => {
    alert('Click');
  }

  return (
    <ThemedView>
      <ThemedText>
        <Ionicons name="server-outline" size={20}></Ionicons>
        &nbsp;CONNECT TO SERVER{'\n'}
      </ThemedText>
      {servers.map(server => (
        <TouchableHighlight key={server} style={styles.btnContainer} onPress={onButtonPress}>
          <View>
            <ThemedText style={styles.h1}> 
              {server.name}
            </ThemedText>
            <ThemedText style={styles.addr}>http://{server.host.slice(0, -1)}:{server.port}</ThemedText>
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
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,  
    padding: 20,
  },
  h1: {
    size: 28,
    fontWeight: 'bold'
  },
  addr: {
    fontSize:12,
    fontStyle: 'italic'
  }
});