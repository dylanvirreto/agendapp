// src/screens/SettingsScreen.tsx
import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  TextInput, Alert, Share, Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import { Card, Toggle } from '../components/UI';
import { requestNotificationPermissions } from '../utils/notifications';
import { exportAllData, clearAllData } from '../utils/storage';
import { timeAgo } from '../utils/helpers';

export default function SettingsScreen() {
  const { C, settings, updateSettings, events, tasks, notes, vibrate } = useApp();
  const insets = useSafeAreaInsets();
  const [editingName, setEditingName] = useState(false);
  const [nameVal, setNameVal] = useState(settings.userName);

  const totalItems = events.length + tasks.length + notes.length;

  const toggle = async (key: keyof typeof settings) => {
    vibrate('light');
    if (key === 'notifications') {
      if (!settings.notifications) {
        const granted = await requestNotificationPermissions();
        if (granted) {
          await updateSettings({ notifications: true });
        } else {
          Alert.alert(
            'Permiso denegado',
            'Para activar notificaciones, ve a Ajustes del sistema > Mi Agenda > Notificaciones.',
          );
        }
      } else {
        await updateSettings({ notifications: false });
      }
      return;
    }
    await updateSettings({ [key]: !settings[key] } as any);
  };

  const saveName = async () => {
    setEditingName(false);
    await updateSettings({ userName: nameVal.trim() || 'Mi Agenda' });
  };

  const handleExport = async () => {
    try {
      const json = await exportAllData();
      await Share.share({
        message: json,
        title: `mi-agenda-backup-${new Date().toISOString().split('T')[0]}.json`,
      });
    } catch {
      Alert.alert('Error', 'No se pudo exportar los datos.');
    }
  };

  const handleClear = () => {
    Alert.alert(
      'Borrar todos los datos',
      '¿Estás seguro? Esta acción eliminará todos los eventos, tareas y notas. Es irreversible.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Borrar todo', style: 'destructive',
          onPress: async () => {
            vibrate('heavy');
            await clearAllData();
            await updateSettings({ lastSync: new Date().toISOString() });
            Alert.alert('Listo', 'Todos los datos han sido eliminados.');
          },
        },
      ],
    );
  };

  // ── HELPERS ────────────────────────────────────────────────────
  const SectionHeader = ({ label }: { label: string }) => (
    <Text style={{
      fontSize: 10, fontWeight: '700', color: C.textMuted,
      letterSpacing: 1.2, textTransform: 'uppercase',
      marginBottom: 8, marginTop: 4, paddingHorizontal: 4,
    }}>
      {label}
    </Text>
  );

  const Row = ({
    icon, label, desc, right, onPress, danger,
  }: {
    icon: string; label: string; desc?: string;
    right?: React.ReactNode; onPress?: () => void; danger?: boolean;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      style={{
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1, borderBottomColor: C.border,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 }}>
        <View style={{
          width: 38, height: 38, borderRadius: 10,
          backgroundColor: C.marble,
          justifyContent: 'center', alignItems: 'center',
        }}>
          <Text style={{ fontSize: 18 }}>{icon}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, fontWeight: '600', color: danger ? '#C0384A' : C.textPrimary }}>
            {label}
          </Text>
          {desc && (
            <Text style={{ fontSize: 11, color: C.textMuted, marginTop: 2 }}>{desc}</Text>
          )}
        </View>
      </View>
      {right ?? (onPress && (
        <Text style={{ color: C.textMuted, fontSize: 20 }}>›</Text>
      ))}
    </TouchableOpacity>
  );

  const SelectRow = ({
    icon, label, options, value, onChange,
  }: {
    icon: string; label: string;
    options: [string, string][]; value: string;
    onChange: (v: string) => void;
  }) => (
    <View style={{
      borderBottomWidth: 1, borderBottomColor: C.border, paddingVertical: 12,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 8 }}>
        <View style={{ width: 38, height: 38, borderRadius: 10, backgroundColor: C.marble, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18 }}>{icon}</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '600', color: C.textPrimary }}>{label}</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, paddingLeft: 50 }}>
        {options.map(([v, l]) => (
          <TouchableOpacity
            key={v}
            onPress={() => { vibrate('light'); onChange(v); }}
            style={{
              paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20,
              borderWidth: 2,
              borderColor: value === v ? C.wine : C.border,
              backgroundColor: value === v ? C.marble : 'transparent',
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: '700', color: C.wine }}>{l}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: C.bg }}>
      {/* HEADER */}
      <View style={{
        paddingTop: insets.top + 10,
        paddingBottom: 16,
        paddingHorizontal: 20,
        backgroundColor: C.wine,
      }}>
        <Text style={{ fontSize: 22, fontWeight: '700', color: '#fff' }}>Ajustes</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE CARD */}
        <Card style={{ marginBottom: 20, alignItems: 'center' }}>
          <View style={{
            width: 72, height: 72, borderRadius: 36,
            backgroundColor: C.wine,
            justifyContent: 'center', alignItems: 'center',
            marginBottom: 12,
          }}>
            <Text style={{ fontSize: 32 }}>📔</Text>
          </View>

          {editingName ? (
            <TextInput
              style={{
                fontSize: 18, fontWeight: '700', color: C.textPrimary,
                textAlign: 'center', borderBottomWidth: 2, borderColor: C.wine,
                paddingBottom: 4, minWidth: 160,
              }}
              value={nameVal}
              onChangeText={setNameVal}
              onBlur={saveName}
              onSubmitEditing={saveName}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setEditingName(true)}>
              <Text style={{ fontSize: 18, fontWeight: '700', color: C.textPrimary }}>
                {settings.userName}
              </Text>
            </TouchableOpacity>
          )}

          <Text style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>
            Toca el nombre para editar
          </Text>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <View style={{ backgroundColor: C.verdant + '22', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: C.verdant }}>
                {settings.syncEnabled ? '✓ Sync activo' : 'Sin sync'}
              </Text>
            </View>
            <View style={{ backgroundColor: C.marble, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: C.wine }}>
                {totalItems} elementos
              </Text>
            </View>
            <View style={{ backgroundColor: C.marble, paddingHorizontal: 10, paddingVertical: 3, borderRadius: 20 }}>
              <Text style={{ fontSize: 11, fontWeight: '700', color: C.wine }}>
                Uso privado
              </Text>
            </View>
          </View>
        </Card>

        {/* APARIENCIA */}
        <SectionHeader label="Apariencia" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="🌙" label="Modo oscuro" desc="Tema oscuro premium"
            right={<Toggle value={settings.darkMode} onToggle={() => toggle('darkMode')} />}
          />
          <Row
            icon="📐" label="Vista compacta" desc="Tarjetas más pequeñas"
            right={<Toggle value={settings.compactView} onToggle={() => toggle('compactView')} />}
          />
          <SelectRow
            icon="🔤" label="Tamaño de fuente"
            options={[['small', 'Pequeño'], ['medium', 'Mediano'], ['large', 'Grande']]}
            value={settings.fontSize}
            onChange={v => updateSettings({ fontSize: v as any })}
          />
        </Card>

        {/* NOTIFICACIONES */}
        <SectionHeader label="Notificaciones" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="🔔" label="Notificaciones"
            desc={settings.notifications ? 'Activas · Recordatorios automáticos' : 'Requiere permiso del sistema'}
            right={<Toggle value={settings.notifications} onToggle={() => toggle('notifications')} />}
          />
          <Row
            icon="🔊" label="Sonido" desc="Sonido en recordatorios"
            right={<Toggle value={settings.soundEnabled} onToggle={() => toggle('soundEnabled')} />}
          />
          <Row
            icon="📳" label="Vibración" desc="Vibrar en acciones y alertas"
            right={<Toggle value={settings.vibration} onToggle={() => toggle('vibration')} />}
          />
          <SelectRow
            icon="⏰" label="Recordatorio por defecto"
            options={[['5', '5 min'], ['15', '15 min'], ['30', '30 min'], ['60', '1 hora']]}
            value={settings.defaultReminder}
            onChange={v => updateSettings({ defaultReminder: v })}
          />
        </Card>

        {/* CALENDARIO */}
        <SectionHeader label="Calendario" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="📅" label="Semana empieza el lunes"
            right={<Toggle value={settings.startWeekMonday} onToggle={() => toggle('startWeekMonday')} />}
          />
          <SelectRow
            icon="🏷" label="Categoría por defecto"
            options={[['personal','Personal'],['work','Trabajo'],['health','Salud'],['finance','Finanzas'],['social','Social'],['other','Otro']]}
            value={settings.defaultCategory}
            onChange={v => updateSettings({ defaultCategory: v })}
          />
        </Card>

        {/* TAREAS */}
        <SectionHeader label="Tareas" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="✅" label="Mostrar completadas"
            desc="Ver tareas listas en la lista"
            right={<Toggle value={settings.showCompleted} onToggle={() => toggle('showCompleted')} />}
          />
        </Card>

        {/* SINCRONIZACIÓN */}
        <SectionHeader label="Sincronización y datos" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="☁️" label="Sincronización" desc="Respaldo automático"
            right={<Toggle value={settings.syncEnabled} onToggle={() => toggle('syncEnabled')} />}
          />
          <Row
            icon="💾" label="Auto-respaldo" desc="Guardar automáticamente"
            right={<Toggle value={settings.autoBackup} onToggle={() => toggle('autoBackup')} />}
          />
          <SelectRow
            icon="🕐" label="Intervalo de sync"
            options={[['1','1 min'],['5','5 min'],['15','15 min'],['30','30 min']]}
            value={settings.syncInterval}
            onChange={v => updateSettings({ syncInterval: v })}
          />
          <View style={{ paddingTop: 8, paddingLeft: 50 }}>
            <Text style={{ fontSize: 11, color: C.textMuted }}>
              Última sync: {timeAgo(settings.lastSync)}
            </Text>
          </View>
        </Card>

        {/* DATOS */}
        <SectionHeader label="Datos" />
        <Card style={{ marginBottom: 16 }}>
          <Row
            icon="📤" label="Exportar datos"
            desc="Compartir respaldo JSON"
            onPress={handleExport}
          />
          <Row
            icon="🔒" label="Privacidad"
            desc="Solo local · Sin cuentas sociales · Sin anuncios"
          />
          <Row
            icon="🗑" label="Borrar todos los datos"
            desc="Acción irreversible"
            danger onPress={handleClear}
          />
        </Card>

        {/* FOOTER */}
        <Text style={{ textAlign: 'center', fontSize: 11, color: C.textMuted, marginTop: 8 }}>
          Mi Agenda Personal v2.0{'\n'}
          {events.length} eventos · {tasks.length} tareas · {notes.length} notas
        </Text>
      </ScrollView>
    </View>
  );
}
