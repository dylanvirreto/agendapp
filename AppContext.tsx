// src/context/AppContext.tsx
import React, {
  createContext, useContext, useEffect, useState, useCallback, ReactNode,
} from 'react';
import * as Haptics from 'expo-haptics';
import { AgendaEvent, AgendaTask, AgendaNote, AppSettings, DEFAULT_SETTINGS } from '../utils/types';
import {
  loadEvents, saveEvents, loadTasks, saveTasks,
  loadNotes, saveNotes, loadSettings, saveSettings,
} from '../utils/storage';
import { LIGHT_COLORS, DARK_COLORS } from '../utils/theme';
import { scheduleAllReminders } from '../utils/notifications';

interface AppContextType {
  // Data
  events: AgendaEvent[];
  tasks: AgendaTask[];
  notes: AgendaNote[];
  settings: AppSettings;
  loading: boolean;
  syncing: boolean;

  // Colors (theme-aware)
  C: typeof LIGHT_COLORS;

  // Event CRUD
  addEvent: (e: AgendaEvent) => Promise<void>;
  updateEvent: (e: AgendaEvent) => Promise<void>;
  deleteEvent: (id: string) => Promise<void>;

  // Task CRUD
  addTask: (t: AgendaTask) => Promise<void>;
  updateTask: (t: AgendaTask) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;

  // Note CRUD
  addNote: (n: AgendaNote) => Promise<void>;
  updateNote: (n: AgendaNote) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;

  // Settings
  updateSettings: (partial: Partial<AppSettings>) => Promise<void>;

  // Actions
  triggerSync: () => void;
  vibrate: (style?: 'light' | 'medium' | 'heavy') => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<AgendaEvent[]>([]);
  const [tasks, setTasks] = useState<AgendaTask[]>([]);
  const [notes, setNotes] = useState<AgendaNote[]>([]);
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const C = settings.darkMode ? DARK_COLORS : LIGHT_COLORS;

  // ── LOAD ─────────────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      const [e, t, n, s] = await Promise.all([
        loadEvents(), loadTasks(), loadNotes(), loadSettings(),
      ]);
      setEvents(e);
      setTasks(t);
      setNotes(n);
      setSettings(s);
      setLoading(false);
    })();
  }, []);

  // ── AUTO-SYNC ─────────────────────────────────────────────────
  useEffect(() => {
    if (loading || !settings.syncEnabled) return;
    const ms = parseInt(settings.syncInterval) * 60 * 1000;
    const timer = setInterval(() => {
      updateSettings({ lastSync: new Date().toISOString() });
    }, ms);
    return () => clearInterval(timer);
  }, [loading, settings.syncEnabled, settings.syncInterval]);

  // ── HAPTICS ──────────────────────────────────────────────────
  const vibrate = useCallback((style: 'light' | 'medium' | 'heavy' = 'light') => {
    if (!settings.vibration) return;
    const map = {
      light: Haptics.ImpactFeedbackStyle.Light,
      medium: Haptics.ImpactFeedbackStyle.Medium,
      heavy: Haptics.ImpactFeedbackStyle.Heavy,
    };
    Haptics.impactAsync(map[style]).catch(() => {});
  }, [settings.vibration]);

  // ── SYNC SIMULATION ──────────────────────────────────────────
  const triggerSync = useCallback(() => {
    if (!settings.syncEnabled || syncing) return;
    setSyncing(true);
    setTimeout(async () => {
      setSyncing(false);
      const s = { ...settings, lastSync: new Date().toISOString() };
      setSettings(s);
      await saveSettings(s);
    }, 1600);
  }, [settings, syncing]);

  // ── EVENTS ───────────────────────────────────────────────────
  const addEvent = useCallback(async (e: AgendaEvent) => {
    const next = [...events, e];
    setEvents(next);
    await saveEvents(next);
    await scheduleAllReminders(next);
    if (settings.syncEnabled) triggerSync();
  }, [events, settings.syncEnabled, triggerSync]);

  const updateEvent = useCallback(async (e: AgendaEvent) => {
    const next = events.map(x => x.id === e.id ? e : x);
    setEvents(next);
    await saveEvents(next);
    await scheduleAllReminders(next);
    if (settings.syncEnabled) triggerSync();
  }, [events, settings.syncEnabled, triggerSync]);

  const deleteEvent = useCallback(async (id: string) => {
    const next = events.filter(x => x.id !== id);
    setEvents(next);
    await saveEvents(next);
    await scheduleAllReminders(next);
  }, [events]);

  // ── TASKS ────────────────────────────────────────────────────
  const addTask = useCallback(async (t: AgendaTask) => {
    const next = [...tasks, t];
    setTasks(next);
    await saveTasks(next);
    if (settings.syncEnabled) triggerSync();
  }, [tasks, settings.syncEnabled, triggerSync]);

  const updateTask = useCallback(async (t: AgendaTask) => {
    const next = tasks.map(x => x.id === t.id ? t : x);
    setTasks(next);
    await saveTasks(next);
    if (settings.syncEnabled) triggerSync();
  }, [tasks, settings.syncEnabled, triggerSync]);

  const deleteTask = useCallback(async (id: string) => {
    const next = tasks.filter(x => x.id !== id);
    setTasks(next);
    await saveTasks(next);
  }, [tasks]);

  const toggleTask = useCallback(async (id: string) => {
    const next = tasks.map(t => {
      if (t.id !== id) return t;
      return { ...t, status: t.status === 'done' ? 'pending' : 'done' } as AgendaTask;
    });
    setTasks(next);
    await saveTasks(next);
  }, [tasks]);

  // ── NOTES ────────────────────────────────────────────────────
  const addNote = useCallback(async (n: AgendaNote) => {
    const next = [...notes, n];
    setNotes(next);
    await saveNotes(next);
    if (settings.syncEnabled) triggerSync();
  }, [notes, settings.syncEnabled, triggerSync]);

  const updateNote = useCallback(async (n: AgendaNote) => {
    const next = notes.map(x => x.id === n.id ? n : x);
    setNotes(next);
    await saveNotes(next);
    if (settings.syncEnabled) triggerSync();
  }, [notes, settings.syncEnabled, triggerSync]);

  const deleteNote = useCallback(async (id: string) => {
    const next = notes.filter(x => x.id !== id);
    setNotes(next);
    await saveNotes(next);
  }, [notes]);

  // ── SETTINGS ─────────────────────────────────────────────────
  const updateSettings = useCallback(async (partial: Partial<AppSettings>) => {
    const next = { ...settings, ...partial };
    setSettings(next);
    await saveSettings(next);
  }, [settings]);

  return (
    <AppContext.Provider value={{
      events, tasks, notes, settings, loading, syncing, C,
      addEvent, updateEvent, deleteEvent,
      addTask, updateTask, deleteTask, toggleTask,
      addNote, updateNote, deleteNote,
      updateSettings, triggerSync, vibrate,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
