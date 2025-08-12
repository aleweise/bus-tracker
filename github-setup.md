# 📤 Subir a GitHub

## Opción 1: Crear repositorio desde GitHub.com (Recomendado)

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Configura el repositorio:
   - **Repository name**: `bus-tracker` (o el nombre que prefieras)
   - **Description**: `🚌 Rastreador de Bus Escolar con OpenStreetMap y Supabase`
   - **Public** (para que otros puedan verlo) o **Private**
   - NO marques "Add a README file" (ya tenemos uno)
   - NO marques "Add .gitignore" (ya tenemos uno)
   - NO marques "Choose a license" (ya tenemos uno)
5. Haz clic en "Create repository"

## Opción 2: Comandos para conectar con tu repositorio

Una vez creado el repositorio en GitHub, ejecuta estos comandos en tu terminal:

```bash
# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu nombre de usuario)
git remote add origin https://github.com/TU_USUARIO/bus-tracker.git

# Cambiar a la rama main (GitHub usa main por defecto ahora)
git branch -M main

# Subir los archivos
git push -u origin main
```

## Opción 3: Usar GitHub CLI (si lo tienes instalado)

```bash
# Crear repositorio directamente desde la terminal
gh repo create bus-tracker --public --description "🚌 Rastreador de Bus Escolar con OpenStreetMap y Supabase"

# Subir los archivos
git push -u origin main
```

## 🎉 ¡Listo!

Una vez subido, tu repositorio estará disponible en:
`https://github.com/TU_USUARIO/bus-tracker`

## 🌐 GitHub Pages (Opcional)

Para que tu aplicación funcione directamente desde GitHub:

1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. Scroll hasta "Pages" en el menú lateral
4. En "Source" selecciona "Deploy from a branch"
5. Selecciona "main" branch y "/ (root)"
6. Haz clic en "Save"

Tu aplicación estará disponible en:
`https://TU_USUARIO.github.io/bus-tracker`