// src/components/UI.tsx
import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, ActivityIndicator,
  ViewStyle, TextStyle,
} from 'react-native';
import { useApp } from '../context/AppContext';

// ── CARD ────────────────────────────────────────────────────────
export function Card({
  children, onPress, style,
}: { children: React.ReactNode; onPress?: () => void; style?: ViewStyle }) {
  const { C } = useApp();
  const card = (
    <View style={[{
      backgroundColor: C.bgCard,
      borderRadius: 16,
      padding: 14,
      borderWidth: 1,
      borderColor: C.border,
      shadowColor: C.wine,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    }, style]}>
      {children}
    </View>
  );
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.82}>
        {card}
      </TouchableOpacity>
    );
  }
  return card;
}

// ── CHIP ─────────────────────────────────────────────────────────
export function Chip({
  label, color, small,
}: { label: string; color: string; small?: boolean }) {
  return (
    <View style={{
      paddingHorizontal: small ? 8 : 10,
      paddingVertical: small ? 2 : 4,
      borderRadius: 20,
      backgroundColor: color + '22',
      alignSelf: 'flex-start',
    }}>
      <Text style={{
        fontSize: small ? 10 : 11,
        fontWeight: '700',
        color,
        letterSpacing: 0.3,
      }}>{label}</Text>
    </View>
  );
}

// ── PRIORITY DOT ──────────────────────────────────────────────────
export function PriorityDot({ color }: { color: string }) {
  return (
    <View style={{
      width: 8, height: 8, borderRadius: 4,
      backgroundColor: color, flexShrink: 0,
    }} />
  );
}

// ── TOGGLE ───────────────────────────────────────────────────────
export function Toggle({
  value, onToggle,
}: { value: boolean; onToggle: () => void }) {
  const { C } = useApp();
  return (
    <TouchableOpacity
      onPress={onToggle}
      activeOpacity={0.85}
      style={{
        width: 46, height: 26, borderRadius: 13,
        backgroundColor: value ? C.verdant : C.border,
        justifyContent: 'center',
        padding: 3,
      }}
    >
      <View style={{
        width: 20, height: 20, borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: value ? 'flex-end' : 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      }} />
    </TouchableOpacity>
  );
}

// ── SECTION TITLE ────────────────────────────────────────────────
export function SectionTitle({
  children, style,
}: { children: React.ReactNode; style?: TextStyle }) {
  const { C } = useApp();
  return (
    <Text style={[{
      fontSize: 18,
      fontWeight: '700',
      color: C.wine,
      marginBottom: 12,
      letterSpacing: 0.2,
    }, style]}>
      {children}
    </Text>
  );
}

// ── FIELD LABEL ──────────────────────────────────────────────────
export function FieldLabel({ children }: { children: string }) {
  const { C } = useApp();
  return (
    <Text style={{
      fontSize: 10, fontWeight: '700',
      color: C.wine, letterSpacing: 1,
      textTransform: 'uppercase', marginBottom: 6,
    }}>
      {children}
    </Text>
  );
}

// ── EMPTY STATE ──────────────────────────────────────────────────
export function EmptyState({ emoji, label }: { emoji: string; label: string }) {
  const { C } = useApp();
  return (
    <View style={{ alignItems: 'center', paddingVertical: 32 }}>
      <Text style={{ fontSize: 40, marginBottom: 10 }}>{emoji}</Text>
      <Text style={{ fontSize: 14, color: C.textMuted }}>{label}</Text>
    </View>
  );
}

// ── LOADING ──────────────────────────────────────────────────────
export function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7A213A' }}>
      <Text style={{ fontSize: 40, marginBottom: 16 }}>📔</Text>
      <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 24 }}>Mi Agenda</Text>
      <ActivityIndicator color="rgba(255,255,255,0.8)" />
    </View>
  );
}

// ── FAB ──────────────────────────────────────────────────────────
export function FAB({ onPress }: { onPress: () => void }) {
  const { C } = useApp();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={{
        position: 'absolute',
        bottom: 80,
        alignSelf: 'center',
        width: 56, height: 56, borderRadius: 28,
        backgroundColor: C.verdant,
        justifyContent: 'center', alignItems: 'center',
        shadowColor: C.verdant,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 12,
        elevation: 8,
        zIndex: 100,
      }}
    >
      <Text style={{ fontSize: 30, color: '#fff', lineHeight: 34 }}>+</Text>
    </TouchableOpacity>
  );
}

// ── PROGRESS BAR ─────────────────────────────────────────────────
export function ProgressBar({ value, total }: { value: number; total: number }) {
  const { C } = useApp();
  const pct = total > 0 ? value / total : 0;
  return (
    <View style={{ height: 6, backgroundColor: C.border, borderRadius: 3 }}>
      <View style={{
        height: '100%',
        width: `${pct * 100}%`,
        backgroundColor: C.verdant,
        borderRadius: 3,
      }} />
    </View>
  );
}
