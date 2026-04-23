import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  // Estado equivalente al que tenías en el JS original
  const [events, setEvents] = useState([]);

  // Cargar datos (equivalente a tu loadState)
  useEffect(() => {
    const loadData = async () => {
      const saved = await AsyncStorage.getItem('miAgenda_v3');
      if (saved) setEvents(JSON.parse(saved).events);
    };
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Agenda</Text>
      <ScrollView>
        {events.map(ev => (
          <View key={ev.id} style={styles.card}>
            <Text>{ev.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: '#F5E4E7' },
  title: { fontSize: 24, textAlign: 'center', color: '#7A213A', fontWeight: 'bold' },
  card: { padding: 15, margin: 10, backgroundColor: '#fff', borderRadius: 10 }
});
