<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1.0, user-scalable=no">
<meta name="theme-color" content="#7A213A" id="theme-meta">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Mi Agenda">
<title>Mi Agenda Personal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>
:root {
  --wine: #7A213A;
  --wine-light: #9B2D4E;
  --wine-dark: #5C1829;
  --marble: #F5E4E7;
  --marble-deep: #EDD0D6;
  --verdant: #4A8C6A;
  --verdant-light: #5BA07C;
  --bg: #FAF8F8;
  --bg-card: #FFFFFF;
  --bg-secondary: #F5F0F1;
  --text-primary: #1A1010;
  --text-secondary: #6B5B5E;
  --text-muted: #A09095;
  --border: #EDE0E3;
  --shadow: rgba(122,33,58,0.08);
  --nav-bg: #FFFFFF;
  --header-bg: linear-gradient(135deg, #7A213A 0%, #9B2D4E 60%, #A83055 100%);
  --input-bg: #FAF8F8;
  --modal-overlay: rgba(0,0,0,0.45);
}

[data-theme="dark"] {
  --wine: #C4607A;
  --wine-light: #D4708A;
  --wine-dark: #A04060;
  --marble: #3A2530;
  --marble-deep: #4A303C;
  --verdant: #5BAA80;
  --verdant-light: #6BBD93;
  --bg: #120D0F;
  --bg-card: #1E1418;
  --bg-secondary: #261A1E;
  --text-primary: #F0E8EA;
  --text-secondary: #C0A8B0;
  --text-muted: #806070;
  --border: #3A2530;
  --shadow: rgba(0,0,0,0.3);
  --nav-bg: #1E1418;
  --header-bg: linear-gradient(135deg, #5C1829 0%, #7A213A 60%, #8B2844 100%);
  --input-bg: #261A1E;
  --modal-overlay: rgba(0,0,0,0.7);
}

* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

body {
  font-family: 'DM Sans', sans-serif;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
}

#app {
  width: 100%;
  max-width: 430px;
  height: 100vh;
  height: 100dvh;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: background 0.3s;
}

/* SCROLLBAR */
::-webkit-scrollbar { width: 0; height: 0; }

/* HEADER */
.top-bar {
  background: var(--header-bg, linear-gradient(135deg, #7A213A 0%, #9B2D4E 100%));
  padding: env(safe-area-inset-top, 44px) 20px 16px;
  flex-shrink: 0;
  transition: background 0.3s;
}

.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}

.top-bar-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.3px;
}

.top-bar-actions { display: flex; gap: 4px; }

/* NAV */
.bottom-nav {
  background: var(--nav-bg);
  border-top: 1px solid var(--border);
  display: flex;
  height: calc(64px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  flex-shrink: 0;
  transition: background 0.3s, border-color 0.3s;
  position: relative;
  z-index: 10;
}

.nav-btn {
  flex: 1; border: none; background: transparent; cursor: pointer;
  display: flex; flex-direction: column; align-items: center;
  justify-content: center; gap: 3px; padding: 0;
  font-family: 'DM Sans', sans-serif;
  color: var(--text-muted);
  transition: color 0.15s;
  position: relative;
}

.nav-btn.active { color: var(--wine); }
.nav-btn .nav-icon { font-size: 20px; line-height: 1; }
.nav-btn .nav-label { font-size: 10px; font-weight: 600; letter-spacing: 0.3px; }
.nav-btn .nav-dot {
  position: absolute; bottom: 4px;
  width: 4px; height: 4px; border-radius: 2px;
  background: var(--wine); opacity: 0;
  transition: opacity 0.15s;
}
.nav-btn.active .nav-dot { opacity: 1; }

/* FAB */
.fab {
  position: absolute;
  bottom: calc(64px + env(safe-area-inset-bottom, 0px) + 12px);
  left: 50%; transform: translateX(-50%);
  width: 56px; height: 56px; border-radius: 28px;
  border: none; cursor: pointer;
  background: linear-gradient(135deg, var(--verdant), var(--verdant-light));
  box-shadow: 0 6px 20px rgba(74,140,106,0.45);
  display: flex; align-items: center; justify-content: center;
  font-size: 28px; color: #fff; font-weight: 300;
  z-index: 20;
  transition: transform 0.15s, box-shadow 0.15s;
}
.fab:active { transform: translateX(-50%) scale(0.92); box-shadow: 0 3px 10px rgba(74,140,106,0.35); }

/* SCROLL CONTENT */
.screen { flex: 1; overflow-y: auto; }

/* CARDS */
.card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 14px 16px;
  box-shadow: 0 2px 12px var(--shadow);
  border: 1px solid var(--border);
  transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
}
.card-press { transition: transform 0.12s; }
.card-press:active { transform: scale(0.985); }

/* CHIPS */
.chip {
  display: inline-flex; align-items: center;
  padding: 3px 9px; border-radius: 20px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.3px;
  white-space: nowrap;
}

/* TOGGLE */
.toggle-track {
  width: 46px; height: 26px; border-radius: 13px;
  position: relative; cursor: pointer;
  transition: background 0.2s; flex-shrink: 0;
  border: none;
}
.toggle-thumb {
  position: absolute; top: 3px;
  width: 20px; height: 20px; border-radius: 10px; background: #fff;
  transition: left 0.2s; box-shadow: 0 1px 4px rgba(0,0,0,0.25);
}

/* INPUTS */
.field-label {
  font-size: 10px; font-weight: 700; color: var(--wine);
  letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px;
}
.field-input {
  width: 100%; padding: 11px 14px; border-radius: 12px;
  border: 1.5px solid var(--border); background: var(--input-bg);
  font-size: 14px; color: var(--text-primary); outline: none;
  font-family: 'DM Sans', sans-serif;
  transition: border-color 0.2s, background 0.3s;
  -webkit-appearance: none;
}
.field-input:focus { border-color: var(--wine); }
.field-textarea {
  resize: none; min-height: 80px; line-height: 1.5;
}
.field-select {
  cursor: pointer; -webkit-appearance: none; appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%237A213A' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: right 14px center;
  padding-right: 36px;
}

/* MODAL */
.modal-overlay {
  position: fixed; inset: 0; background: var(--modal-overlay);
  z-index: 1000; display: flex; align-items: flex-end;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  animation: fadeIn 0.2s;
}
.modal-sheet {
  width: 100%; max-height: 92dvh; background: var(--bg-card);
  border-radius: 24px 24px 0 0; overflow-y: auto;
  padding-bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  animation: slideUp 0.28s cubic-bezier(0.34,1.1,0.64,1);
  transition: background 0.3s;
}
@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* SEARCH BAR */
.search-bar-wrap { background: var(--wine-dark, #5C1829); padding: 0 16px 12px; }
.search-bar {
  width: 100%; padding: 10px 14px 10px 40px;
  border-radius: 12px; border: none;
  background: rgba(255,255,255,0.15);
  color: #fff; font-size: 14px; outline: none;
  font-family: 'DM Sans', sans-serif;
}
.search-bar::placeholder { color: rgba(255,255,255,0.6); }

/* CAT PILLS */
.cat-pill {
  padding: 6px 12px; border-radius: 20px;
  border: 2px solid var(--border); background: transparent;
  font-weight: 600; font-size: 12px; cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.15s;
}
.cat-pill.active { border-color: currentColor; }

/* PRIORITY BTN */
.prio-btn {
  flex: 1; padding: 8px 4px; border-radius: 10px;
  border: 2px solid var(--border); background: transparent;
  font-weight: 700; font-size: 12px; cursor: pointer;
  font-family: 'DM Sans', sans-serif; transition: all 0.15s;
}

/* HERO CARD */
.hero-card {
  background: var(--header-bg);
  border-radius: 0 0 28px 28px;
  margin: 0 0 20px;
  padding: 24px 20px;
  position: relative; overflow: hidden;
}
.hero-orb1 {
  position: absolute; top: -20px; right: -20px;
  width: 130px; height: 130px; border-radius: 50%;
  background: rgba(255,255,255,0.06);
}
.hero-orb2 {
  position: absolute; bottom: -30px; left: -10px;
  width: 90px; height: 90px; border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.hero-stat {
  background: rgba(255,255,255,0.13);
  border-radius: 12px; padding: 10px 14px; flex: 1;
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
}

/* CALENDAR GRID */
.cal-cell {
  display: flex; flex-direction: column; align-items: center;
  padding: 3px 1px; cursor: pointer;
}
.cal-day {
  width: 32px; height: 32px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; transition: all 0.15s;
}

/* PROGRESS BAR */
.progress-track { height: 6px; background: var(--border); border-radius: 3px; }
.progress-fill { height: 100%; border-radius: 3px; background: var(--verdant); transition: width 0.5s cubic-bezier(0.4,0,0.2,1); }

/* NOTE CARD */
.note-card {
  border-radius: 16px; padding: 14px;
  border: 1px solid var(--border);
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition: transform 0.12s, background 0.3s;
}
.note-card:active { transform: scale(0.97); }

/* SECTION TITLE */
.sec-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px; font-weight: 700;
  color: var(--wine); margin-bottom: 12px;
  letter-spacing: 0.2px;
}

/* SETTING ROW */
.setting-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 13px 0; border-bottom: 1px solid var(--border);
}
.setting-row:last-child { border-bottom: none; }
.setting-icon {
  width: 38px; height: 38px; border-radius: 10px;
  background: var(--marble); display: flex; align-items: center;
  justify-content: center; font-size: 18px; flex-shrink: 0;
  transition: background 0.3s;
}

/* EVENT LEFT BAR */
.ev-bar { width: 4px; border-radius: 4px; align-self: stretch; flex-shrink: 0; }

/* EMPTY STATE */
.empty-state { text-align: center; padding: 32px 0; color: var(--text-muted); }
.empty-state .emoji { font-size: 36px; margin-bottom: 10px; }
.empty-state .label { font-size: 14px; }

/* TOAST */
.toast {
  position: fixed; bottom: calc(80px + env(safe-area-inset-bottom,0px));
  left: 50%; transform: translateX(-50%);
  background: var(--verdant); color: #fff;
  padding: 10px 20px; border-radius: 20px;
  font-size: 13px; font-weight: 600;
  box-shadow: 0 4px 16px rgba(74,140,106,0.4);
  z-index: 2000; white-space: nowrap;
  animation: toastIn 0.25s cubic-bezier(0.34,1.1,0.64,1);
}
@keyframes toastIn { from { opacity:0; transform: translateX(-50%) translateY(20px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }

/* SYNC BADGE */
.sync-badge { font-size: 9px; color: rgba(255,255,255,0.75); animation: pulse 1.2s infinite; }
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }

/* ICON BTN */
.icon-btn {
  width: 36px; height: 36px; border-radius: 18px;
  border: none; cursor: pointer; background: transparent;
  display: flex; align-items: center; justify-content: center;
  font-size: 18px; color: #fff; transition: background 0.15s;
}
.icon-btn:active { background: rgba(255,255,255,0.15); }

/* TABS */
.tab-bar {
  display: flex; gap: 4px;
  background: var(--marble); border-radius: 12px; padding: 3px;
  margin-bottom: 16px; transition: background 0.3s;
}
.tab-btn {
  flex: 1; padding: 8px 4px; border-radius: 9px; border: none;
  cursor: pointer; font-size: 12px; font-weight: 600;
  font-family: 'DM Sans', sans-serif; transition: all 0.15s;
  background: transparent; color: var(--wine);
}
.tab-btn.active {
  background: var(--bg-card); color: var(--wine);
  box-shadow: 0 1px 6px var(--shadow);
}

/* FILTER PILLS */
.filter-row { display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 14px; }
.filter-row::-webkit-scrollbar { display: none; }
.filter-pill {
  padding: 6px 14px; border-radius: 20px; border: none;
  cursor: pointer; white-space: nowrap; font-weight: 600;
  font-size: 12px; font-family: 'DM Sans', sans-serif;
  flex-shrink: 0; transition: all 0.15s;
}

/* TASK CHECK */
.task-check {
  width: 22px; height: 22px; border-radius: 11px;
  border: 2px solid; cursor: pointer; background: transparent;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all 0.2s;
}

/* CREATE BTN */
.create-btn {
  width: 100%; padding: 14px; border-radius: 14px; border: none;
  background: linear-gradient(135deg, var(--verdant), var(--verdant-light));
  color: #fff; font-size: 16px; font-weight: 700;
  cursor: pointer; font-family: 'DM Sans', sans-serif; margin-top: 10px;
  box-shadow: 0 4px 16px rgba(74,140,106,0.35);
  transition: transform 0.12s;
}
.create-btn:active { transform: scale(0.97); }

/* NOTIF PERMISSION BTN */
.notif-btn {
  padding: 8px 16px; border-radius: 10px; border: none;
  background: var(--wine); color: #fff;
  font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: 'DM Sans', sans-serif;
}

/* REMINDER ALERTS */
.reminder-alert {
  position: fixed; top: env(safe-area-inset-top, 20px);
  right: 12px; left: 12px;
  background: var(--wine);
  color: #fff; border-radius: 16px;
  padding: 14px 16px;
  z-index: 3000; box-shadow: 0 8px 32px rgba(122,33,58,0.4);
  animation: alertIn 0.3s cubic-bezier(0.34,1.1,0.64,1);
  display: flex; gap: 12px; align-items: flex-start;
}
@keyframes alertIn { from { opacity:0; transform: translateY(-20px); } to { opacity:1; transform: translateY(0); } }

/* DATE BADGE */
.date-badge {
  display: inline-block;
  padding: 2px 8px; border-radius: 8px;
  font-size: 11px; font-weight: 700;
  background: var(--marble); color: var(--wine);
  transition: background 0.3s;
}

button { font-family: 'DM Sans', sans-serif; }
</style>
</head>
<body>

<div id="app">
  <!-- TOP BAR (rendered by JS) -->
  <div class="top-bar" id="topBar"></div>

  <!-- SEARCH BAR (hidden by default) -->
  <div class="search-bar-wrap" id="searchBarWrap" style="display:none">
    <div style="position:relative">
      <span style="position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:15px;color:rgba(255,255,255,0.7)">🔍</span>
      <input class="search-bar" id="searchInput" placeholder="Buscar eventos, tareas, notas..." oninput="handleSearch(this.value)">
    </div>
  </div>

  <!-- SCREEN CONTENT -->
  <div class="screen" id="screenContent"></div>

  <!-- FAB -->
  <button class="fab" id="fabBtn" onclick="openCreate()">+</button>

  <!-- BOTTOM NAV -->
  <nav class="bottom-nav" id="bottomNav"></nav>
</div>

<!-- TOAST -->
<div class="toast" id="toast" style="display:none"></div>

<script>
// ═══════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════
const STORE_KEY = 'miAgenda_v3';

const DEFAULT_STATE = {
  events: [
    { id:1, type:'event', title:'Cita con el médico', description:'Revisión anual', date:today(), startTime:'09:00', endTime:'10:00', category:'health', priority:'high', color:'#D4845A', reminder:'30', repeat:'none', notes:'' },
    { id:2, type:'event', title:'Reunión de equipo', description:'Sprint planning Q2', date:today(), startTime:'14:00', endTime:'15:30', category:'work', priority:'medium', color:'#4A8C6A', reminder:'15', repeat:'weekly', notes:'Preparar presentación' },
    { id:3, type:'event', title:'Cena familiar', description:'Cumpleaños de mamá', date:tomorrow(), startTime:'20:00', endTime:'23:00', category:'social', priority:'high', color:'#9B6BB5', reminder:'60', repeat:'none', notes:'Llevar flores' },
  ],
  tasks: [
    { id:1, type:'task', title:'Pagar facturas del mes', deadline:today(), priority:'high', status:'pending', category:'finance', notes:'Luz, agua, internet' },
    { id:2, type:'task', title:'Comprar víveres', deadline:tomorrow(), priority:'medium', status:'pending', category:'personal', notes:'' },
    { id:3, type:'task', title:'Leer libro 30 min', deadline:today(), priority:'low', status:'done', category:'personal', notes:'' },
    { id:4, type:'task', title:'Llamar al contador', deadline:tomorrow(), priority:'high', status:'pending', category:'finance', notes:'' },
  ],
  notes: [
    { id:1, type:'note', title:'Ideas para vacaciones', content:'Visitar Cartagena, explorar Minca, ruta por la sierra nevada...', tags:'viajes,personal', color:'#F5E4E7', noteColor:'#F5E4E7', createdAt:new Date().toISOString() },
    { id:2, type:'note', title:'Receta pasta carbonara', content:'Huevos, panceta, queso pecorino romano, pimienta negra. Sin crema para la versión auténtica.', tags:'cocina', color:'#E8F5EE', noteColor:'#E8F5EE', createdAt:new Date().toISOString() },
    { id:3, type:'note', title:'Libros pendientes', content:'El nombre de la rosa, Rayuela, Cien años de soledad (releer), El problema de los tres cuerpos', tags:'lectura', color:'#EEE8F5', noteColor:'#EEE8F5', createdAt:new Date().toISOString() },
  ],
  settings: {
    darkMode: false,
    notifications: false,
    syncEnabled: true,
    soundEnabled: true,
    vibration: true,
    startWeekMonday: false,
    defaultReminder: '15',
    defaultCategory: 'personal',
    fontSize: 'medium',
    compactView: false,
    showCompleted: true,
    autoBackup: true,
    syncInterval: '5',
    userName: 'Mi Agenda',
  },
  calView: 'month',
  calDate: new Date().toISOString().split('T')[0],
  taskFilter: 'pending',
  reminderQueue: [],
  lastSync: new Date().toISOString(),
};

let state = loadState();
let currentTab = 'home';
let modalOpen = false;
let editItem = null;
let editType = null;
let searchQuery = '';
let syncing = false;
let reminderTimer = null;

// ═══════════════════════════════════════════════════════════════
// PERSISTENCE
// ═══════════════════════════════════════════════════════════════
function loadState() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...DEFAULT_STATE, ...parsed, settings: { ...DEFAULT_STATE.settings, ...(parsed.settings || {}) } };
    }
  } catch(e) {}
  return { ...DEFAULT_STATE };
}

