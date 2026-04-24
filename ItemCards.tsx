// src/components/ItemCards.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Card, Chip, PriorityDot } from './UI';
import { useApp } from '../context/AppContext';
import { AgendaEvent, AgendaTask, AgendaNote } from '../utils/types';
import { getCategoryColor, getCategoryLabel, getPriorityColor, getPriorityLabel, NOTE_COLORS } from '../utils/theme';
import { formatDate } from '../utils/helpers';

// ── EVENT CARD ────────────────────────────────────────────────────
export function EventCard({
  event, onPress,
}: { event: AgendaEvent; onPress: () => void }) {
  const { C } = useApp();
  const cc = getCategoryColor(event.category);
  const pc = getPriorityColor(event.priority);

  return (
    <Card onPress={onPress} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start', marginBottom: 0 }}>
      <View style={{ width: 4, borderRadius: 4, backgroundColor: cc, alignSelf: 'stretch', flexShrink: 0 }} />
      <View style={{ flex: 1, minWidth: 0 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 3 }}>
          <PriorityDot color={pc} />
          <Text
            numberOfLines={1}
            style={{ fontSize: 14, fontWeight: '700', color: C.textPrimary, flex: 1 }}
          >
            {event.title}
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: C.textSecondary }}>
          {event.startTime} – {event.endTime} · {formatDate(event.date)}
        </Text>
        {event.description ? (
          <Text numberOfLines={1} style={{ fontSize: 12, color: C.textMuted, marginTop: 3 }}>
            {event.description}
          </Text>
        ) : null}
      </View>
      <Chip label={getCategoryLabel(event.category)} color={cc} small />
    </Card>
  );
}

// ── TASK CARD ─────────────────────────────────────────────────────
export function TaskCard({
  task, onPress, onToggle, compact = false,
}: {
  task: AgendaTask;
  onPress: () => void;
  onToggle: () => void;
  compact?: boolean;
}) {
  const { C } = useApp();
  const done = task.status === 'done';
  const pc = getPriorityColor(task.priority);
  const cc = getCategoryColor(task.category);

  return (
    <Card style={{
      flexDirection: 'row', gap: 12, alignItems: 'flex-start',
      opacity: done ? 0.65 : 1,
    }}>
      <TouchableOpacity
        onPress={onToggle}
        activeOpacity={0.7}
        style={{
          width: 22, height: 22, borderRadius: 11,
          borderWidth: 2,
          borderColor: done ? C.verdant : pc,
          backgroundColor: done ? C.verdant : 'transparent',
          justifyContent: 'center', alignItems: 'center',
          flexShrink: 0, marginTop: 1,
        }}
      >
        {done && <Text style={{ color: '#fff', fontSize: 11, fontWeight: '900' }}>✓</Text>}
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1, minWidth: 0 }} onPress={onPress} activeOpacity={0.7}>
        <Text style={{
          fontSize: 14, fontWeight: '600', color: C.textPrimary,
          textDecorationLine: done ? 'line-through' : 'none',
        }}>
          {task.title}
        </Text>
        {!compact && (
          <View style={{ flexDirection: 'row', gap: 6, marginTop: 5, flexWrap: 'wrap' }}>
            <View style={{
              paddingHorizontal: 8, paddingVertical: 2, borderRadius: 8,
              backgroundColor: C.marble,
            }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: C.wine }}>
                {formatDate(task.deadline)}
              </Text>
            </View>
            <Chip label={getPriorityLabel(task.priority)} color={pc} small />
            <Chip label={getCategoryLabel(task.category)} color={cc} small />
          </View>
        )}
        {compact && (
          <Text style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>
            Límite: {formatDate(task.deadline)}
          </Text>
        )}
      </TouchableOpacity>
    </Card>
  );
}

// ── NOTE CARD ─────────────────────────────────────────────────────
export function NoteCard({
  note, onPress,
}: { note: AgendaNote; onPress: () => void }) {
  const { C, settings } = useApp();
  const nc = NOTE_COLORS.find(c => c.light === note.noteColor || c.dark === note.noteColor);
  const bg = settings.darkMode ? (nc?.dark ?? '#252525') : (note.noteColor ?? '#F5E4E7');
  const tags = note.tags ? note.tags.split(',').map(t => t.trim()).filter(Boolean) : [];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.82}
      style={{
        backgroundColor: bg,
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: C.border,
        shadowColor: C.wine,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 13, fontWeight: '700', color: C.textPrimary, marginBottom: 5 }}>
        {note.title}
      </Text>
      <Text
        numberOfLines={3}
        style={{ fontSize: 12, color: C.textSecondary, lineHeight: 18 }}
      >
        {note.content}
      </Text>
      {tags.length > 0 && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 8 }}>
          {tags.slice(0, 2).map(tag => (
            <View
              key={tag}
              style={{ backgroundColor: 'rgba(122,33,58,0.1)', paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 }}
            >
              <Text style={{ fontSize: 10, fontWeight: '600', color: C.wine }}>#{tag}</Text>
            </View>
          ))}
        </View>
      )}
    </TouchableOpacity>
  );
}
