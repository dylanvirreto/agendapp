# 📔 Mi Agenda Personal

App móvil tipo agenda personal construida con **Expo 52 + React Native + TypeScript**.

Paleta: Wine Depth `#7A213A` · Marble Haze `#F5E4E7` · Verdant Path `#4A8C6A`

---

## ✅ Requisitos

- Node.js 18+
- npm 9+ o yarn
- Expo CLI (`npm install -g expo-cli`)
- Android 15+ / iOS 16+ para pruebas en dispositivo
- Expo Go app (para desarrollo rápido sin build)

---

## 🚀 Instalación rápida

```bash
# 1. Clonar / descomprimir el proyecto
cd mi-agenda-expo

# 2. Instalar dependencias
npm install

# 3. Generar assets placeholder (solo primera vez)
node scripts/generate-assets.js

# 4. Iniciar servidor de desarrollo
npm start
```

Luego escanea el QR con **Expo Go** en tu teléfono.

---

## 📱 Correr en Android

```bash
# Con Expo Go (sin build, más rápido)
npm start
# Escanea QR con Expo Go

# Build APK de desarrollo (requiere cuenta EAS)
npm install -g eas-cli
eas login
eas build --platform android --profile preview
```

---

## 🏗️ Build APK para instalar en Android (sin Play Store)

```bash
# 1. Instalar EAS CLI
npm install -g eas-cli

# 2. Login en Expo (crear cuenta gratis en expo.dev)
eas login

# 3. Configurar proyecto (solo primera vez)
eas build:configure

# 4. Build APK directo (preview = APK instalable)
eas build --platform android --profile preview

# El APK se descarga desde el link que genera EAS
```

> **Sin EAS**: también puedes usar `npx expo run:android` si tienes Android Studio instalado.

---

## 📁 Estructura del proyecto

```
mi-agenda-expo/
├── app/
│   ├── _layout.tsx          # Root layout (AppProvider + SafeArea)
│   └── (tabs)/
│       ├── _layout.tsx      # Bottom tab navigator
│       ├── index.tsx        # → HomeScreen
│       ├── calendar.tsx     # → CalendarScreen
│       ├── tasks.tsx        # → TasksScreen
│       ├── notes.tsx        # → NotesScreen
│       └── settings.tsx     # → SettingsScreen
├── src/
│   ├── context/
│   │   └── AppContext.tsx   # Estado global (events, tasks, notes, settings)
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── CalendarScreen.tsx
│   │   ├── TasksScreen.tsx
│   │   ├── NotesScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── components/
│   │   ├── UI.tsx           # Card, Toggle, FAB, ProgressBar, etc.
│   │   ├── ItemCards.tsx    # EventCard, TaskCard, NoteCard
│   │   └── ItemModal.tsx    # Modal crear / editar
│   └── utils/
│       ├── theme.ts         # Paleta de colores + helpers de tema
│       ├── types.ts         # Interfaces TypeScript
│       ├── helpers.ts       # Fechas, formateo
│       ├── storage.ts       # AsyncStorage CRUD
│       └── notifications.ts # Expo Notifications
├── assets/                  # Íconos y splash (reemplazar antes de publicar)
├── scripts/
│   └── generate-assets.js   # Genera assets placeholder
├── app.json                 # Configuración Expo (sin EAS)
├── babel.config.js
├── metro.config.js
├── tsconfig.json
└── package.json
```

---

## ⚙️ Funciones implementadas

| Función | Estado |
|---------|--------|
| Crear / editar / eliminar eventos | ✅ |
| Crear / editar / eliminar tareas | ✅ |
| Crear / editar / eliminar notas | ✅ |
| Duplicar elementos | ✅ |
| Marcar tareas como completadas | ✅ |
| Búsqueda global | ✅ |
| Filtros por estado y prioridad | ✅ |
| Calendario mensual interactivo | ✅ |
| Modo oscuro completo | ✅ |
| Notificaciones nativas | ✅ |
| Haptics / vibración | ✅ |
| Persistencia local (AsyncStorage) | ✅ |
| Exportar datos JSON | ✅ |
| Sincronización (simulada) | ✅ |
| Datos demo al primer inicio | ✅ |
| Compatible Android 15+ | ✅ |
| Soporte safe area (notch, etc.) | ✅ |

---

## 🎨 Personalización

Edita `src/utils/theme.ts` para cambiar colores:

```ts
export const LIGHT_COLORS = {
  wine: '#7A213A',      // Color principal
  verdant: '#4A8C6A',  // Botón FAB y acciones
  marble: '#F5E4E7',   // Fondos suaves
  // ...
};
```

---

## 🔒 Privacidad

- **Sin cuenta pública** requerida
- **Sin anuncios**
- **Sin telemetría** ni envío de datos externos
- Todos los datos se almacenan localmente en el dispositivo
- Exportación manual bajo control del usuario

---

## 📝 Notas

- Las imágenes en `assets/` son placeholders. Reemplázalas antes de publicar en Play Store.
- Para uso con EAS Build, ejecuta `eas build:configure` y agrega tu `projectId` en `app.json`.
- El proyecto **funciona sin EAS** usando Expo Go o `npx expo run:android`.
