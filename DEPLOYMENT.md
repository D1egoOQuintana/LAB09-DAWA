# 🚀 Guía de Despliegue en Vercel

## Paso 1: Preparar el proyecto

✅ Ya tienes el código en GitHub: `https://github.com/D1egoOQuintana/LAB09-DAWA`

## Paso 2: Crear cuenta en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

## Paso 3: Importar proyecto

### Opción A: Desde el Dashboard

1. Click en **"Add New..."** → **"Project"**
2. Busca el repositorio: `D1egoOQuintana/LAB09-DAWA`
3. Click en **"Import"**

### Opción B: Usando este botón directo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/D1egoOQuintana/LAB09-DAWA)

## Paso 4: Configurar el proyecto

**Framework Preset:** Next.js (detectado automáticamente)

**Build Settings:**
```
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**Root Directory:** `./` (dejar por defecto)

## Paso 5: Variables de entorno (opcional)

Aunque la API key ya está en el código, puedes configurarla como variable de entorno:

1. Click en **"Environment Variables"**
2. Agregar:
   - **Name:** `NEXT_PUBLIC_OMDB_API_KEY`
   - **Value:** `4a3be5f8`
   - **Environment:** Production, Preview, Development

## Paso 6: Deploy

1. Click en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel:
   - Clona el repositorio
   - Instala dependencias
   - Ejecuta `npm run build`
   - Despliega en su CDN global

## Paso 7: ¡Listo!

Tu aplicación estará disponible en:
```
https://lab09-dawa.vercel.app
```

O un dominio personalizado como:
```
https://lab09-dawa-[username].vercel.app
```

## 🔄 Deploys automáticos

Cada vez que hagas `git push` a la rama `main`:
- ✅ Vercel detecta el cambio automáticamente
- ✅ Inicia un nuevo build
- ✅ Despliega la nueva versión
- ✅ Te notifica por email

## 📊 Features de Vercel

### Analytics
- Visitas en tiempo real
- Performance metrics
- Web Vitals (LCP, FID, CLS)

### Preview Deployments
- Cada PR genera un preview único
- URL temporal para testing
- Se elimina al mergear

### Edge Network
- CDN global (40+ regiones)
- Latencia ultra-baja
- HTTPS automático

## 🔧 Comandos útiles

### Deploy desde CLI (opcional)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 🌐 Configurar dominio personalizado

1. Ve a **Project Settings** → **Domains**
2. Click en **"Add Domain"**
3. Ingresa tu dominio (ej: `miapp.com`)
4. Sigue las instrucciones para configurar DNS

## 📈 Monitoreo

Dashboard de Vercel muestra:
- ✅ Número de deploys
- ✅ Tiempo de build
- ✅ Uso de ancho de banda
- ✅ Errores en runtime
- ✅ Performance score

## ⚠️ Troubleshooting

### Error: "Build failed"
```bash
# Verificar build local
npm run build

# Si funciona localmente, revisar logs en Vercel
```

### Error: "Module not found"
```bash
# Asegurarte que package.json esté actualizado
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

### Error: "API key not working"
- Verificar que la API key esté correcta
- Revisar límite de requests (1000/día)

## 📱 Compartir tu proyecto

Una vez desplegado, comparte:

```
🚀 Mi proyecto está en vivo!
👉 https://lab09-dawa.vercel.app

Características:
✅ Next.js 14
✅ SSR y CSR
✅ Galería de películas
✅ Dashboard del clima
```

## 🎉 ¡Felicidades!

Tu proyecto está desplegado y accesible desde cualquier parte del mundo.

---

**Desarrollado por:** Luis Quintana Granados
**Repositorio:** https://github.com/D1egoOQuintana/LAB09-DAWA
