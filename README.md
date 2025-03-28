# Challenge React-Node - Francisco Arenas

Aplicación web para gestión de posts utilizando React, Redux, Node.js y PostgreSQL.

## Requisitos Previos

- Node.js (v14 o superior)
- Docker y Docker Compose
- Git

## Estructura del Proyecto

```bash
challenge-react-node/
├── backend/         # API Node.js
├── frontend/        # Aplicación React
└── docker/         # Configuración de BD
```

## 1. Configuración de Base de Datos

### 1.1 Iniciar PostgreSQL

```bash
# Navegar al directorio docker
cd docker

# Iniciar contenedores
docker-compose up -d

# Verificar que los contenedores estén corriendo
docker ps
```

### 1.2 Verificar Base de Datos

Acceder a pgAdmin4:
- URL: http://localhost:5050
- Email: admin@example.com
- Password: admin

Configurar conexión a PostgreSQL:
- Host: db
- Port: 5432
- Database: posts_db
- Username: postgres
- Password: challenge_tcit

## 2. Configuración del Backend

```bash
# Navegar al directorio backend
cd backend

# Instalar dependencias
npm install

# Iniciar servidor en modo desarrollo
npm start
```

El servidor estará disponible en: http://localhost:5000

### Endpoints Disponibles:

```bash
GET    /api/posts     # Obtener todos los posts
POST   /api/posts     # Crear nuevo post
DELETE /api/posts/:id # Eliminar post
```

## 3. Configuración del Frontend

```bash
# Navegar al directorio frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar aplicación
npm start
```

La aplicación estará disponible en: http://localhost:3000

## 4. Pruebas del Sistema

### 4.1 Crear Post
- Completar formulario con Nombre y Descripción
- Click en "Crear"
- Verificar que aparezca en la lista

### 4.2 Filtrar Posts
- Usar el campo de búsqueda
- Los resultados se filtran automáticamente

### 4.3 Eliminar Post
- Click en botón "Eliminar" del post deseado
- Verificar que desaparezca de la lista

## 5. Características Principales

- Paginación (6 items por página)
- Validación de duplicados
- Filtrado en tiempo real
- Manejo de errores
- Diseño responsive

## 6. Solución de Problemas

### Error de Conexión a BD
```bash
# Verificar logs de PostgreSQL
docker logs postgres_db

# Reiniciar contenedores
docker-compose down
docker-compose up -d
```

### Limpiar y Reiniciar
```bash
# Detener todos los servicios
docker-compose down -v
rm -rf backend/node_modules
rm -rf frontend/node_modules

# Reinstalar todo
# Seguir pasos 1, 2 y 3 nuevamente
```

## 7. Comandos Útiles

### Backend
```bash
npm run dev    # Desarrollo
npm run build  # Compilar
npm start      # Producción
```

### Frontend
```bash
npm start      # Desarrollo
npm run build  # Producción
npm test       # Pruebas
```

### Docker
```bash
docker-compose ps     # Estado de servicios
docker-compose logs   # Ver logs
docker-compose down   # Detener todo
```

## Contacto

- **Desarrollador**: Francisco Arenas
- **GitHub**: [github.com/FranciscoArenas](https://github.com/FranciscoArenas)
