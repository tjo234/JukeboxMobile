import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SearchScreen() {
  return (
    <ThemedView style={styles.viewContainer}>
      <ThemedText type="title">Search</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    top: 20,
    padding: 20
  },
});