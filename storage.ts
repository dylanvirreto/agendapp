// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AgendaEvent, AgendaTask, AgendaNote, AppSettings, DEFAULT_SETTINGS } from './types';
import { generateId, todayStr, tomorrowStr } from './helpers';
import { getCategoryColor } from './theme';

const KEYS = {
  EVENTS: 'agenda_events_v1',
  TASKS: 'agenda_tasks_v1',
  NOTES: 'agenda_notes_v1',
  SETTINGS: 'agenda_settings_v1',
};

// ── DEMO DATA ──────────────────────────────────────────────────
function getDemoEvents(): AgendaEvent[] {
  return [
    {
      id: generateId(), type: 'event',
      title: 'Cita con el médico', description: 'Revisión anual',
      date: todayStr(), startTime: '09:00', endTime: '10:00',
      category: 'health', priority: 'high', color: '#D4845A',
      reminder: '30', repeat: 'none', notes: '',
      createdAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'event',
      title: 'Reunión de equipo', description: 'Sprint planning Q2',
      date: todayStr(), startTime: '14:00', endTime: '15:30',
      category: 'work', priority: 'medium', color: '#4A8C6A',
      reminder: '15', repeat: 'weekly', notes: 'Preparar presentación',
      createdAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'event',
      title: 'Cena familiar', description: 'Cumpleaños de mamá',
      date: tomorrowStr(), startTime: '20:00', endTime: '23:00',
      category: 'social', priority: 'high', color: '#9B6BB5',
      reminder: '60', repeat: 'none', notes: 'Llevar flores',
      createdAt: new Date().toISOString(),
    },
  ];
}

function getDemoTasks(): AgendaTask[] {
  return [
    {
      id: generateId(), type: 'task',
      title: 'Pagar facturas del mes', description: '',
      deadline: todayStr(), priority: 'high', status: 'pending',
      category: 'finance', notes: 'Luz, agua, internet',
      createdAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'task',
      title: 'Comprar víveres', description: '',
      deadline: tomorrowStr(), priority: 'medium', status: 'pending',
      category: 'personal', notes: '',
      createdAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'task',
      title: 'Leer libro 30 min', description: '',
      deadline: todayStr(), priority: 'low', status: 'done',
      category: 'personal', notes: '',
      createdAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'task',
      title: 'Llamar al contador', description: '',
      deadline: tomorrowStr(), priority: 'high', status: 'pending',
      category: 'finance', notes: '',
      createdAt: new Date().toISOString(),
    },
  ];
}

function getDemoNotes(): AgendaNote[] {
  return [
    {
      id: generateId(), type: 'note',
      title: 'Ideas para vacaciones',
      content: 'Visitar Cartagena, explorar Minca, ruta por la Sierra Nevada...',
      tags: 'viajes,personal', noteColor: '#F5E4E7', notes: '',
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'note',
      title: 'Receta pasta carbonara',
      content: 'Huevos, panceta, queso pecorino romano, pimienta negra. Sin crema para la versión auténtica.',
      tags: 'cocina', noteColor: '#E8F5EE', notes: '',
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
    {
      id: generateId(), type: 'note',
      title: 'Libros pendientes',
      content: 'El nombre de la rosa, Rayuela, Cien años de soledad (releer), El problema de los tres cuerpos.',
      tags: 'lectura', noteColor: '#EEE8F5', notes: '',
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    },
  ];
}

// ── CRUD ───────────────────────────────────────────────────────
export async function loadEvents(): Promise<AgendaEvent[]> {
  try {
    const raw = await AsyncStorage.getItem(KEYS.EVENTS);
    if (raw) return JSON.parse(raw);
    const demo = getDemoEvents();
    await AsyncStorage.setItem(KEYS.EVENTS, JSON.stringify(demo));
    return demo;
  } catch { return getDemoEvents(); }
}

export async function saveEvents(events: AgendaEvent[]): Promise<void> {
  await AsyncStorage.setItem(KEYS.EVENTS, JSON.stringify(events));
}

export async function loadTasks(): Promise<AgendaTask[]> {
  try {
    const raw = await AsyncStorage.getItem(KEYS.TASKS);
    if (raw) return JSON.parse(raw);
    const demo = getDemoTasks();
    await AsyncStorage.setItem(KEYS.TASKS, JSON.stringify(demo));
    return demo;
  } catch { return getDemoTasks(); }
}

export async function saveTasks(tasks: AgendaTask[]): Promise<void> {
  await AsyncStorage.setItem(KEYS.TASKS, JSON.stringify(tasks));
}

export async function loadNotes(): Promise<AgendaNote[]> {
  try {
    const raw = await AsyncStorage.getItem(KEYS.NOTES);
    if (raw) return JSON.parse(raw);
    const demo = getDemoNotes();
    await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(demo));
    return demo;
  } catch { return getDemoNotes(); }
}

export async function saveNotes(notes: AgendaNote[]): Promise<void> {
  await AsyncStorage.setItem(KEYS.NOTES, JSON.stringify(notes));
}

export async function loadSettings(): Promise<AppSettings> {
  try {
    const raw = await AsyncStorage.getItem(KEYS.SETTINGS);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    return DEFAULT_SETTINGS;
  } catch { return DEFAULT_SETTINGS; }
}

export async function saveSettings(settings: AppSettings): Promise<void> {
  await AsyncStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
}

export async function exportAllData(): Promise<string> {
  const events = await loadEvents();
  const tasks = await loadTasks();
  const notes = await loadNotes();
  const settings = await loadSettings();
  return JSON.stringify({ events, tasks, notes, settings, exportDate: new Date().toISOString() }, null, 2);
}

export async function importAllData(json: string): Promise<void> {
  const data = JSON.parse(json);
  if (data.events) await saveEvents(data.events);
  if (data.tasks) await saveTasks(data.tasks);
  if (data.notes) await saveNotes(data.notes);
}

export async function clearAllData(): Promise<void> {
  await AsyncStorage.multiRemove(Object.values(KEYS));
}
