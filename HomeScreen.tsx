// src/screens/HomeScreen.tsx
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  TextInput, StyleSheet, Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { EventCard, TaskCard } from '../components/ItemCards';
import { ItemModal } from '../components/ItemModal';
import { SectionTitle, EmptyState, FAB } from '../components/UI';
import { MONTHS_ES, DAYS_SHORT } from '../utils/theme';
import { todayStr, tomorrowStr, greeting, timeAgo } from '../utils/helpers';
import { AgendaEvent, AgendaTask, AgendaNote } from '../utils/types';

export default function HomeScreen() {
  const { C, events, tasks, settings, syncing, triggerSync, toggleTask } = useApp();
  const insets = useSafeAreaInsets();
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);
  const [editType, setEditType] = useState<any>(null);
  const [searchQ, setSearchQ] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const now = new Date();
  const todayStr_ = todayStr();
  const todayEvs = events.filter(e => e.date === todayStr_).sort((a, b) => a.startTime.localeCompare(b.startTime));
  const upcoming = events.filter(e => e.date > todayStr_).sort((a, b) => a.date.localeCompare(b.date)).slice(0, 3);
  const urgentTasks = tasks.filter(t => t.priority === 'high' && t.status !== 'done').slice(0, 3);
  const pending = tasks.filter(t => t.status !== 'done').length;

  const openEdit = (item: any, type: any) => { setEditItem(item); setEditType(type); setModal(true); };
  const openCreate = () => { setEditItem(null); setEditType(null); setModal(true); };

  // Search results
  const q = searchQ.toLowerCase();
  const searchMode = !!q;
  const evResults = searchMode ? events.filter(e => e.title.toLowerCase().includes(q) || e.description?.toLowerCase().includes(q)) : [];
  const taskResults = searchMode ? tasks.filter(t => t.title.toLowerCase().includes(q)) : [];

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* HEADER */}
      <View style={{
        paddingTop: insets.top + 10,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: C.wine,
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>Mi Agenda</Text>
            {settings.syncEnabled && (
              <Text style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>
                {syncing ? '↻ Sincronizando…' : `✓ Sync · ${timeAgo(settings.lastSync)}`}
              </Text>
            )}
          </View>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <TouchableOpacity onPress={() => setShowSearch(s => !s)} style={{ padding: 8 }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={triggerSync} style={{ padding: 8 }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>☁</Text>
            </TouchableOpacity>
          </View>
        </View>
        {showSearch && (
          <View style={{ marginTop: 10, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
            <Text style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', marginRight: 8 }}>🔍</Text>
            <TextInput
              style={{ flex: 1, paddingVertical: 10, color: '#fff', fontSize: 14 }}
              value={searchQ}
              onChangeText={setSearchQ}
              placeholder="Buscar eventos, tareas..."
              placeholderTextColor="rgba(255,255,255,0.5)"
              autoFocus
            />
            {searchQ ? (
              <TouchableOpacity onPress={() => { setSearchQ(''); setShowSearch(false); }}>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18 }}>✕</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        )}
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {searchMode ? (
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 13, color: C.textMuted, marginBottom: 12 }}>
              Resultados para "<Text style={{ color: C.wine, fontWeight: '700' }}>{q}</Text>"
            </Text>
            {evResults.length > 0 && (
              <>
                <SectionTitle>Eventos</SectionTitle>
                {evResults.map(ev => (
                  <View key={ev.id} style={{ marginBottom: 10 }}>
                    <EventCard event={ev} onPress={() => openEdit(ev, 'event')} />
                  </View>
                ))}
              </>
            )}
            {taskResults.length > 0 && (
              <>
                <SectionTitle style={{ marginTop: 8 }}>Tareas</SectionTitle>
                {taskResults.map(t => (
                  <View key={t.id} style={{ marginBottom: 8 }}>
                    <TaskCard task={t} onPress={() => openEdit(t, 'task')} onToggle={() => toggleTask(t.id)} />
                  </View>
                ))}
              </>
            )}
            {!evResults.length && !taskResults.length && (
              <EmptyState emoji="🔍" label="Sin resultados" />
            )}
          </View>
        ) : (
          <>
            {/* HERO */}
            <View style={{
              backgroundColor: C.wine,
              paddingHorizontal: 20, paddingBottom: 24,
              borderBottomLeftRadius: 28, borderBottomRightRadius: 28,
            }}>
              <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', fontWeight: '500', marginBottom: 3 }}>{greeting()}</Text>
              <Text style={{ fontSize: 26, fontWeight: '800', color: '#fff', lineHeight: 30 }}>
                {DAYS_SHORT[now.getDay()]}, {now.getDate()} de {MONTHS_ES[now.getMonth()]}
              </Text>
              <View style={{ flexDirection: 'row', gap: 10, marginTop: 18 }}>
                {[
                  { val: todayEvs.length, label: 'Hoy' },
                  { val: pending, label: 'Pendientes' },
                  { val: urgentTasks.length, label: 'Urgentes' },
                ].map(stat => (
                  <View key={stat.label} style={{
                    flex: 1, backgroundColor: 'rgba(255,255,255,0.13)',
                    borderRadius: 12, padding: 10,
                  }}>
                    <Text style={{ fontSize: 22, fontWeight: '800', color: '#fff' }}>{stat.val}</Text>
                    <Text style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)' }}>{stat.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={{ padding: 16 }}>
              {/* TODAY */}
              <SectionTitle>Hoy</SectionTitle>
              {todayEvs.length === 0 ? (
                <View style={{ backgroundColor: C.bgCard, borderRadius: 16, padding: 14, marginBottom: 20, borderWidth: 1, borderColor: C.border }}>
                  <EmptyState emoji="🌿" label="Día libre. ¡Disfrútalo!" />
                </View>
              ) : (
                <View style={{ gap: 10, marginBottom: 20 }}>
                  {todayEvs.map(ev => (
                    <EventCard key={ev.id} event={ev} onPress={() => openEdit(ev, 'event')} />
                  ))}
                </View>
              )}

              {/* URGENT */}
              {urgentTasks.length > 0 && (
                <>
                  <SectionTitle>⚡ Urgente</SectionTitle>
                  <View style={{ gap: 8, marginBottom: 20 }}>
                    {urgentTasks.map(t => (
                      <TaskCard key={t.id} task={t} compact onPress={() => openEdit(t, 'task')} onToggle={() => toggleTask(t.id)} />
                    ))}
                  </View>
                </>
              )}

              {/* UPCOMING */}
              {upcoming.length > 0 && (
                <>
                  <SectionTitle>Próximamente</SectionTitle>
                  <View style={{ gap: 10 }}>
                    {upcoming.map(ev => (
                      <EventCard key={ev.id} event={ev} onPress={() => openEdit(ev, 'event')} />
                    ))}
                  </View>
                </>
              )}
            </View>
          </>
        )}
      </ScrollView>

      <FAB onPress={openCreate} />

      <ItemModal
        visible={modal}
        onClose={() => setModal(false)}
        editItem={editItem}
        editType={editType}
      />
    </View>
  );
}
