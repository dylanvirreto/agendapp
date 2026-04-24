// src/screens/TasksScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { TaskCard } from '../components/ItemCards';
import { ItemModal } from '../components/ItemModal';
import { Card, SectionTitle, EmptyState, FAB, ProgressBar } from '../components/UI';
import { todayStr } from '../utils/helpers';

type Filter = 'all' | 'pending' | 'today' | 'high' | 'done';

export default function TasksScreen() {
  const { C, tasks, toggleTask, settings } = useApp();
  const insets = useSafeAreaInsets();
  const [filter, setFilter] = useState<Filter>('pending');
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);

  const today = todayStr();
  const total = tasks.length;
  const done = tasks.filter(t => t.status === 'done').length;
  const pending = tasks.filter(t => t.status !== 'done').length;
  const urgent = tasks.filter(t => t.priority === 'high' && t.status !== 'done').length;

  let filtered = [...tasks];
  if (filter === 'pending') filtered = filtered.filter(t => t.status !== 'done');
  else if (filter === 'done') filtered = filtered.filter(t => t.status === 'done');
  else if (filter === 'today') filtered = filtered.filter(t => t.deadline === today && t.status !== 'done');
  else if (filter === 'high') filtered = filtered.filter(t => t.priority === 'high' && t.status !== 'done');

  if (!settings.showCompleted && filter !== 'done') {
    filtered = filtered.filter(t => t.status !== 'done');
  }

  const openEdit = (item: any) => { setEditItem(item); setModal(true); };
  const openCreate = () => { setEditItem(null); setModal(true); };

  const FILTERS: [Filter, string][] = [
    ['all', 'Todas'],
    ['pending', 'Pendientes'],
    ['today', 'Hoy'],
    ['high', 'Urgentes'],
    ['done', 'Listas'],
  ];

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* HEADER */}
      <View style={{
        paddingTop: insets.top + 10,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: C.wine,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>Tareas</Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* Progress */}
        <Card style={{ marginBottom: 16 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: C.textSecondary }}>
              {done} de {total} completadas
            </Text>
            <Text style={{ fontSize: 13, fontWeight: '700', color: C.verdant }}>
              {total > 0 ? Math.round((done / total) * 100) : 0}%
            </Text>
          </View>
          <ProgressBar value={done} total={total} />
          <View style={{ flexDirection: 'row', gap: 16, marginTop: 10 }}>
            <Text style={{ fontSize: 11, color: C.textMuted }}>
              <Text style={{ fontWeight: '700', color: C.wine }}>{pending}</Text> pendientes
            </Text>
            <Text style={{ fontSize: 11, color: C.textMuted }}>
              <Text style={{ fontWeight: '700', color: C.verdant }}>{done}</Text> listas
            </Text>
            <Text style={{ fontSize: 11, color: C.textMuted }}>
              <Text style={{ fontWeight: '700', color: '#D4845A' }}>{urgent}</Text> urgentes
            </Text>
          </View>
        </Card>

        {/* Filter pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 14 }}>
          <View style={{ flexDirection: 'row', gap: 6, paddingRight: 16 }}>
            {FILTERS.map(([v, l]) => (
              <TouchableOpacity
                key={v}
                onPress={() => setFilter(v)}
                style={{
                  paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20,
                  backgroundColor: filter === v ? C.wine : C.marble,
                }}
              >
                <Text style={{
                  fontSize: 12, fontWeight: '700',
                  color: filter === v ? '#fff' : C.wine,
                }}>
                  {l}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Task list */}
        {filtered.length === 0 ? (
          <EmptyState emoji="✅" label="Todo al día" />
        ) : (
          <View style={{ gap: 8 }}>
            {filtered.map(t => (
              <TaskCard
                key={t.id}
                task={t}
                onPress={() => openEdit(t)}
                onToggle={() => toggleTask(t.id)}
              />
            ))}
          </View>
        )}
      </ScrollView>

      <FAB onPress={openCreate} />

      <ItemModal
        visible={modal}
        onClose={() => setModal(false)}
        editItem={editItem}
        editType={editItem ? 'task' : null}
        defaultType="task"
      />
    </View>
  );
}
