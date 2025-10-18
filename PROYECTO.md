# 🚀 Galería de Películas y Series - Next.js

Aplicación completa que combina **CSR (Client-Side Rendering)** y **SSR (Server-Side Rendering)** usando Next.js 14, OMDb API y Tailwind CSS.

## 📋 Características

### ✅ Página Principal (SSR)
- Lista de películas populares renderizada en el servidor
- Carga instantánea del contenido
- SEO optimizado

### 🔍 Búsqueda Interactiva (CSR)
- Input de búsqueda con debounce (500ms)
- Resultados en tiempo real sin recargar la página
- Grid responsivo de películas/series

### 🎬 Modal de Detalles
- Información completa de cada película/serie
- Ratings de IMDb, Metascore, etc.
- Diseño moderno con animaciones

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con SSR/CSR
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Axios** - HTTP client
- **OMDb API** - Base de datos de películas

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🗂️ Estructura del Proyecto

```
app/
├── movies/
│   ├── page.tsx              # Página principal (SSR)
│   ├── SearchMovies.tsx      # Componente de búsqueda (CSR)
│   └── MovieModal.tsx        # Modal de detalles (CSR)
├── pokemon-csr/
│   └── page.tsx              # Ejercicio Pokémon CSR
├── pokemon-ssr/
│   └── page.tsx              # Ejercicio Pokémon SSR
├── weather/
│   ├── page.tsx              # Dashboard del clima (híbrido)
│   └── ClientWeatherWidget.tsx
└── page.tsx                  # Página de inicio

lib/
└── omdb.ts                   # Configuración y tipos de OMDb API
```

## 🎯 Rutas Disponibles

| Ruta | Descripción | Estrategia |
|------|-------------|------------|
| `/` | Página de inicio | Estática |
| `/pokemon-csr` | Pokémon con CSR | CSR |
| `/pokemon-ssr` | Pokémon con SSR | SSR |
| `/weather` | Dashboard del clima | Híbrido |
| `/movies` | **Galería de películas** | **Híbrido** |

## 🔑 API Key

La aplicación usa OMDb API con la siguiente configuración:

```typescript
API Key: 4a3be5f8
Base URL: http://www.omdbapi.com/
```

**Límite**: 1000 requests/día

## 📊 Justificación Técnica

### ¿Por qué SSR en películas populares?
- ✅ **SEO**: Los motores de búsqueda indexan el contenido fácilmente
- ✅ **Performance**: Primera carga más rápida
- ✅ **UX**: Contenido visible instantáneamente

### ¿Por qué CSR en búsqueda?
- ✅ **Interactividad**: Resultados dinámicos sin recargar
- ✅ **UX**: Experiencia fluida tipo SPA
- ✅ **Optimización**: Menor carga en el servidor

### ¿Por qué CSR en modal?
- ✅ **Carga bajo demanda**: Solo cuando el usuario hace clic
- ✅ **Performance**: No bloquea la carga inicial
- ✅ **UX**: Transiciones suaves

## 🧪 Pruebas en DevTools

### Network Tab
1. Abre DevTools (F12) → Network
2. Recarga `/movies`
3. Observa:
   - **HTML inicial**: Contiene las películas populares (SSR)
   - **Búsqueda**: Peticiones XHR dinámicas (CSR)

### View Source
1. Click derecho → "Ver código fuente"
2. Las películas populares ya están en el HTML
3. Los resultados de búsqueda NO están (se cargan dinámicamente)

## 📈 Funcionalidades Implementadas

✅ Directiva `'use client'` en componentes interactivos  
✅ Async/await para peticiones asíncronas  
✅ Hooks `useState` y `useEffect`  
✅ UI responsive con Tailwind CSS  
✅ TypeScript con interfaces tipadas  
✅ Debounce en búsqueda  
✅ Modal con animaciones  
✅ Manejo de errores  
✅ Loading states  

## 🎨 Diseño

- **Gradientes modernos**: Paleta purple-pink-red
- **Glassmorphism**: Efectos de backdrop-blur
- **Animaciones**: Hover effects y transiciones
- **Responsive**: Mobile-first design
- **Accesibilidad**: Contraste y semántica

## 📝 Ejercicios Adicionales

El proyecto incluye ejercicios de aprendizaje:

1. **Pokémon CSR/SSR**: Comparación visual de estrategias
2. **Dashboard del Clima**: Ejemplo híbrido con múltiples fuentes
3. **Galería de Películas**: Proyecto integrador completo

## 🚀 Deployment

```bash
# Build para producción
npm run build

# Iniciar producción
npm start
```

---

**Desarrollado con ❤️ usando Next.js 14**  
2025 • Ejercicios de aprendizaje
