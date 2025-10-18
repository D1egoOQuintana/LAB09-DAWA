# Galería de Películas y Series - Next.js 14

> Aplicación web moderna que demuestra el uso de **Client-Side Rendering (CSR)** y **Server-Side Rendering (SSR)** en Next.js 14

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**Desarrollado por:** Luis Quintana Granados

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Despliegue](#-despliegue)
- [Ejercicios Implementados](#-ejercicios-implementados)
- [API Utilizada](#-api-utilizada)
- [Justificación Técnica](#-justificación-técnica)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Autor](#-autor)

---

## 📖 Descripción

Este proyecto es una aplicación integral de Next.js 14 que combina múltiples ejercicios prácticos para demostrar la diferencia entre **CSR** y **SSR**, además de implementar una galería completa de películas y series usando la API de OMDb.

El proyecto incluye:
- Comparación práctica entre CSR y SSR con Pokémon
- Dashboard híbrido del clima
- Galería de películas con búsqueda en tiempo real
- Modal interactivo con detalles completos

---

## ✨ Características

### Página Principal
- ✅ Navegación entre todos los ejercicios
- ✅ Diseño moderno con gradientes y glassmorphism
- ✅ Cards interactivas con hover effects
- ✅ Información sobre CSR, SSR e Híbrido

### Pokémon CSR vs SSR
- ✅ **CSR**: Datos cargados en el navegador con loading state
- ✅ **SSR**: Datos precargados en el servidor
- ✅ Diseño visual idéntico para comparación directa
- ✅ Información educativa sobre cada estrategia

### Dashboard del Clima
- ✅ **SSR** para Lima (Perú) - Datos instantáneos
- ✅ **CSR** para ciudades mundiales - Selector interactivo
- ✅ Tabla comparativa SSR vs CSR
- ✅ UI moderna con efectos de backdrop-blur

### Galería de Películas (Proyecto Final)
- ✅ **SSR**: Películas populares precargadas
- ✅ **CSR**: Búsqueda en tiempo real con debounce
- ✅ Modal con información completa (ratings, actores, premios)
- ✅ Grid responsivo adaptable
- ✅ Manejo de errores y estados de carga
- ✅ Filtrado de duplicados

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 14.x | Framework React con SSR/CSR |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 3.x | Estilos utility-first |
| **Axios** | 1.x | Cliente HTTP |
| **React** | 18.x | Librería UI |

### APIs Externas
- **OMDb API** - Base de datos de películas
- **PokeAPI** - Información de Pokémon
- **Open-Meteo** - Datos meteorológicos

---

## 📁 Estructura del Proyecto

```
my-first-project/
├── app/
│   ├── movies/
│   │   ├── page.tsx              # Galería principal (SSR + CSR)
│   │   ├── SearchMovies.tsx      # Búsqueda interactiva (CSR)
│   │   └── MovieModal.tsx        # Modal de detalles
│   ├── pokemon-csr/
│   │   └── page.tsx              # Pokémon con CSR
│   ├── pokemon-ssr/
│   │   └── page.tsx              # Pokémon con SSR
│   ├── weather/
│   │   ├── page.tsx              # Dashboard híbrido
│   │   └── ClientWeatherWidget.tsx
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página de inicio
├── lib/
│   └── omdb.ts                   # Config y tipos OMDb API
├── public/                       # Recursos estáticos
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── PROYECTO.md                   # Documentación técnica
```

---

## 🚀 Instalación

### Prerequisitos
- Node.js 18.x o superior
- npm, yarn, pnpm o bun

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/D1egoOQuintana/LAB09-DAWA.git
cd LAB09-DAWA
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno** (opcional)
```bash
# Crear archivo .env.local
NEXT_PUBLIC_OMDB_API_KEY=4a3be5f8
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

---

## 💻 Uso

### Navegación

| Ruta | Descripción | Estrategia |
|------|-------------|------------|
| `/` | Página de inicio | Estática |
| `/pokemon-csr` | Pokémon CSR | Client-Side Rendering |
| `/pokemon-ssr` | Pokémon SSR | Server-Side Rendering |
| `/weather` | Dashboard del clima | Híbrido (SSR + CSR) |
| `/movies` | Galería de películas | Híbrido (SSR + CSR) |

### Búsqueda de Películas

1. Ir a `/movies`
2. Escribir en el input de búsqueda (ej: "Marvel", "Star Wars")
3. Los resultados aparecen en tiempo real (debounce 500ms)
4. Click en cualquier película para ver detalles completos

### Dashboard del Clima

1. Ir a `/weather`
2. **Lima (SSR)**: Temperatura visible inmediatamente
3. **Mundo (CSR)**: Seleccionar ciudad del dropdown para ver clima en tiempo real

---

## 🌐 Despliegue

### Opción 1: Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/D1egoOQuintana/LAB09-DAWA)

**Pasos manuales:**

1. **Crear cuenta en Vercel**
   - Ir a [vercel.com](https://vercel.com)
   - Sign up con GitHub

2. **Importar proyecto**
   ```bash
   # Instalar Vercel CLI (opcional)
   npm i -g vercel
   
   # Hacer deploy
   vercel
   ```

3. **Configurar proyecto**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`

4. **Variables de entorno**
   - Agregar `NEXT_PUBLIC_OMDB_API_KEY=4a3be5f8`

5. **Deploy**
   - Click en "Deploy"
   - ¡Listo! Tu app estará en línea en minutos

### Opción 2: Netlify

1. **Conectar repositorio**
   - Ir a [netlify.com](https://netlify.com)
   - New site from Git → GitHub

2. **Configuración de build**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Instalar plugin de Next.js**
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```

4. **Deploy automático**
   - Push a `main` → deploy automático

### Opción 3: Build manual

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

---

## 📚 Ejercicios Implementados

### 1. Conceptos Fundamentales - PokeApp

**Ejercicio 1.1:** Visualización CSR vs SSR

- ✅ Página Pokémon CSR con `useEffect` y `useState`
- ✅ Página Pokémon SSR con async components
- ✅ Diseño visual idéntico para comparación
- ✅ Documentación educativa integrada

**Resultados:**
- **CSR**: 2 peticiones (HTML + API)
- **SSR**: 1 petición (HTML con datos)

### 2. Caso Práctico - Dashboard de Clima

**Ejercicio 2.1:** Dashboard Híbrido

- ✅ Widget SSR para Lima (Perú)
- ✅ Widget CSR para ciudades mundiales
- ✅ Tabla comparativa de características
- ✅ Selectores interactivos

### 3. Actividad Integradora - Galería de Películas

**Requisitos cumplidos:**

✅ **Página Principal (SSR)**
- Películas populares renderizadas en servidor
- SEO optimizado

✅ **Búsqueda (CSR)**
- Input interactivo con debounce
- Resultados en tiempo real
- Sin recargas de página

✅ **Detalles de Película**
- Modal interactivo
- Información completa (ratings, actores, premios, sinopsis)
- Diseño profesional

✅ **Criterios de Evaluación**
- Uso correcto de `'use client'`
- Async/await en todas las peticiones
- UI atractiva con Tailwind CSS
- Hooks: `useState`, `useEffect`
- Justificación técnica documentada

---

## 🔑 API Utilizada

### OMDb API

**Configuración:**
```typescript
API Key: 4a3be5f8
Base URL: http://www.omdbapi.com/
Límite: 1000 requests/día
```

**Endpoints usados:**

```typescript
// Búsqueda general
GET /?apikey=4a3be5f8&s=marvel

// Búsqueda por ID
GET /?apikey=4a3be5f8&i=tt3896198

// Búsqueda por título y año
GET /?apikey=4a3be5f8&t=suits&y=2012
```

**Documentación:** [omdbapi.com](https://www.omdbapi.com/)

---

## 🎯 Justificación Técnica

### ¿Por qué SSR en películas populares?

| Ventaja | Descripción |
|---------|-------------|
| **SEO** | Los motores de búsqueda indexan el contenido fácilmente |
| **Performance** | Primera carga más rápida (FCP, LCP) |
| **UX** | Contenido visible instantáneamente |
| **Caché** | Puede ser cacheado en CDN |

### ¿Por qué CSR en búsqueda?

| Ventaja | Descripción |
|---------|-------------|
| **Interactividad** | Resultados dinámicos sin recargar |
| **UX** | Experiencia fluida tipo SPA |
| **Optimización** | Menor carga en el servidor |
| **Debounce** | Evita peticiones innecesarias |

### ¿Por qué CSR en modal?

| Ventaja | Descripción |
|---------|-------------|
| **Lazy Loading** | Datos cargados bajo demanda |
| **Performance** | No bloquea la carga inicial |
| **UX** | Transiciones suaves y naturales |
| **Caché cliente** | Datos en memoria del navegador |

---

## 📸 Capturas de Pantalla

### Página Principal
```
┌─────────────────────────────────────┐
│      🚀 Next.js App                 │
│  Ejercicios de CSR, SSR e Híbridos  │
│                                     │
│  [Pokémon CSR] [Pokémon SSR]       │
│  [Dashboard]   [Galería Movies]    │
│                                     │
│  [SSR] [CSR] [Híbrido]             │
└─────────────────────────────────────┘
```

### Galería de Películas
```
┌─────────────────────────────────────┐
│ Películas Populares - SSR           │
│ [🎬] [🎬] [🎬] [🎬] [🎬]          │
│                                     │
│ Búsqueda en Tiempo Real - CSR      │
│ [Search: _________]                 │
│ [🎬] [🎬] [🎬] [🎬]                │
└─────────────────────────────────────┘
```

---

## 👨‍💻 Autor

**Luis Quintana Granados**

- GitHub: [@D1egoOQuintana](https://github.com/D1egoOQuintana)
- Proyecto: [LAB09-DAWA](https://github.com/D1egoOQuintana/LAB09-DAWA)

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.

---

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework
- [OMDb API](https://www.omdbapi.com/) - Base de datos de películas
- [PokeAPI](https://pokeapi.co/) - Datos de Pokémon
- [Open-Meteo](https://open-meteo.com/) - API meteorológica
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS

---

## 📞 Soporte

Si tienes alguna pregunta o problema:

1. Abre un [Issue](https://github.com/D1egoOQuintana/LAB09-DAWA/issues)
2. Revisa la [Documentación](./PROYECTO.md)
3. Contacta al autor

---

**⭐ Si te gustó este proyecto, dale una estrella en GitHub!**

Built with ❤️ using Next.js 14 • TypeScript • Tailwind CSS
