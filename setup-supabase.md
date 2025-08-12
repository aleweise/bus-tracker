# 🚀 Configuración de Supabase

## Paso 1: Crear cuenta en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Haz clic en "Start your project"
3. Crea una cuenta gratuita (con GitHub, Google, etc.)

## Paso 2: Crear nuevo proyecto

1. Haz clic en "New Project"
2. Elige tu organización
3. Nombre del proyecto: `bus-tracker` (o el que prefieras)
4. Contraseña de base de datos: (guárdala bien)
5. Región: elige la más cercana a tu ubicación
6. Haz clic en "Create new project"

## Paso 3: Crear la tabla

1. Ve a la sección "Table Editor" en el panel izquierdo
2. Haz clic en "Create a new table"
3. Nombre de la tabla: `bus_locations`
4. Desmarca "Enable Row Level Security" (por ahora)
5. Agrega estas columnas:

| Nombre | Tipo | Configuración |
|--------|------|---------------|
| id | int8 | Primary Key, Auto-increment |
| bus_id | text | No nulo |
| lat | float8 | No nulo |
| lng | float8 | No nulo |
| accuracy | float8 | Nullable |
| is_active | bool | Default: true |
| updated_at | timestamptz | Default: now() |

6. Haz clic en "Save"

## Paso 4: Obtener las credenciales

1. Ve a "Settings" → "API" en el panel izquierdo
2. Copia estos valores:
   - **Project URL**: `https://tu-proyecto.supabase.co`
   - **anon public key**: `eyJ0eXAiOiJKV1Q...` (clave larga)

## Paso 5: Configurar la aplicación

1. Abre el archivo `config.js`
2. Reemplaza:
   - `TU_SUPABASE_URL_AQUI` con tu Project URL
   - `TU_SUPABASE_ANON_KEY_AQUI` con tu anon public key

```javascript
const SUPABASE_CONFIG = {
    url: 'https://tu-proyecto.supabase.co',
    key: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...'
};
```

## ¡Listo! 🎉

Ahora tu aplicación funcionará entre diferentes dispositivos:
- El conductor inicia el seguimiento en su teléfono
- Los padres ven la ubicación en tiempo real desde cualquier dispositivo
- Las actualizaciones son instantáneas gracias a Supabase Realtime

## Plan gratuito de Supabase incluye:
- ✅ 500MB de base de datos
- ✅ 2GB de transferencia mensual  
- ✅ 50,000 usuarios activos mensuales
- ✅ Actualizaciones en tiempo real
- ✅ Sin límite de tiempo

¡Más que suficiente para rastrear varios buses escolares!