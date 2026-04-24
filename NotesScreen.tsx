// src/screens/NotesScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { NoteCard } from '../components/ItemCards';
import { ItemModal } from '../components/ItemModal';
import { EmptyState, FAB } from '../components/UI';

export default function NotesScreen() {
  const { C, notes } = useApp();
  const insets = useSafeAreaInsets();
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [search, setSearch] = useState('');

  const q = search.toLowerCase();
  const filtered = q
    ? notes.filter(n => n.title.toLowerCase().includes(q) || n.content.toLowerCase().includes(q))
    : notes;

  const openEdit = (item: any) => { setEditItem(item); setModal(true); };
  const openCreate = () => { setEditItem(null); setModal(true); };

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* HEADER */}
      <View style={{
        paddingTop: insets.top + 10,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: C.wine,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>Notas</Text>
        {/* Search */}
        <View style={{
          marginTop: 10, backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12,
        }}>
          <Text style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginRight: 8 }}>🔍</Text>
          <TextInput
            style={{ flex: 1, paddingVertical: 10, color: '#fff', fontSize: 14 }}
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar notas..."
            placeholderTextColor="rgba(255,255,255,0.5)"
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {filtered.length === 0 ? (
          <EmptyState emoji="📝" label={q ? 'Sin resultados' : 'Sin notas todavía'} />
        ) : (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
            {filtered.map((note, i) => (
              <View key={note.id} style={{ width: '47.5%' }}>
                <NoteCard note={note} onPress={() => openEdit(note)} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <FAB onPress={openCreate} />

      <ItemModal
        visible={modal}
        onClose={() => setModal(false)}
        editItem={editItem}
        editType={editItem ? 'note' : null}
        defaultType="note"
      />
    </View>
  );
}
