// src/utils/notifications.ts
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { AgendaEvent } from './types';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export async function requestNotificationPermissions(): Promise<boolean> {
  if (!Device.isDevice) return false;

  const { status: existing } = await Notifications.getPermissionsAsync();
  if (existing === 'granted') return true;

  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return false;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Mi Agenda',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#7A213A',
      sound: 'default',
    });
  }
  return true;
}

export async function scheduleEventReminder(event: AgendaEvent): Promise<string | null> {
  if (!event.reminder || event.reminder === 'none') return null;

  try {
    const eventDate = new Date(`${event.date}T${event.startTime}:00`);
    const reminderMs = parseInt(event.reminder) * 60 * 1000;
    const triggerDate = new Date(eventDate.getTime() - reminderMs);

    if (triggerDate <= new Date()) return null;

    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: `📅 ${event.title}`,
        body: `Comienza en ${event.reminder} min · ${event.startTime}`,
        color: '#7A213A',
        sound: 'default',
        data: { eventId: event.id, type: 'event' },
      },
      trigger: {
        date: triggerDate,
        channelId: 'default',
      },
    });
    return id;
  } catch {
    return null;
  }
}

export async function cancelNotification(id: string): Promise<void> {
  try {
    await Notifications.cancelScheduledNotificationAsync(id);
  } catch {}
}

export async function cancelAllNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export async function scheduleAllReminders(events: AgendaEvent[]): Promise<void> {
  await cancelAllNotifications();
  for (const event of events) {
    await scheduleEventReminder(event);
  }
}
