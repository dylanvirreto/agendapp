// src/screens/CalendarScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { EventCard } from '../components/ItemCards';
import { ItemModal } from '../components/ItemModal';
import { SectionTitle, FAB } from '../components/UI';
import { MONTHS_ES, DAYS_SHORT, getCategoryColor } from '../utils/theme';
import { formatDate, todayStr, getDaysInMonth, getFirstDayOfMonth } from '../utils/helpers';

export default function CalendarScreen() {
  const { C, events, settings } = useApp();
  const insets = useSafeAreaInsets();
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');
  const [calDate, setCalDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(todayStr());
  const [modal, setModal] = useState(false);
  const [editItem, setEditItem] = useState<any>(null);

  const today = todayStr();
  const year = calDate.getFullYear();
  const month = calDate.getMonth();

  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const offset = settings.startWeekMonday ? (firstDay === 0 ? 6 : firstDay - 1) : firstDay;

  const headerDays = settings.startWeekMonday
    ? ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
    : DAYS_SHORT;

  const getDateStr = (day: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const getEventsForDay = (day: number) =>
    events.filter(e => e.date === getDateStr(day));

  const selectedEvents = events
    .filter(e => e.date === selectedDate)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));

  const prevMonth = () => {
    const d = new Date(year, month - 1, 1);
    setCalDate(d);
  };
  const nextMonth = () => {
    const d = new Date(year, month + 1, 1);
    setCalDate(d);
  };

  const cells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

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
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>Calendario</Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* View tabs */}
        <View style={{ flexDirection: 'row', gap: 4, backgroundColor: C.marble, borderRadius: 12, padding: 3, marginBottom: 16 }}>
          {([['month', 'Mes'], ['week', 'Semana'], ['day', 'Día']] as const).map(([v, l]) => (
            <TouchableOpacity
              key={v} onPress={() => setView(v)}
              style={{
                flex: 1, padding: 8, borderRadius: 9,
                backgroundColor: view === v ? C.bgCard : 'transparent',
                shadowColor: view === v ? C.wine : undefined,
                shadowOffset: view === v ? { width: 0, height: 1 } : undefined,
                shadowOpacity: view === v ? 0.1 : 0,
                elevation: view === v ? 2 : 0,
              }}
            >
              <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '700', color: C.wine }}>{l}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Month nav */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <TouchableOpacity onPress={prevMonth} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: C.marble, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: C.wine, fontSize: 20, fontWeight: '700' }}>‹</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 18, fontWeight: '700', color: C.wine }}>
            {MONTHS_ES[month]} {year}
          </Text>
          <TouchableOpacity onPress={nextMonth} style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: C.marble, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: C.wine, fontSize: 20, fontWeight: '700' }}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Day headers */}
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          {headerDays.map(d => (
            <View key={d} style={{ flex: 1, alignItems: 'center' }}>
              <Text style={{ fontSize: 10, fontWeight: '700', color: C.textMuted }}>{d}</Text>
            </View>
          ))}
        </View>

        {/* Calendar grid */}
        <View style={{
          backgroundColor: C.bgCard, borderRadius: 16, padding: 8,
          borderWidth: 1, borderColor: C.border,
          marginBottom: 20,
          shadowColor: C.wine, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, elevation: 3,
        }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {cells.map((day, i) => {
              if (!day) return <View key={i} style={{ width: '14.28%', height: 50 }} />;
              const ds = getDateStr(day);
              const dayEvs = getEventsForDay(day);
              const isToday = ds === today;
              const isSel = ds === selectedDate;

              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => setSelectedDate(ds)}
                  style={{ width: '14.28%', alignItems: 'center', paddingVertical: 4 }}
                >
                  <View style={{
                    width: 32, height: 32, borderRadius: 16,
                    backgroundColor: isSel ? C.wine : isToday ? C.marble : 'transparent',
                    justifyContent: 'center', alignItems: 'center',
                  }}>
                    <Text style={{
                      fontSize: 13,
                      fontWeight: isToday || isSel ? '700' : '400',
                      color: isSel ? '#fff' : isToday ? C.wine : C.textPrimary,
                    }}>
                      {day}
                    </Text>
                  </View>
                  {dayEvs.length > 0 ? (
                    <View style={{ flexDirection: 'row', gap: 2, marginTop: 2, height: 6, alignItems: 'center' }}>
                      {dayEvs.slice(0, 3).map((ev, ei) => (
                        <View key={ei} style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: getCategoryColor(ev.category) }} />
                      ))}
                    </View>
                  ) : <View style={{ height: 8 }} />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Selected day events */}
        <SectionTitle>{formatDate(selectedDate)}</SectionTitle>
        {selectedEvents.length === 0 ? (
          <Text style={{ textAlign: 'center', padding: 20, color: C.textMuted, fontSize: 13 }}>
            Sin eventos este día
          </Text>
        ) : (
          <View style={{ gap: 10 }}>
            {selectedEvents.map(ev => (
              <EventCard key={ev.id} event={ev} onPress={() => openEdit(ev)} />
            ))}
          </View>
        )}
      </ScrollView>

      <FAB onPress={openCreate} />

      <ItemModal
        visible={modal}
        onClose={() => setModal(false)}
        editItem={editItem}
        editType={editItem ? 'event' : null}
        defaultType="event"
      />
    </View>
  );
}
