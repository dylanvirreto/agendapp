// ═══════════════════════════════════════════════════════════════
// STATE (Estado Inicial)
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
// PERSISTENCE (Guardado Local)
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
  const themeMeta = document.getElementById('theme-meta');
  if (themeMeta) themeMeta.content = state.settings.darkMode ? '#1E1418' : '#7A213A';
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS & REMINDERS
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
      new Notification(`📅 ${ev.title}`, {
        body: `Comienza en ${Math.round(minsLeft)} minutos`,
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%237A213A"/><text y=".9em" font-size="80">📅</text></svg>',
      });
    }
  });
}

// ═══════════════════════════════════════════════════════════════
// INIT & EVENT HANDLERS
// ═══════════════════════════════════════════════════════════════
function init() {
  applyTheme();
  // Aquí irían las llamadas de renderizado inicial (renderTopBar, renderNav, etc.)
  scheduleReminders();
  
  // Guardado automático al cerrar/cambiar visibilidad
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') saveState();
  });
}

// Iniciar aplicación
document.addEventListener('DOMContentLoaded', init);
                            
