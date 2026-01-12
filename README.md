# Sinapsis Campaigns - Frontend

Este proyecto corresponde al **frontend** del sistema de envío y gestión de campañas SMS.
Permite:

- Registrar campañas
- Listar campañas por rango de fechas
- Visualizar el detalle de mensajes de una campaña

El frontend está desarrollado con **Angular 17**, utilizando **componentes standalone**, **lazy loading**, **environments** y buenas prácticas de arquitectura.

---

## Tecnologías utilizadas

- Angular 17
- TypeScript
- Tailwind CSS
- Angular Router
- Reactive Forms

---

## Requisitos previos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- **Node.js** (v18 o superior recomendado)
- **npm** (v9 o superior)
- **Angular CLI 17**

Verificar versiones:
```bash
node -v
npm -v
ng version
```
---
## Rutas principales de la aplicación

| Ruta                      | Descripción                        |
| ------------------------- | ---------------------------------- |
| `/campaigns`              | Listado de campañas                |
| `/campaigns/create`       | Registro de nueva campaña          |

## Estructura del proyecto

```bash
src/
 ├─ app/
 │   ├─ core/
 │   │   ├─ models/
 │   │   └─ services/
 │   ├─ features/
 │   │   ├─ campaigns/
 │   │   └─ messages/
 │   ├─ shared/
 │   ├─ app.routes.ts
 │   └─ app.component.ts
 ├─ environments/
 └─ styles.css
```
---
## Instalación y ejecución del proyecto

Clonar el repositorio
```bash
git clone https://github.com/JesusChungaGuizado/sinapsis_campaigns_frontend.git
cd sinapsis_campaigns_frontend
```
Instalar dependencias
```bash
npm install
```
Ejecutar el proyecto en modo desarrollo
```bash
ng serve
```
Acceder a la aplicación
```bash
http://localhost:4200
```