function saveState() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════
function today() { return new Date().toISOString().split('T')[0]; }
function tomorrow() { const d=new Date(); d.setDate(d.getDate()+1); return d.toISOString().split('T')[0]; }

const MONTHS = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DAYS_SHORT = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
const CATS = [
  {id:'personal',label:'Personal',color:'#7A213A'},
  {id:'work',label:'Trabajo',color:'#4A8C6A'},
  {id:'health',label:'Salud',color:'#D4845A'},
  {id:'finance',label:'Finanzas',color:'#5B7FA6'},
  {id:'social',label:'Social',color:'#9B6BB5'},
  {id:'other',label:'Otro',color:'#8A8A8A'},
];
const PRIOS = [
  {id:'high',label:'Alta',color:'#C0384A'},
  {id:'medium',label:'Media',color:'#D4845A'},
  {id:'low',label:'Baja',color:'#4A8C6A'},
];
const NOTE_COLORS = [
  {label:'Rosa',light:'#F5E4E7',dark:'#3A1A22'},
  {label:'Verde',light:'#E8F5EE',dark:'#1A2E22'},
  {label:'Lila',light:'#EEE8F5',dark:'#221A2E'},
  {label:'Azul',light:'#E8EEF5',dark:'#1A222E'},
  {label:'Durazno',light:'#F5EEE8',dark:'#2E221A'},
  {label:'Gris',light:'#F0F0F0',dark:'#252525'},
];

