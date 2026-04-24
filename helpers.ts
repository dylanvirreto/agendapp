// src/utils/helpers.ts
import { MONTHS_ES, DAYS_SHORT } from './theme';

export function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

export function tomorrowStr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  if (dateStr === todayStr()) return 'Hoy';
  if (dateStr === tomorrowStr()) return 'Mañana';
  const d = new Date(dateStr + 'T12:00:00');
  return `${d.getDate()} ${MONTHS_ES[d.getMonth()]}`;
}

export function formatFullDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return `${DAYS_SHORT[d.getDay()]}, ${d.getDate()} de ${MONTHS_ES[d.getMonth()]} ${d.getFullYear()}`;
}

export function formatTime(date: Date): string {
  return date.toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit', hour12: false });
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return 'Ahora';
  if (min < 60) return `Hace ${min}m`;
  const h = Math.floor(min / 60);
  if (h < 24) return `Hace ${h}h`;
  return `Hace ${Math.floor(h / 24)}d`;
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export function greeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Buenos días';
  if (h < 19) return 'Buenas tardes';
  return 'Buenas noches';
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
