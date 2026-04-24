// src/utils/types.ts

export interface AgendaEvent {
  id: string;
  type: 'event';
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:MM
  endTime: string;
  category: string;
  priority: string;
  color: string;
  reminder: string; // minutes as string, or 'none'
  repeat: string;
  notes: string;
  createdAt: string;
}

export interface AgendaTask {
  id: string;
  type: 'task';
  title: string;
  description: string;
  deadline: string; // YYYY-MM-DD
  priority: string;
  status: 'pending' | 'in-progress' | 'done';
  category: string;
  notes: string;
  createdAt: string;
}

export interface AgendaNote {
  id: string;
  type: 'note';
  title: string;
  content: string;
  tags: string; // comma separated
  noteColor: string; // light hex
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppSettings {
  darkMode: boolean;
  notifications: boolean;
  soundEnabled: boolean;
  vibration: boolean;
  startWeekMonday: boolean;
  defaultReminder: string;
  defaultCategory: string;
  fontSize: 'small' | 'medium' | 'large';
  compactView: boolean;
  showCompleted: boolean;
  syncEnabled: boolean;
  autoBackup: boolean;
  syncInterval: string;
  userName: string;
  lastSync: string;
}

export const DEFAULT_SETTINGS: AppSettings = {
  darkMode: false,
  notifications: false,
  soundEnabled: true,
  vibration: true,
  startWeekMonday: false,
  defaultReminder: '15',
  defaultCategory: 'personal',
  fontSize: 'medium',
  compactView: false,
  showCompleted: true,
  syncEnabled: true,
  autoBackup: true,
  syncInterval: '5',
  userName: 'Mi Agenda',
  lastSync: new Date().toISOString(),
};