function catColor(id) { return CATS.find(c=>c.id===id)?.color||'#8A8A8A'; }
function prioColor(id) { return PRIOS.find(p=>p.id===id)?.color||'#8A8A8A'; }
function catLabel(id) { return CATS.find(c=>c.id===id)?.label||id; }
function prioLabel(id) { return PRIOS.find(p=>p.id===id)?.label||id; }

function fmtDate(ds) {
  if (!ds) return '';
  const d = new Date(ds+'T12:00:00');
  if (ds===today()) return 'Hoy';
  if (ds===tomorrow()) return 'Mañana';
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff/60000);
  if (min<1) return 'Ahora';
  if (min<60) return `Hace ${min}m`;
  const h = Math.floor(min/60);
  if (h<24) return `Hace ${h}h`;
  return `Hace ${Math.floor(h/24)}d`;
}

function nextId(arr) { return Math.max(0,...arr.map(x=>x.id))+1; }

function isDark() { return state.settings.darkMode; }

function noteColorForTheme(c) {
  const nc = NOTE_COLORS.find(x => x.light === c || x.dark === c);
  if (!nc) return c;
  return isDark() ? nc.dark : nc.light;
}

// ═══════════════════════════════════════════════════════════════
// THEME
// ═══════════════════════════════════════════════════════════════
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.settings.darkMode ? 'dark' : 'light');
  document.getElementById('theme-meta').content = state.settings.darkMode ? '#1E1418' : '#7A213A';
}

// ═══════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════
let toastTimer;
function showToast(msg, type='success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display='block';
  t.style.background = type==='error' ? '#C0384A' : type==='warn' ? '#D4845A' : 'var(--verdant)';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ t.style.display='none'; }, 2400);
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS / REMINDERS
// ═══════════════════════════════════════════════════════════════
async function requestNotifications() {
  if (!('Notification' in window)) { showToast('Tu navegador no soporta notificaciones','warn'); return; }
  const perm = await Notification.requestPermission();
  if (perm==='granted') {
    state.settings.notifications = true;
    saveState();
    showToast('✓ Notificaciones activadas');
    scheduleReminders();
    render();
  } else {
    showToast('Permiso denegado','warn');
  }
}

function scheduleReminders() {
  if (reminderTimer) clearInterval(reminderTimer);
  if (!state.settings.notifications) return;
  reminderTimer = setInterval(checkReminders, 30000);
  checkReminders();
}

function checkReminders() {
  if (!state.settings.notifications || Notification.permission !== 'granted') return;
  const now = new Date();
  state.events.forEach(ev => {
    if (!ev.reminder || ev.reminder==='none') return;
    const evDate = new Date(`${ev.date}T${ev.startTime}`);
    const minsLeft = (evDate - now) / 60000;
    const reminderMins = parseInt(ev.reminder);
    if (minsLeft > 0 && minsLeft <= reminderMins && minsLeft > reminderMins-1) {
      const n = new Notification(`📅 ${ev.title}`, {
        body: `Comienza en ${Math.round(minsLeft)} minutos`,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%237A213A"/><text y=".9em" font-size="80">📅</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%237A213A"/></svg>',
        vibrate: [200,100,200],
      });
      n.onclick = () => { window.focus(); };
    }
  });
}

function vibrate(pattern=[10]) {
  if (state.settings.vibration && navigator.vibrate) navigator.vibrate(pattern);
}

// ═══════════════════════════════════════════════════════════════
// SYNC SIMULATION
// ═══════════════════════════════════════════════════════════════
function triggerSync() {
  if (!state.settings.syncEnabled) return;
  syncing = true;
  renderTopBar();
  setTimeout(()=>{
    syncing = false;
    state.lastSync = new Date().toISOString();
    saveState();
    renderTopBar();
        showToast('✓ Sincronizado');
  }, 1800);
}

// ═══════════════════════════════════════════════════════════════
// RENDER ENGINE
// ═══════════════════════════════════════════════════════════════
function render() {
  applyTheme();
  renderTopBar();
  renderNav();
  renderScreen();
}

function renderTopBar() {
  const titles = {home:'Mi Agenda',calendar:'Calendario',tasks:'Tareas',notes:'Notas',settings:'Ajustes'};
  const showSearch = ['home','events','calendar','tasks','notes'].includes(currentTab);
  document.getElementById('topBar').innerHTML = `
    <div class="top-bar-inner">
      <div>
        <div class="top-bar-title">${titles[currentTab]||'Mi Agenda'}</div>
        ${state.settings.syncEnabled ? `<div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:2px">
          ${syncing ? '<span class="sync-badge">↻ Sincronizando…</span>' : '✓ Sync · '+timeAgo(state.lastSync)}
        </div>` : ''}
      </div>
      <div class="top-bar-actions">
        ${showSearch ? `<button class="icon-btn" onclick="toggleSearch()">🔍</button>` : ''}
        <button class="icon-btn" onclick="triggerSync()" title="Sincronizar">☁</button>
      </div>
    </div>
  `;
}

function renderNav() {
  const tabs = [
    {id:'home',icon:'⌂',label:'Inicio'},
    {id:'calendar',icon:'📅',label:'Calendario'},
    {id:'tasks',icon:'☑',label:'Tareas'},
    {id:'notes',icon:'📝',label:'Notas'},
    {id:'settings',icon:'⚙',label:'Ajustes'},
  ];
  document.getElementById('bottomNav').innerHTML = tabs.map(t=>`
    <button class="nav-btn ${currentTab===t.id?'active':''}" onclick="switchTab('${t.id}')">
      <span class="nav-icon">${t.icon}</span>
      <span class="nav-label">${t.label}</span>
      <span class="nav-dot"></span>
    </button>
  `).join('');
}

function renderScreen() {
  const el = document.getElementById('screenContent');
  switch(currentTab) {
    case 'home': el.innerHTML = renderHome(); break;
    case 'calendar': el.innerHTML = renderCalendar(); break;
    case 'tasks': el.innerHTML = renderTasks(); break;
    case 'notes': el.innerHTML = renderNotes(); break;
    case 'settings': el.innerHTML = renderSettings(); break;
  }
  attachHandlers();
}

