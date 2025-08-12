// Configuración de Supabase
// Reemplaza estos valores con los de tu proyecto Supabase
const SUPABASE_CONFIG = {
    url: 'TU_SUPABASE_URL_AQUI',
    key: 'TU_SUPABASE_ANON_KEY_AQUI'
};

// Inicializar cliente de Supabase
const supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key);

// ID único para este bus (puedes cambiarlo por el nombre/número del bus)
const BUS_ID = 'bus_escolar_01';