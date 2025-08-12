# 🚌 Rastreador de Bus Escolar

Una aplicación web simple y gratuita para rastrear la ubicación del bus escolar en tiempo real entre diferentes dispositivos.

## 📱 Características

- **Para el Conductor**: Botón simple para iniciar/detener el seguimiento de ubicación
- **Para los Padres**: Mapa en tiempo real mostrando la ubicación del bus
- **Tiempo Real**: Actualizaciones instantáneas usando Supabase
- **Entre Dispositivos**: El conductor usa su teléfono, los padres ven desde cualquier dispositivo
- **Completamente Gratuito**: OpenStreetMap + Supabase (plan gratuito)
- **Fácil de usar**: Interfaz simple y clara

## 🚀 Configuración

### Opción 1: Solo en el mismo dispositivo (sin configuración)
- Funciona inmediatamente
- Solo para pruebas o uso en un solo dispositivo

### Opción 2: Entre diferentes dispositivos (recomendado)
- Sigue las instrucciones en `setup-supabase.md`
- 5 minutos de configuración
- Funciona entre teléfono del conductor y dispositivos de los padres

## 📋 Usar la Aplicación

1. **Conductor**: Abre `index.html` en el teléfono y presiona "Iniciar Seguimiento"
2. **Padres**: Presiona "Ver Ubicación del Bus" para abrir el mapa

## 📋 Instrucciones de Uso

### Para el Conductor del Bus:
1. Abre la página web en su teléfono
2. Presiona "Iniciar Seguimiento" al comenzar la ruta
3. Mantén la página abierta durante el recorrido
4. Presiona "Detener Seguimiento" al finalizar

### Para los Padres:
1. Abre la página web
2. Presiona "Ver Ubicación del Bus"
3. El mapa se actualizará automáticamente cada 5 segundos

## 🔧 Mejoras Futuras (Opcionales)

Si quieres una versión más avanzada, puedes:

1. **Agregar notificaciones** cuando el bus esté cerca de casa
2. **Historial de rutas** para ver recorridos anteriores  
3. **Múltiples buses** para escuelas más grandes
4. **Estimación de llegada** basada en la ruta y velocidad

## 💡 Notas Importantes

- **Con Supabase**: Funciona entre diferentes dispositivos en tiempo real
- **Sin Supabase**: Solo funciona en el mismo dispositivo (localStorage)
- OpenStreetMap es completamente gratuito y sin límites
- Supabase plan gratuito incluye 500MB DB + 2GB transferencia mensual
- Asegúrate de que el conductor tenga GPS activado y conexión a internet

## 🆘 Solución de Problemas

- **No se ve el mapa**: Verifica que tengas conexión a internet
- **No se actualiza la ubicación**: Asegúrate de que el GPS esté activado
- **Error de permisos**: El navegador debe permitir acceso a la ubicación

## 📞 Soporte

Si necesitas ayuda para configurar Firebase o hacer mejoras, puedo ayudarte paso a paso.