// ═══════════════════════════════════════════════════════════════
// HOME SCREEN
// ═══════════════════════════════════════════════════════════════
function renderHome() {
  const todayStr = today();
  const now = new Date();
  const greeting = now.getHours()<12?'Buenos días':now.getHours()<19?'Buenas tardes':'Buenas noches';
  const dayName = DAYS_SHORT[now.getDay()];
  const todayEvs = state.events.filter(e=>e.date===todayStr).sort((a,b)=>a.startTime.localeCompare(b.startTime));
  const upcoming = state.events.filter(e=>e.date>todayStr).sort((a,b)=>a.date.localeCompare(b.date)).slice(0,3);
  const urgentT = state.tasks.filter(t=>t.priority==='high'&&t.status!=='done').slice(0,3);
  const pendingCount = state.tasks.filter(t=>t.status!=='done').length;
  const doneCount = state.tasks.filter(t=>t.status==='done').length;

  const q = searchQuery.toLowerCase();
  if (q) {
    const evR = state.events.filter(e=>e.title.toLowerCase().includes(q)||e.description?.toLowerCase().includes(q));
    const tR = state.tasks.filter(t=>t.title.toLowerCase().includes(q));
    const nR = state.notes.filter(n=>n.title.toLowerCase().includes(q)||n.content.toLowerCase().includes(q));
    return `<div style="padding:0 16px 100px">
      <div style="padding:14px 0 10px;font-size:13px;color:var(--text-muted)">Resultados para "<b style="color:var(--wine)">${q}</b>"</div>
      ${evR.length?`<div class="sec-title">Eventos</div>${evR.map(renderEventCard).join('')}<div style="height:12px"></div>`:''}
      ${tR.length?`<div class="sec-title">Tareas</div>${tR.map(e=>renderTaskCard(e,false)).join('')}<div style="height:12px"></div>`:''}
      ${nR.length?`<div class="sec-title" style="margin-top:4px">Notas</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${nR.map(renderNoteCard).join('')}</div>`:''}
      ${!evR.length&&!tR.length&&!nR.length?`<div class="empty-state"><div class="emoji">🔍</div><div class="label">Sin resultados</div></div>`:''}
    </div>`;
  }

  return `
  <div style="padding:0 0 100px">
    <!-- HERO -->
    <div class="hero-card">
      <div class="hero-orb1"></div><div class="hero-orb2"></div>
      <div style="position:relative;z-index:1">
        <div style="font-size:12px;color:rgba(255,255,255,0.65);font-weight:500;margin-bottom:3px">${greeting}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:700;color:#fff;line-height:1.1">
          ${dayName}, ${now.getDate()} de ${MONTHS[now.getMonth()]}
        </div>
        <div style="display:flex;gap:10px;margin-top:18px">
          <div class="hero-stat"><div style="font-size:22px;font-weight:800;color:#fff">${todayEvs.length}</div><div style="font-size:10px;color:rgba(255,255,255,0.65)">Hoy</div></div>
          <div class="hero-stat"><div style="font-size:22px;font-weight:800;color:#fff">${pendingCount}</div><div style="font-size:10px;color:rgba(255,255,255,0.65)">Pendientes</div></div>
          <div class="hero-stat"><div style="font-size:22px;font-weight:800;color:#fff">${urgentT.length}</div><div style="font-size:10px;color:rgba(255,255,255,0.65)">Urgentes</div></div>
        </div>
      </div>
    </div>

    <div style="padding:0 16px">
      <!-- HOY -->
      <div class="sec-title">Hoy</div>
      ${todayEvs.length===0
        ? `<div class="card" style="margin-bottom:20px"><div class="empty-state" style="padding:16px 0"><div class="emoji">🌿</div><div class="label">Día libre. ¡Disfrútalo!</div></div></div>`
        : `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">${todayEvs.map(renderEventCard).join('')}</div>`}

      <!-- URGENTES -->
      ${urgentT.length>0?`
        <div class="sec-title">⚡ Urgente</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px">
          ${urgentT.map(t=>renderTaskCard(t,true)).join('')}
        </div>`:''}

      <!-- PRÓXIMOS -->
      ${upcoming.length>0?`
        <div class="sec-title">Próximamente</div>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px">
          ${upcoming.map(renderEventCard).join('')}
        </div>`:''}
    </div>
  </div>`;
}

function renderEventCard(ev) {
  const cc = catColor(ev.category);
  const pc = prioColor(ev.priority);
  return `
  <div class="card card-press" style="display:flex;gap:12px;align-items:flex-start;margin-bottom:0" onclick="openEdit('event','${ev.id}')">
    <div class="ev-bar" style="background:${cc}"></div>
    <div style="flex:1;min-width:0">
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px">
        <span style="width:8px;height:8px;border-radius:4px;background:${pc};display:inline-block;flex-shrink:0"></span>
        <div style="font-size:14px;font-weight:700;color:var(--text-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ev.title}</div>
      </div>
      <div style="font-size:12px;color:var(--text-secondary)">${ev.startTime} – ${ev.endTime} · ${fmtDate(ev.date)}</div>
      ${ev.description?`<div style="font-size:12px;color:var(--text-muted);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${ev.description}</div>`:''}
    </div>
    <span class="chip" style="background:${cc}22;color:${cc};font-size:10px">${catLabel(ev.category)}</span>
  </div>`;
}

function renderTaskCard(t, compact=false) {
  const done = t.status==='done';
  const pc = prioColor(t.priority);
  return `
  <div class="card card-press" style="display:flex;gap:12px;align-items:flex-start;opacity:${done?0.6:1}">
    <button class="task-check" style="border-color:${done?'var(--verdant)':pc};background:${done?'var(--verdant)':'transparent'};margin-top:1px"
      onclick="toggleTask(${t.id})">
      ${done?'<span style="color:#fff;font-size:11px;font-weight:900">✓</span>':''}
    </button>
    <div style="flex:1;min-width:0" onclick="openEdit('task','${t.id}')">
      <div style="font-size:14px;font-weight:600;color:var(--text-primary);text-decoration:${done?'line-through':'none'}">${t.title}</div>
      ${!compact?`<div style="display:flex;gap:6px;margin-top:5px;flex-wrap:wrap">
        <span class="chip date-badge">${fmtDate(t.deadline)}</span>
        <span class="chip" style="background:${pc}22;color:${pc}">${prioLabel(t.priority)}</span>
        <span class="chip" style="background:${catColor(t.category)}22;color:${catColor(t.category)}">${catLabel(t.category)}</span>
      </div>`:`<div style="font-size:11px;color:var(--text-muted);margin-top:2px">Límite: ${fmtDate(t.deadline)}</div>`}
    </div>
  </div>`;
}

function renderNoteCard(n) {
  const bg = isDark() ? NOTE_COLORS.find(c=>c.light===n.noteColor||c.dark===n.noteColor}

// ═══════════════════════════════════════════════════════════════
// CALENDAR SCREEN
// ═══════════════════════════════════════════════════════════════
function renderCalendar() {
  const calDate = new Date(state.calDate + 'T12:00:00');
  const year = calDate.getFullYear();
  const month = calDate.getMonth();
  const firstDay = new Date(year,month,1).getDay();
  const daysInMonth = new Date(year,month+1,0).getDate();
  const todayStr = today();
  const selectedDay = parseInt(state.calDate.split('-')[2]);
  const selectedDateStr = state.calDate;
  const selectedEvs = state.events.filter(e=>e.date===selectedDateStr).sort((a,b)=>a.startTime.localeCompare(b.startTime));

  let cells = [];
  const offset = state.settings.startWeekMonday ? (firstDay===0?6:firstDay-1) : firstDay;
  for(let i=0;i<offset;i++) cells.push(null);
  for(let d=1;d<=daysInMonth;d++) cells.push(d);

  const headerDays = state.settings.startWeekMonday
    ? ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']
    : DAYS_SHORT;

  const getDs = d => `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  const getDayEvs = d => state.events.filter(e=>e.date===getDs(d));

  return `
  <div style="padding:0 16px 100px">
    <!-- Tabs -->
    <div style="height:12px"></div>
    <div class="tab-bar">
      ${[['month','Mes'],['week','Semana'],['day','Día']].map(([v,l])=>`
        <button class="tab-btn ${state.calView===v?'active':''}" onclick="setCalView('${v}')">${l}</button>`).join('')}
    </div>

    <!-- Nav mes -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <button onclick="prevMonth()" style="width:36px;height:36px;border-radius:18px;border:none;cursor:pointer;background:var(--marble);color:var(--wine);font-size:18px;display:flex;align-items:center;justify-content:center">‹</button>
      <div style="font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:700;color:var(--wine)">${MONTHS[month]} ${year}</div>
      <button onclick="nextMonth()" style="width:36px;height:36px;border-radius:18px;border:none;cursor:pointer;background:var(--marble);color:var(--wine);font-size:18px;display:flex;align-items:center;justify-content:center">›</button>
    </div>

    <!-- Day headers -->
    <div style="display:grid;grid-template-columns:repeat(7,1fr);margin-bottom:4px">
      ${headerDays.map(d=>`<div style="text-align:center;font-size:10px;font-weight:700;color:var(--text-muted);padding:4px 0">${d}</div>`).join('')}
    </div>

    <!-- Grid -->
    <div class="card" style="padding:8px 4px;margin-bottom:16px">
      <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px 0">
        ${cells.map((day,i) => {
          if (!day) return `<div></div>`;
          const ds = getDs(day);
          const evs = getDayEvs(day);
          const isToday_ = ds===todayStr;
          const isSel = ds===selectedDateStr;
          return `<div class="cal-cell" onclick="selectCalDay('${ds}')">
            <div class="cal-day" style="background:${isSel?'var(--wine)':isToday_?'var(--marble)':'transparent'};color:${isSel?'#fff':isToday_?'var(--wine)':'var(--text-primary)'};font-weight:${isToday_||isSel?700:400}">${day}</div>
            ${evs.length?`<div style="display:flex;gap:2px;margin-top:2px">
              ${evs.slice(0,3).map(ev=>`<div style="width:5px;height:5px;border-radius:3px;background:${catColor(ev.category)}"></div>`).join('')}
            </div>`:'<div style="height:7px"></div>'}
          </div>`;
        }).join('')}
      </div>
    </div>

    <!-- Selected day events -->
    <div class="sec-title">${fmtDate(selectedDateStr)}</div>
    ${selectedEvs.length===0
      ? `<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:13px">Sin eventos este día</div>`
      : `<div style="display:flex;flex-direction:column;gap:10px">${selectedEvs.map(renderEventCard).join('')}</div>`}
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// TASKS SCREEN
// ═══════════════════════════════════════════════════════════════
function renderTasks() {
  const filter = state.taskFilter;
  let items = [...state.tasks];
  if (filter==='pending') items = items.filter(t=>t.status!=='done');
  else if (filter==='done') items = items.filter(t=>t.status==='done');
  else if (filter==='today') items = items.filter(t=>t.deadline===today()&&t.status!=='done');
  else if (filter==='high') items = items.filter(t=>t.priority==='high'&&t.status!=='done');

  if (!state.settings.showCompleted && filter!=='done') items = items.filter(t=>t.status!=='done');

  const total = state.tasks.length;
  const done = state.tasks.filter(t=>t.status==='done').length;
  const pct = total ? Math.round(done/total*100) : 0;

  return `
  <div style="padding:0 16px 100px">
    <div style="height:12px"></div>
    <!-- Progreso -->
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;margin-bottom:8px">
        <div style="font-size:13px;font-weight:600;color:var(--text-secondary)">${done} de ${total} completadas</div>
        <div style="font-size:13px;font-weight:700;color:var(--verdant)">${pct}%</div>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div style="display:flex;gap:16px;margin-top:10px">
        <div style="font-size:11px;color:var(--text-muted)"><span style="font-weight:700;color:var(--wine)">${state.tasks.filter(t=>t.status!=='done').length}</span> pendientes</div>
        <div style="font-size:11px;color:var(--text-muted)"><span style="font-weight:700;color:var(--verdant)">${done}</span> completadas</div>
        <div style="font-size:11px;color:var(--text-muted)"><span style="font-weight:700;color:#D4845A">${state.tasks.filter(t=>t.priority==='high'&&t.status!=='done').length}</span> urgentes</div>
      </div>
    </div>

    <!-- Filtros -->
    <div class="filter-row">
      ${[['all','Todas'],['pending','Pendientes'],['today','Hoy'],['high','Urgentes'],['done','Listas']].map(([v,l])=>`
        <button class="filter-pill" style="background:${filter===v?'var(--wine)':'var(--marble)'};color:${filter===v?'#fff':'var(--wine)'}" onclick="setTaskFilter('${v}')">${l}</button>`).join('')}
    </div>

    <!-- Lista -->
    <div style="display:flex;flex-direction:column;gap:8px">
      ${items.length===0
        ? `<div class="empty-state"><div class="emoji">✅</div><div class="label">Todo al día</div></div>`
        : items.map(t=>renderTaskCard(t,false)).join('')}
    </div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// NOTES SCREEN
// ═══════════════════════════════════════════════════════════════
function renderNotes() {
  let items = [...state.notes];
  const q = searchQuery.toLowerCase();
  if (q) items = items.filter(n=>n.title.toLowerCase().includes(q)||n.content.toLowerCase().includes(q));
  return `
  <div style="padding:0 16px 100px">
    <div style="height:12px"></div>
    ${items.length===0
      ? `<div class="empty-state"><div class="emoji">📝</div><div class="label">Sin notas todavía</div></div>`
      : `<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">${items.map(renderNoteCard).join('')}</div>`}
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// SETTINGS SCREEN
// ═══════════════════════════════════════════════════════════════
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('fontSize',this.value)">
          <option value="small" ${s.fontSize==='small'?'selected':''}>Pequeño</option>
          <option value="medium" ${s.fontSize==='medium'?'selected':''}>Mediano</option>
          <option value="large" ${s.fontSize==='large'?'selected':''}>Grande</option>
        </select>
      </div>
    </div>

    <!-- Notificaciones -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Notificaciones</div>
    <div class="card" style="margin-bottom:16px">
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🔔</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Notificaciones</div>
            <div style="font-size:11px;color:var(--text-muted)">${notifGranted?'Activas · Recordatorios automáticos':'Requiere permiso del sistema'}</div>
          </div>
        </div>
        ${notifGranted ? Toggle('notifications',s.notifications)
          : `<button class="notif-btn" onclick="requestNotifications()">Activar</button>`}
      </div>
      ${Row('🔊','Sonido','Sonido en recordatorios',Toggle('soundEnabled',s.soundEnabled))}
      ${Row('📳','Vibración','Vibrar en alertas',Toggle('vibration',s.vibration))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">⏰</div>
          <div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Recordatorio por defecto</div></div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('defaultReminder',this.value)">
          <option value="5" ${s.defaultReminder==='5'?'selected':''}>5 min</option>
          <option value="15" ${s.defaultReminder==='15'?'selected':''}>15 min</option>
          <option value="30" ${s.defaultReminder==='30'?'selected':''}>30 min</option>
          <option value="60" ${s.defaultReminder==='60'?'selected':''}>1 hora</option>
        </select>
      </div>
    </div>

    <!-- Calendario -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Calendario</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('📅','Semana empieza el lunes','Inicio de semana',Toggle('startWeekMonday',s.startWeekMonday))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🏷</div>
          <div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Categoría por defecto</div></div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('defaultCategory',this.value)">
          ${CATS.map(c=>`<option value="${c.id}" ${s.defaultCategory===c.id?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
    </div>

    <!-- Tareas -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Tareas</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('✅','Mostrar completadas','Ver tareas listas en la lista',Toggle('showCompleted',s.showCompleted))}
    </div>

    <!-- Sincronización -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Sincronización y datos</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('☁️','Sincronización','Respaldo automático en la nube',Toggle('syncEnabled',s.syncEnabled))}
function renderSettings() {
  const s = state.settings;
  const notifGranted = typeof Notification !== 'undefined' && Notification.permission === 'granted';

  const Toggle = (key, val) => `
    <button class="toggle-track" style="background:${val?'var(--verdant)':'var(--border)'}" onclick="toggleSetting('${key}')">
      <div class="toggle-thumb" style="left:${val?'23px':'3px'}"></div>
    </button>`;

  const Row = (icon, label, desc, control) => `
    <div class="setting-row">
      <div style="display:flex;align-items:center;gap:12px">
        <div class="setting-icon">${icon}</div>
        <div>
          <div style="font-size:14px;font-weight:600;color:var(--text-primary)">${label}</div>
          ${desc?`<div style="font-size:11px;color:var(--text-muted);margin-top:2px">${desc}</div>`:''}
        </div>
      </div>
      ${control}
    </div>`;

  const Arrow = `<span style="color:var(--text-muted);font-size:20px">›</span>`;

  const totalItems = state.events.length + state.tasks.length + state.notes.length;

  return `
  <div style="padding:0 16px 100px">
    <div style="height:12px"></div>

    <!-- Perfil -->
    <div class="card" style="margin-bottom:16px;text-align:center">
      <div style="width:72px;height:72px;border-radius:36px;background:linear-gradient(135deg,var(--wine),var(--wine-light));margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:28px">📔</div>
      <input id="userNameInput" value="${s.userName}" style="text-align:center;border:none;background:transparent;font-size:18px;font-weight:700;color:var(--text-primary);font-family:'Cormorant Garamond',serif;width:100%;outline:none" oninput="updateUserName(this.value)">
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px">Uso personal · Privado · ${totalItems} elementos</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap">
        <span class="chip" style="background:var(--verdant)22;color:var(--verdant)">${s.syncEnabled?'Sync activo ✓':'Sin sync'}</span>
        <span class="chip" style="background:var(--marble);color:var(--wine)">${state.events.length} eventos</span>
        <span class="chip" style="background:var(--marble);color:var(--wine)">${state.tasks.filter(t=>t.status!=='done').length} pendientes</span>
      </div>
    </div>

    <!-- Apariencia -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Apariencia</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('🌙','Modo oscuro','Tema oscuro premium',Toggle('darkMode',s.darkMode))}
      ${Row('📐','Vista compacta','Tarjetas más pequeñas',Toggle('compactView',s.compactView))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🔤</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Tamaño de fuente</div>
            <div style="font-size:11px;color:var(--text-muted)">Ajusta la legibilidad</div>
          </div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('fontSize',this.value)">
          <option value="small" ${s.fontSize==='small'?'selected':''}>Pequeño</option>
          <option value="medium" ${s.fontSize==='medium'?'selected':''}>Mediano</option>
          <option value="large" ${s.fontSize==='large'?'selected':''}>Grande</option>
        </select>
      </div>
    </div>

    <!-- Notificaciones -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Notificaciones</div>
    <div class="card" style="margin-bottom:16px">
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🔔</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Notificaciones</div>
            <div style="font-size:11px;color:var(--text-muted)">${notifGranted?'Activas · Recordatorios automáticos':'Requiere permiso del sistema'}</div>
          </div>
        </div>
        ${notifGranted ? Toggle('notifications',s.notifications)
          : `<button class="notif-btn" onclick="requestNotifications()">Activar</button>`}
      </div>
      ${Row('🔊','Sonido','Sonido en recordatorios',Toggle('soundEnabled',s.soundEnabled))}
      ${Row('📳','Vibración','Vibrar en alertas',Toggle('vibration',s.vibration))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">⏰</div>
          <div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Recordatorio por defecto</div></div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('defaultReminder',this.value)">
          <option value="5" ${s.defaultReminder==='5'?'selected':''}>5 min</option>
          <option value="15" ${s.defaultReminder==='15'?'selected':''}>15 min</option>
          <option value="30" ${s.defaultReminder==='30'?'selected':''}>30 min</option>
          <option value="60" ${s.defaultReminder==='60'?'selected':''}>1 hora</option>
        </select>
      </div>
    </div>

    <!-- Calendario -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Calendario</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('📅','Semana empieza el lunes','Inicio de semana',Toggle('startWeekMonday',s.startWeekMonday))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🏷</div>
          <div><div style="font-size:14px;font-weight:600;color:var(--text-primary)">Categoría por defecto</div></div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('defaultCategory',this.value)">
          ${CATS.map(c=>`<option value="${c.id}" ${s.defaultCategory===c.id?'selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
    </div>

    <!-- Tareas -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Tareas</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('✅','Mostrar completadas','Ver tareas listas en la lista',Toggle('showCompleted',s.showCompleted))}
    </div>

    <!-- Sincronización -->
    <div style="font-size:11px;font-weight:700;color:var(--text-muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;padding-left:4px">Sincronización y datos</div>
    <div class="card" style="margin-bottom:16px">
      ${Row('☁️','Sincronización','Respaldo automático en la nube',Toggle('syncEnabled',s.syncEnabled))}
      ${Row('💾','Auto-respaldo','Guardar automáticamente',Toggle('autoBackup',s.autoBackup))}
      <div class="setting-row">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🕐</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Intervalo de sync</div>
            <div style="font-size:11px;color:var(--text-muted)">Última sync: ${timeAgo(state.lastSync)}</div>
          </div>
        </div>
        <select class="field-input field-select" style="width:auto;padding:6px 32px 6px 10px;font-size:12px" onchange="updateSetting('syncInterval',this.value)">
          <option value="1" ${s.syncInterval==='1'?'selected':''}>1 min</option>
          <option value="5" ${s.syncInterval==='5'?'selected':''}>5 min</option>
          <option value="15" ${s.syncInterval==='15'?'selected':''}>15 min</option>
          <option value="30" ${s.syncInterval==='30'?'selected':''}>30 min</option>
        </select>
      </div>
    </div>

    <!-- Datos -->
    <div class="card" style="margin-bottom:16px">
      <div class="setting-row" onclick="exportData()" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">📤</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Exportar datos</div>
            <div style="font-size:11px;color:var(--text-muted)">Descargar respaldo JSON</div>
          </div>
        </div>
        ${Arrow}
      </div>
      <div class="setting-row" onclick="importData()" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">📥</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:var(--text-primary)">Importar datos</div>
            <div style="font-size:11px;color:var(--text-muted)">Restaurar desde respaldo</div>
          </div>
        </div>
        ${Arrow}
      </div>
      <div class="setting-row" onclick="confirmClear()" style="cursor:pointer">
        <div style="display:flex;align-items:center;gap:12px">
          <div class="setting-icon">🗑</div>
          <div>
            <div style="font-size:14px;font-weight:600;color:#C0384A">Borrar todos los datos</div>
            <div style="font-size:11px;color:var(--text-muted)">Acción irreversible</div>
          </div>
        </div>
        ${Arrow}
      </div>
    </div>

    <!-- Info -->
    <div style="text-align:center;font-size:12px;color:var(--text-muted);padding:8px 0 20px">
      Mi Agenda Personal v2.0 · Solo local · Sin cuentas sociales<br>
      <span style="color:var(--verdant)">●</span> ${state.settings.syncEnabled?'Sync activo':'Sin sync'} · ${totalItems} elementos guardados
      </div>`;
}

// ═══════════════════════════════════════════════════════════════
// MODAL CREAR / EDITAR
// ═══════════════════════════════════════════════════════════════
function openCreate() {
  vibrate([10]);
  editItem = null;
  editType = null;
  renderModal(null, null);
}

function openEdit(type, id) {
  vibrate([10]);
  const arr = type==='event' ? state.events : type==='task' ? state.tasks : state.notes;
  const item = arr.find(x=>x.id===parseInt(id)||x.id===id);
  editItem = item;
  editType = type;
  renderModal(item, type);
}

function renderModal(item, type) {
  // Remove existing modal
  const existing = document.getElementById('modalOverlay');
  if (existing) existing.remove();

  const activeType = type || 'event';
  const isEdit = !!item;
  const s = state.settings;

  const formData = item ? {...item} : {
    title:'', description:'', date:today(), startTime:'09:00', endTime:'10:00',
    category: s.defaultCategory || 'personal', priority:'medium', color:'#7A213A',
    reminder: s.defaultReminder || '15', repeat:'none', notes:'',
    deadline: today(), status:'pending', content:'', tags:'', noteColor:'#F5E4E7',
  };

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modalOverlay';
  overlay.onclick = (e) => { if(e.target===overlay) closeModal(); };

  overlay.innerHTML = `
  <div class="modal-sheet">
    <div style="display:flex;justify-content:center;padding:12px 0 4px">
      <div style="width:40px;height:4px;border-radius:2px;background:var(--border)"></div>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 20px 14px">
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:700;color:var(--wine)">
        ${isEdit?'Editar':'Nuevo'} ${activeType==='event'?'Evento':activeType==='task'?'Tarea':'Nota'}
      </div>
      <div style="display:flex;gap:6px">
        ${isEdit?`<button onclick="deleteItem('${activeType}',${item.id})" style="padding:6px 12px;border-radius:10px;border:none;cursor:pointer;background:#C0384A22;color:#C0384A;font-weight:600;font-size:12px;font-family:'DM Sans',sans-serif">Eliminar</button>`:''}
        ${isEdit?`<button onclick="duplicateItem('${activeType}',${item.id})" style="padding:6px 12px;border-radius:10px;border:none;cursor:pointer;background:var(--marble);color:var(--wine);font-weight:600;font-size:12px;font-family:'DM Sans',sans-serif">Duplicar</button>`:''}
        <button onclick="closeModal()" style="width:32px;height:32px;border-radius:16px;border:none;cursor:pointer;background:var(--marble);color:var(--text-secondary);font-size:16px">✕</button>
      </div>
    </div>

    ${!isEdit?`
    <div style="display:flex;gap:6px;padding:0 20px 14px">
      ${[['event','📅 Evento'],['task','✓ Tarea'],['note','📝 Nota']].map(([t,l])=>`
        <button onclick="switchModalType('${t}')" id="mtype_${t}" style="flex:1;padding:8px 4px;border-radius:10px;border:none;cursor:pointer;font-size:12px;font-weight:600;font-family:'DM Sans',sans-serif;transition:all 0.15s;background:${activeType===t?'var(--wine)':'var(--marble)'};color:${activeType===t?'#fff':'var(--wine)'}">${l}</button>`).join('')}
    </div>`:''}

    <div style="padding:0 20px" id="modalForm">
      ${renderModalForm(formData, activeType)}
    </div>

    <div style="padding:0 20px">
      <button class="create-btn" onclick="saveModal()">
        ${isEdit?'Guardar cambios':'Crear '+( activeType==='event'?'evento':activeType==='task'?'tarea':'nota')}
      </button>
    </div>
  </div>`;

  document.body.appendChild(overlay);
  modalOpen = true;

  // Store form data in window for access
  window._modalFormData = formData;
  window._modalType = activeType;
  window._modalIsEdit = isEdit;
  window._modalItemId = item?.id;
}

function renderModalForm(fd, type) {
  const Field = (label, content) => `
    <div style="margin-bottom:14px">
      <div class="field-label">${label}</div>
      ${content}
    </div>`;

  const Input = (id, val, t='text', ph='') => `<input id="${id}" type="${t}" value="${escHtml(val||'')}" placeholder="${ph}" class="field-input">`;
  const Textarea = (id, val, ph='', rows=3) => `<textarea id="${id}" class="field-input field-textarea" style="height:${rows*40}px" placeholder="${ph}">${escHtml(val||'')}</textarea>`;
  const Select = (id, val, opts) => `<select id="${id}" class="field-input field-select">
    ${opts.map(([v,l])=>`<option value="${v}" ${val===v?'selected':''}>${l}</option>`).join('')}
  </select>`;

  if (type==='note') return `
    ${Field('Título', Input('f_title',fd.title,'text','Título de la nota'))}
    ${Field('Contenido', Textarea('f_content',fd.content,'Escribe tu nota...',5))}
    ${Field('Etiquetas', Input('f_tags',fd.tags,'text','viajes, ideas, trabajo...'))}
    <div style="margin-bottom:14px">
      <div class="field-label">Color de tarjeta</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        ${NOTE_COLORS.map((c,i)=>`
          <button id="nc_${i}" onclick="selectNoteColor('${c.light}')" style="width:36px;height:36px;border-radius:18px;border:3px solid ${fd.noteColor===c.light?'var(--wine)':'transparent'};background:${c.light};cursor:pointer;transition:border 0.15s"></button>
        `).join('')}
      </div>
    </div>
    ${Field('Notas extra', Textarea('f_notes',fd.notes,'Notas adicionales...',2))}`;

  if (type==='task') return `
    ${Field('Título', Input('f_title',fd.title,'text','¿Qué hay que hacer?'))}
    ${Field('Descripción', Input('f_description',fd.description,'text','Descripción...'))}
    ${Field('Fecha límite', Input('f_deadline',fd.deadline,'date'))}
    ${Field('Estado', Select('f_status',fd.status,[['pending','Pendiente'],['in-progress','En progreso'],['done','Completada']]))}
    <div style="margin-bottom:14px">
      <div class="field-label">Categoría</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">${CATS.map(c=>`
        <button class="cat-pill ${fd.category===c.id?'active':''}" id="cat_${c.id}" onclick="selectCat('${c.id}')" style="color:${c.color};border-color:${fd.category===c.id?c.color:'var(--border)'};background:${fd.category===c.id?c.color+'22':'transparent'}">${c.label}</button>
      `).join('')}</div>
    </div>
    <div style="margin-bottom:14px">
      <div class="field-label">Prioridad</div>
      <div style="display:flex;gap:8px">${PRIOS.map(p=>`
        <button class="prio-btn ${fd.priority===p.id?'active':''}" id="prio_${p.id}" onclick="selectPrio('${p.id}')" style="color:${p.color};border-color:${fd.priority===p.id?p.color:'var(--border)'};background:${fd.priority===p.id?p.color+'22':'transparent'}">${p.label}</button>
      `).join('')}</div>
    </div>
    ${Field('Notas', Textarea('f_notes',fd.notes,'Notas adicionales...',2))}`;

  // event
  return `
    ${Field('Título', Input('f_title',fd.title,'text','¿Qué tienes planeado?'))}
    ${Field('Descripción', Input('f_description',fd.description,'text','Descripción...'))}
    ${Field('Fecha', Input('f_date',fd.date,'date'))}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
      <div><div class="field-label">Inicio</div><input id="f_startTime" type="time" value="${fd.startTime||'09:00'}" class="field-input"></div>
      <div><div class="field-label">Fin</div><input id="f_endTime" type="time" value="${fd.endTime||'10:00'}" class="field-input"></div>
    </div>
    <div style="margin-bottom:14px">
      <div class="field-label">Categoría</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">${CATS.map(c=>`
        <button class="cat-pill ${fd.category===c.id?'active':''}" id="cat_${c.id}" onclick="selectCat('${c.id}')" style="color:${c.color};border-color:${fd.category===c.id?c.color:'var(--border)'};background:${fd.category===c.id?c.color+'22':'transparent'}">${c.label}</button>
      `).join('')}</div>
    </div>
    <div style="margin-bottom:14px">
      <div class="field-label">Prioridad</div>
      <div style="display:flex;gap:8px">${PRIOS.map(p=>`
        <button class="prio-btn" id="prio_${p.id}" onclick="selectPrio('${p.id}')" style="color:${p.color};border-color:${fd.priority===p.id?p.color:'var(--border)'};background:${fd.priority===p.id?p.color+'22':'transparent'}">${p.label}</button>
      `).join('')}</div>
    </div>
    ${Field('Recordatorio', Select('f_reminder',fd.reminder,[['none','Sin recordatorio'],['5','5 min antes'],['15','15 min antes'],['30','30 min antes'],['60','1 hora antes'],['1440','1 día antes']]))}
    ${Field('Repetición', Select('f_repeat',fd.repeat,[['none','No repetir'],['daily','Diariamente'],['weekly','Semanalmente'],['monthly','Mensualmente'],['yearly','Anualmente']]))}
    ${Field('Notas adicionales', Textarea('f_notes',fd.notes,'Notas extras...',2))}`;
}

function escHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function selectNoteColor(color) {
  window._modalFormData.noteColor = color;
  document.querySelectorAll('[id^="nc_"]').forEach(btn => {
    btn.style.border = '3px solid transparent';
  });
  NOTE_COLORS.forEach((c,i) => {
    if (c.light === color) {
      const btn = document.getElementById(`nc_${i}`);
      if (btn) btn.style.border = '3px solid var(--wine)';
    }
  });
}

function selectCat(id) {
  window._modalFormData.category = id;
  CATS.forEach(c => {
    const btn = document.getElementById(`cat_${c.id}`);
    if (!btn) return;
    if (c.id===id) {
      btn.style.borderColor = c.color;
      btn.style.background = c.color+'22';
    } else {
      btn.style.borderColor = 'var(--border)';
      btn.style.background = 'transparent';
    }
  });
}

function selectPrio(id) {
  window._modalFormData.priority = id;
  PRIOS.forEach(p => {
    const btn = document.getElementById(`prio_${p.id}`);
    if (!btn) return;
    if (p.id===id) {
      btn.style.borderColor = p.color;
      btn.style.background = p.color+'22';
    } else {
      btn.style.borderColor = 'var(--border)';
      btn.style.background = 'transparent';
    }
  });
}

function switchModalType(newType) {
  window._modalType = newType;
  // Update tab buttons
  ['event','task','note'].forEach(t => {
    const btn = document.getElementById(`mtype_${t}`);
    if (!btn) return;
    btn.style.background = t===newType ? 'var(--wine)' : 'var(--marble)';
    btn.style.color = t===newType ? '#fff' : 'var(--wine)';
  });
  // Re-render form
  const formEl = document.getElementById('modalForm');
  if (formEl) formEl.innerHTML = renderModalForm(window._modalFormData, newType);
  // Update save button text
  document.querySelector('.create-btn').textContent = 'Crear '+(newType==='event'?'evento':newType==='task'?'tarea':'nota');
}

function saveModal() {
  const type = window._modalType;
  const fd = window._modalFormData;
  const isEdit = window._modalIsEdit;
  const itemId = window._modalItemId;

  // Collect form values
  const get = id => { const el=document.getElementById(id); return el?el.value:''; };

  const title = get('f_title').trim();
  if (!title) { showToast('El título es requerido','warn'); return; }

  let item;
  if (type==='event') {
    item = {
      id: isEdit ? itemId : nextId(state.events),
      type:'event',
      title, description: get('f_description'),
      date: get('f_date') || today(),
      startTime: get('f_startTime') || '09:00',
      endTime: get('f_endTime') || '10:00',
      category: fd.category || 'personal',
      priority: fd.priority || 'medium',
      color: catColor(fd.category || 'personal'),
      reminder: get('f_reminder') || 'none',
      repeat: get('f_repeat') || 'none',
      notes: get('f_notes'),
    };
    if (isEdit) state.events = state.events.map(e=>e.id===itemId?item:e);
    else state.events.push(item);
  } else if (type==='task') {
    item = {
      id: isEdit ? itemId : nextId(state.tasks),
      type:'task',
      title, description: get('f_description'),
      deadline: get('f_deadline') || today(),
      priority: fd.priority || 'medium',
      status: get('f_status') || 'pending',
      category: fd.category || 'personal',
      notes: get('f_notes'),
    };
    if (isEdit) state.tasks = state.tasks.map(t=>t.id===itemId?item:t);
    else state.tasks.push(item);
  } else {
    item = {
      id: isEdit ? itemId : nextId(state.notes),
      type:'note',
      title, content: get('f_content'),
      tags: get('f_tags'),
      noteColor: fd.noteColor || '#F5E4E7',
      color: fd.noteColor || '#F5E4E7',
      notes: get('f_notes'),
      createdAt: isEdit ? (editItem?.createdAt||new Date().toISOString()) : new Date().toISOString(),
    };
    if (isEdit) state.notes = state.notes.map(n=>n.id===itemId?item:n);
    else state.notes.push(item);
  }

  saveState();
  closeModal();
  vibrate([15,5,15]);
  showToast(isEdit?'✓ Cambios guardados':'✓ Creado correctamente');
  if (state.settings.syncEnabled) setTimeout(triggerSync, 500);
  render();
}

function deleteItem(type, id) {
  if (!confirm('¿Eliminar este elemento?')) return;
  if (type==='event') state.events = state.events.filter(e=>e.id!==id&&e.id!==parseInt(id));
  else if (type==='task') state.tasks = state.tasks.filter(t=>t.id!==id&&t.id!==parseInt(id));
  else state.notes = state.notes.filter(n=>n.id!==id&&n.id!==parseInt(id));
  saveState();
  closeModal();
  showToast('🗑 Eliminado');
  render();
}

function duplicateItem(type, id) {
  const arr = type==='event'?state.events:type==='task'?state.tasks:state.notes;
  const src = arr.find(x=>x.id===id||x.id===parseInt(id));
  if (!src) return;
  const dup = {...src, id: nextId(arr), title: src.title+' (copia)'};
  if (type==='event') state.events.push(dup);
  else if (type==='task') state.tasks.push(dup);
  else state.notes.push(dup);
  saveState();
  closeModal();
  showToast('✓ Duplicado');
  render();
}

function closeModal() {
  const el = document.getElementById('modalOverlay');
  if (el) el.remove();
  modalOpen = false;
}}

// ═══════════════════════════════════════════════════════════════
// SETTINGS ACTIONS
// ═══════════════════════════════════════════════════════════════
function toggleSetting(key) {
  state.settings[key] = !state.settings[key];
  if (key==='notifications' && state.settings.notifications) {
    requestNotifications(); return;
  }
  if (key==='darkMode') applyTheme();
  saveState();
  vibrate([8]);
  renderScreen();
  renderTopBar();
}

function updateSetting(key, val) {
  state.settings[key] = val;
  saveState();
  if (key==='syncInterval') {
    // Update sync timer
  }
}

function updateUserName(val) {
  state.settings.userName = val;
  saveState();
}

function exportData() {
  const data = JSON.stringify({ events: state.events, tasks: state.tasks, notes: state.notes, settings: state.settings, exportDate: new Date().toISOString() }, null, 2);
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `mi-agenda-${today()}.json`;
  a.click(); URL.revokeObjectURL(url);
  showToast('✓ Datos exportados');
}

function importData() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (data.events) state.events = data.events;
        if (data.tasks) state.tasks = data.tasks;
        if (data.notes) state.notes = data.notes;
        saveState();
        render();
        showToast('✓ Datos importados');
      } catch(err) { showToast('Error al importar','error'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function confirmClear() {
  if (!confirm('¿Borrar TODOS los datos? Esta acción es irreversible.')) return;
  if (!confirm('¿Estás seguro? Se eliminarán todos los eventos, tareas y notas.')) return;
  state.events = [];
  state.tasks = [];
  state.notes = [];
  saveState();
  render();
  showToast('🗑 Datos eliminados');
}

// ═══════════════════════════════════════════════════════════════
// TASK TOGGLE
// ═══════════════════════════════════════════════════════════════
function toggleTask(id) {
  vibrate([10]);
  state.tasks = state.tasks.map(t => {
    if (t.id===id||t.id===parseInt(id)) return {...t, status: t.status==='done'?'pending':'done'};
    return t;
  });
  saveState();
  renderScreen();
  if (state.settings.syncEnabled) setTimeout(triggerSync, 800);
}

// ═══════════════════════════════════════════════════════════════
// CALENDAR ACTIONS
// ═══════════════════════════════════════════════════════════════
function setCalView(v) { state.calView=v; renderScreen(); }

function prevMonth() {
  const d = new Date(state.calDate+'T12:00:00');
  d.setMonth(d.getMonth()-1);
  state.calDate = d.toISOString().split('T')[0];
  renderScreen();
}
function nextMonth() {
  const d = new Date(state.calDate+'T12:00:00');
  d.setMonth(d.getMonth()+1);
  state.calDate = d.toISOString().split('T')[0];
  renderScreen();
}
function selectCalDay(ds) {
  state.calDate = ds;
  renderScreen();
}

// ═══════════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════════
function toggleSearch() {
  const el = document.getElementById('searchBarWrap');
  const visible = el.style.display !== 'none';
  el.style.display = visible ? 'none' : 'block';
  if (!visible) { document.getElementById('searchInput').focus(); }
  else { searchQuery=''; document.getElementById('searchInput').value=''; renderScreen(); }
}

function handleSearch(q) {
  searchQuery = q;
  renderScreen();
}

// ═══════════════════════════════════════════════════════════════
// TAB SWITCHING
// ═══════════════════════════════════════════════════════════════
function switchTab(tab) {
  vibrate([6]);
  currentTab = tab;
  searchQuery = '';
  const sb = document.getElementById('searchBarWrap');
  if (sb) { sb.style.display='none'; }
  const si = document.getElementById('searchInput');
  if (si) si.value = '';
  render();
}

// ═══════════════════════════════════════════════════════════════
// TASK FILTER
// ═══════════════════════════════════════════════════════════════
function setTaskFilter(f) { state.taskFilter=f; renderScreen(); }

// ═══════════════════════════════════════════════════════════════
// ATTACH HANDLERS (for dynamically rendered elements)
// ═══════════════════════════════════════════════════════════════
function attachHandlers() {
  // Nothing extra needed - using inline onclick
}

// ═══════════════════════════════════════════════════════════════
// PWA / SERVICE WORKER
// ═══════════════════════════════════════════════════════════════
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  const swCode = `
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
self.addEventListener('fetch', e => e.respondWith(
  caches.open('miagenda-v1').then(cache =>
    cache.match(e.request).then(r => r || fetch(e.request).then(res => {
      cache.put(e.request, res.clone()); return res;
    }).catch(() => r))
  )
));`;
  const blob = new Blob([swCode], {type:'application/javascript'});
  const url = URL.createObjectURL(blob);
  navigator.serviceWorker.register(url).catch(()=>{});
}

// ═══════════════════════════════════════════════════════════════
// AUTO SYNC
// ═══════════════════════════════════════════════════════════════
function startAutoSync() {
  setInterval(() => {
    if (state.settings.syncEnabled && state.settings.autoBackup) {
      state.lastSync = new Date().toISOString();
      saveState();
    }
  }, parseInt(state.settings.syncInterval||'5') * 60 * 1000);
}

// ═══════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════
function init() {
  applyTheme();
  render();
  registerSW();
  startAutoSync();
  scheduleReminders();

  // Handle back button on Android
  window.addEventListener('popstate', () => {
    if (modalOpen) { closeModal(); history.pushState(null,'',location.href); }
  });
  history.pushState(null,'',location.href);

  // Prevent pull-to-refresh
  document.addEventListener('touchmove', e => {
    if (e.touches.length > 1) e.preventDefault();
  }, {passive:false});

  // Auto-save on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState==='hidden') saveState();
  });

  console.log('✓ Mi Agenda Personal cargada · Datos en localStorage');
}

init();
</script>

</body>
</html>
