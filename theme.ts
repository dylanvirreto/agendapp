// src/utils/theme.ts

export const LIGHT_COLORS = {
  wine: '#7A213A',
  wineLight: '#9B2D4E',
  wineDark: '#5C1829',
  marble: '#F5E4E7',
  marbleDeep: '#EDD0D6',
  verdant: '#4A8C6A',
  verdantLight: '#5BA07C',
  verdantDark: '#3A6E52',
  bg: '#FAF8F8',
  bgCard: '#FFFFFF',
  bgSecondary: '#F5F0F1',
  textPrimary: '#1A1010',
  textSecondary: '#6B5B5E',
  textMuted: '#A09095',
  border: '#EDE0E3',
  shadow: 'rgba(122,33,58,0.08)',
  navBg: '#FFFFFF',
  inputBg: '#FAF8F8',
  // Priority colors
  high: '#C0384A',
  medium: '#D4845A',
  low: '#4A8C6A',
};

export const DARK_COLORS = {
  wine: '#C4607A',
  wineLight: '#D4708A',
  wineDark: '#A04060',
  marble: '#3A2530',
  marbleDeep: '#4A303C',
  verdant: '#5BAA80',
  verdantLight: '#6BBD93',
  verdantDark: '#4A8A66',
  bg: '#120D0F',
  bgCard: '#1E1418',
  bgSecondary: '#261A1E',
  textPrimary: '#F0E8EA',
  textSecondary: '#C0A8B0',
  textMuted: '#806070',
  border: '#3A2530',
  shadow: 'rgba(0,0,0,0.3)',
  navBg: '#1E1418',
  inputBg: '#261A1E',
  // Priority colors (slightly lighter for dark bg)
  high: '#E05060',
  medium: '#E09060',
  low: '#5BAA80',
};

export const CATEGORIES = [
  { id: 'personal', label: 'Personal', color: '#7A213A', icon: '👤' },
  { id: 'work', label: 'Trabajo', color: '#4A8C6A', icon: '💼' },
  { id: 'health', label: 'Salud', color: '#D4845A', icon: '❤️' },
  { id: 'finance', label: 'Finanzas', color: '#5B7FA6', icon: '💰' },
  { id: 'social', label: 'Social', color: '#9B6BB5', icon: '🎉' },
  { id: 'other', label: 'Otro', color: '#8A8A8A', icon: '📌' },
] as const;

export const PRIORITIES = [
  { id: 'high', label: 'Alta', color: '#C0384A' },
  { id: 'medium', label: 'Media', color: '#D4845A' },
  { id: 'low', label: 'Baja', color: '#4A8C6A' },
] as const;

export const NOTE_COLORS = [
  { light: '#F5E4E7', dark: '#3A1A22', label: 'Rosa' },
  { light: '#E8F5EE', dark: '#1A2E22', label: 'Verde' },
  { light: '#EEE8F5', dark: '#221A2E', label: 'Lila' },
  { light: '#E8EEF5', dark: '#1A222E', label: 'Azul' },
  { light: '#F5EEE8', dark: '#2E221A', label: 'Durazno' },
  { light: '#F0F0F0', dark: '#252525', label: 'Gris' },
];

export const MONTHS_ES = [
  'Enero','Febrero','Marzo','Abril','Mayo','Junio',
  'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',
];

export const DAYS_SHORT = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
export const DAYS_LONG = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

export type CategoryId = typeof CATEGORIES[number]['id'];
export type PriorityId = typeof PRIORITIES[number]['id'];

export function getCategoryColor(id: string): string {
  return CATEGORIES.find(c => c.id === id)?.color ?? '#8A8A8A';
}

export function getCategoryLabel(id: string): string {
  return CATEGORIES.find(c => c.id === id)?.label ?? id;
}

export function getCategoryIcon(id: string): string {
  return CATEGORIES.find(c => c.id === id)?.icon ?? '📌';
}

export function getPriorityColor(id: string, dark = false): string {
  const base = PRIORITIES.find(p => p.id === id)?.color ?? '#8A8A8A';
  if (dark && id === 'high') return '#E05060';
  if (dark && id === 'low') return '#5BAA80';
  return base;
}

export function getPriorityLabel(id: string): string {
  return PRIORITIES.find(p => p.id === id)?.label ?? id;
}
