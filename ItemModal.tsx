// src/components/ItemModal.tsx
import React, { useState } from 'react';
import {
  View, Text, Modal, ScrollView, TouchableOpacity,
  TextInput, StyleSheet, Alert, Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { FieldLabel } from './UI';
import { AgendaEvent, AgendaTask, AgendaNote } from '../utils/types';
import { CATEGORIES, PRIORITIES, NOTE_COLORS, getCategoryColor } from '../utils/theme';
import { generateId, todayStr } from '../utils/helpers';

type ItemType = 'event' | 'task' | 'note';

interface Props {
  visible: boolean;
  onClose: () => void;
  editItem?: AgendaEvent | AgendaTask | AgendaNote | null;
  editType?: ItemType | null;
  defaultType?: ItemType;
}

export function ItemModal({ visible, onClose, editItem, editType, defaultType = 'event' }: Props) {
  const { C, settings, addEvent, updateEvent, deleteEvent, addTask, updateTask, deleteTask, addNote, updateNote, deleteNote, vibrate } = useApp();
  const insets = useSafeAreaInsets();
  const isEdit = !!editItem;

  const [type, setType] = useState<ItemType>(editType || defaultType);

  const blankForm = {
    title: '', description: '', date: todayStr(),
    startTime: '09:00', endTime: '10:00',
    category: settings.defaultCategory || 'personal',
    priority: 'medium', reminder: settings.defaultReminder || '15',
    repeat: 'none', notes: '', deadline: todayStr(),
    status: 'pending' as const, content: '', tags: '', noteColor: '#F5E4E7',
  };

  const [form, setForm] = useState({ ...blankForm, ...(editItem || {}) });

  React.useEffect(() => {
    if (visible) {
      setType(editType || defaultType);
      setForm({ ...blankForm, ...(editItem || {}) });
    }
  }, [visible, editItem, editType]);

  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  // ── SAVE ──────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!form.title.trim()) {
      Alert.alert('Campo requerido', 'Por favor ingresa un título.');
      return;
    }
    vibrate('medium');

    if (type === 'event') {
      const ev: AgendaEvent = {
        id: isEdit ? (editItem as AgendaEvent).id : generateId(),
        type: 'event',
        title: form.title.trim(),
        description: form.description || '',
        date: form.date || todayStr(),
        startTime: form.startTime || '09:00',
        endTime: form.endTime || '10:00',
        category: form.category || 'personal',
        priority: form.priority || 'medium',
        color: getCategoryColor(form.category),
        reminder: form.reminder || 'none',
        repeat: form.repeat || 'none',
        notes: form.notes || '',
        createdAt: isEdit ? (editItem as AgendaEvent).createdAt : new Date().toISOString(),
      };
      isEdit ? await updateEvent(ev) : await addEvent(ev);
    } else if (type === 'task') {
      const task: AgendaTask = {
        id: isEdit ? (editItem as AgendaTask).id : generateId(),
        type: 'task',
        title: form.title.trim(),
        description: form.description || '',
        deadline: form.deadline || todayStr(),
        priority: form.priority || 'medium',
        status: (form.status as any) || 'pending',
        category: form.category || 'personal',
        notes: form.notes || '',
        createdAt: isEdit ? (editItem as AgendaTask).createdAt : new Date().toISOString(),
      };
      isEdit ? await updateTask(task) : await addTask(task);
    } else {
      const note: AgendaNote = {
        id: isEdit ? (editItem as AgendaNote).id : generateId(),
        type: 'note',
        title: form.title.trim(),
        content: form.content || '',
        tags: form.tags || '',
        noteColor: form.noteColor || '#F5E4E7',
        notes: form.notes || '',
        createdAt: isEdit ? (editItem as AgendaNote).createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      isEdit ? await updateNote(note) : await addNote(note);
    }
    onClose();
  };

  // ── DELETE ────────────────────────────────────────────────────
  const handleDelete = () => {
    Alert.alert('Eliminar', '¿Eliminar este elemento?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar', style: 'destructive',
        onPress: async () => {
          vibrate('heavy');
          if (type === 'event') await deleteEvent((editItem as AgendaEvent).id);
          else if (type === 'task') await deleteTask((editItem as AgendaTask).id);
          else await deleteNote((editItem as AgendaNote).id);
          onClose();
        },
      },
    ]);
  };

  const inputStyle = {
    backgroundColor: C.inputBg,
    borderColor: C.border,
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: C.textPrimary,
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  };

  const selectRow = (label: string, items: { id: string; label: string; color: string }[], field: string) => (
    <View style={{ marginBottom: 14 }}>
      <FieldLabel>{label}</FieldLabel>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {items.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => set(field, item.id)}
            style={{
              paddingHorizontal: 12, paddingVertical: 6,
              borderRadius: 20, borderWidth: 2,
              borderColor: (form as any)[field] === item.id ? item.color : C.border,
              backgroundColor: (form as any)[field] === item.id ? item.color + '22' : 'transparent',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '700', color: item.color }}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <TouchableOpacity
        style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}
        activeOpacity={1} onPress={onClose}
      >
        <View style={{ flex: 1 }} />
      </TouchableOpacity>

      <View style={{
        backgroundColor: C.bgCard,
        borderTopLeftRadius: 24, borderTopRightRadius: 24,
        maxHeight: '92%',
        paddingBottom: insets.bottom + 16,
        position: 'absolute', bottom: 0, left: 0, right: 0,
      }}>
        {/* Handle */}
        <View style={{ alignItems: 'center', paddingVertical: 12 }}>
          <View style={{ width: 40, height: 4, borderRadius: 2, backgroundColor: C.border }} />
        </View>

        {/* Header */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 12 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: C.wine }}>
            {isEdit ? 'Editar' : 'Nuevo'} {type === 'event' ? 'Evento' : type === 'task' ? 'Tarea' : 'Nota'}
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            {isEdit && (
              <TouchableOpacity onPress={handleDelete} style={{ paddingHorizontal: 12, paddingVertical: 6, borderRadius: 10, backgroundColor: '#C0384A22' }}>
                <Text style={{ color: '#C0384A', fontWeight: '700', fontSize: 12 }}>Eliminar</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={onClose} style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: C.marble, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: C.textSecondary, fontSize: 16 }}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Type tabs (only for new items) */}
        {!isEdit && (
          <View style={{ flexDirection: 'row', gap: 6, paddingHorizontal: 20, marginBottom: 14 }}>
            {[['event', '📅 Evento'], ['task', '✓ Tarea'], ['note', '📝 Nota']].map(([t, l]) => (
              <TouchableOpacity
                key={t}
                onPress={() => setType(t as ItemType)}
                style={{
                  flex: 1, padding: 8, borderRadius: 10,
                  backgroundColor: type === t ? C.wine : C.marble,
                }}
              >
                <Text style={{
                  textAlign: 'center', fontSize: 12, fontWeight: '700',
                  color: type === t ? '#fff' : C.wine,
                }}>
                  {l}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          {/* Title */}
          <View style={{ marginBottom: 14 }}>
            <FieldLabel>Título</FieldLabel>
            <TextInput
              style={inputStyle} value={form.title}
              onChangeText={v => set('title', v)}
              placeholder={type === 'note' ? 'Título de la nota' : type === 'task' ? '¿Qué hay que hacer?' : '¿Qué tienes planeado?'}
              placeholderTextColor={C.textMuted}
            />
          </View>

          {/* Description (event / task) */}
          {type !== 'note' && (
            <View style={{ marginBottom: 14 }}>
              <FieldLabel>Descripción</FieldLabel>
              <TextInput
                style={inputStyle} value={form.description}
                onChangeText={v => set('description', v)}
                placeholder="Descripción opcional..."
                placeholderTextColor={C.textMuted}
              />
            </View>
          )}

          {/* Content (note) */}
          {type === 'note' && (
            <View style={{ marginBottom: 14 }}>
              <FieldLabel>Contenido</FieldLabel>
              <TextInput
                style={[inputStyle, { height: 120, textAlignVertical: 'top' }]}
                value={form.content} onChangeText={v => set('content', v)}
                placeholder="Escribe tu nota aquí..."
                placeholderTextColor={C.textMuted}
                multiline
              />
            </View>
          )}

          {/* Event fields */}
          {type === 'event' && (
            <>
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Fecha</FieldLabel>
                <TextInput style={inputStyle} value={form.date} onChangeText={v => set('date', v)} placeholder="YYYY-MM-DD" placeholderTextColor={C.textMuted} />
              </View>
              <View style={{ flexDirection: 'row', gap: 12, marginBottom: 14 }}>
                <View style={{ flex: 1 }}>
                  <FieldLabel>Inicio</FieldLabel>
                  <TextInput style={inputStyle} value={form.startTime} onChangeText={v => set('startTime', v)} placeholder="HH:MM" placeholderTextColor={C.textMuted} />
                </View>
                <View style={{ flex: 1 }}>
                  <FieldLabel>Fin</FieldLabel>
                  <TextInput style={inputStyle} value={form.endTime} onChangeText={v => set('endTime', v)} placeholder="HH:MM" placeholderTextColor={C.textMuted} />
                </View>
              </View>

              {/* Reminder */}
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Recordatorio</FieldLabel>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                  {[['none','Sin recordatorio'],['5','5 min'],['15','15 min'],['30','30 min'],['60','1 hora'],['1440','1 día']].map(([v,l]) => (
                    <TouchableOpacity key={v} onPress={() => set('reminder', v)} style={{
                      paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20,
                      borderWidth: 2, borderColor: form.reminder === v ? C.wine : C.border,
                      backgroundColor: form.reminder === v ? C.marble : 'transparent',
                    }}>
                      <Text style={{ fontSize: 11, fontWeight: '700', color: C.wine }}>{l}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Repeat */}
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Repetición</FieldLabel>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                  {[['none','No repetir'],['daily','Diario'],['weekly','Semanal'],['monthly','Mensual']].map(([v,l]) => (
                    <TouchableOpacity key={v} onPress={() => set('repeat', v)} style={{
                      paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20,
                      borderWidth: 2, borderColor: form.repeat === v ? C.wine : C.border,
                      backgroundColor: form.repeat === v ? C.marble : 'transparent',
                    }}>
                      <Text style={{ fontSize: 11, fontWeight: '700', color: C.wine }}>{l}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </>
          )}

          {/* Task fields */}
          {type === 'task' && (
            <>
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Fecha límite</FieldLabel>
                <TextInput style={inputStyle} value={form.deadline} onChangeText={v => set('deadline', v)} placeholder="YYYY-MM-DD" placeholderTextColor={C.textMuted} />
              </View>
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Estado</FieldLabel>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  {[['pending','Pendiente'],['in-progress','En progreso'],['done','Lista']].map(([v,l]) => (
                    <TouchableOpacity key={v} onPress={() => set('status', v)} style={{
                      flex: 1, padding: 8, borderRadius: 10, borderWidth: 2,
                      borderColor: form.status === v ? C.wine : C.border,
                      backgroundColor: form.status === v ? C.marble : 'transparent',
                    }}>
                      <Text style={{ textAlign: 'center', fontSize: 11, fontWeight: '700', color: C.wine }}>{l}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </>
          )}

          {/* Note color */}
          {type === 'note' && (
            <>
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Etiquetas</FieldLabel>
                <TextInput style={inputStyle} value={form.tags} onChangeText={v => set('tags', v)} placeholder="viajes, ideas, trabajo..." placeholderTextColor={C.textMuted} />
              </View>
              <View style={{ marginBottom: 14 }}>
                <FieldLabel>Color de tarjeta</FieldLabel>
                <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                  {NOTE_COLORS.map((nc) => (
                    <TouchableOpacity
                      key={nc.light}
                      onPress={() => set('noteColor', nc.light)}
                      style={{
                        width: 36, height: 36, borderRadius: 18,
                        backgroundColor: nc.light,
                        borderWidth: 3,
                        borderColor: form.noteColor === nc.light ? C.wine : 'transparent',
                      }}
                    />
                  ))}
                </View>
              </View>
            </>
          )}

          {/* Category + Priority (event & task) */}
          {type !== 'note' && (
            <>
              {selectRow('Categoría', CATEGORIES as any, 'category')}
              {selectRow('Prioridad', PRIORITIES as any, 'priority')}
            </>
          )}

          {/* Notes */}
          <View style={{ marginBottom: 14 }}>
            <FieldLabel>Notas adicionales</FieldLabel>
            <TextInput
              style={[inputStyle, { height: 80, textAlignVertical: 'top' }]}
              value={form.notes} onChangeText={v => set('notes', v)}
              placeholder="Notas extras..." placeholderTextColor={C.textMuted} multiline
            />
          </View>

          {/* Save btn */}
          <TouchableOpacity
            onPress={handleSave}
            style={{
              padding: 14, borderRadius: 14,
              backgroundColor: C.verdant, marginBottom: 8,
              shadowColor: C.verdant, shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.35, shadowRadius: 10, elevation: 6,
            }}
          >
            <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16, fontWeight: '700' }}>
              {isEdit ? 'Guardar cambios' : `Crear ${type === 'event' ? 'evento' : type === 'task' ? 'tarea' : 'nota'}`}
            </Text>
          </TouchableOpacity>

          <View style={{ height: 20 }} />
        </ScrollView>
      </View>
    </Modal>
  );
}
