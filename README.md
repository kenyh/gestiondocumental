# 📂 Gestión Documental – Prueba Técnica Frontend

Aplicación web frontend que permite a un usuario gestionar un repositorio básico de documentos utilizando React, TypeScript, Material UI v5 y almacenamiento en Local Storage.

---

## 🧠 Objetivo

- Crear, editar, eliminar y listar documentos.
- Filtrar documentos por tipo, categoría y subcategoría.
- Usar `LocalStorage` para persistencia.
- Aplicar buenas prácticas con hooks personalizados, tipado estricto y componentes reutilizables.

---

## 🛠️ Tecnologías Usadas

- ⚛️ React + Vite
- 🟦 TypeScript
- 🎨 Material UI v5
- 🧩 Hooks personalizados
- 💾 LocalStorage

---


## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/kenyh/gestiondocumental.git
cd gestiondocumental
```

2. Instala dependencias:

```bash
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

```

3. Ejecuta el servidor local:

```bash
npm run dev
```

4. Abre tu navegador en:

```
http://localhost:5173
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables (tabla, modal, filtros)
├── hooks/              # Lógica encapsulada (useDocuments)
├── pages/              # Página principal
├── types/              # Tipos TypeScript
├── utils/              # Constantes y helpers
└── App.tsx             # Componente principal
```

---

## ✨ Funcionalidades

- ✔️ Crear documentos desde un modal con validaciones
- ✔️ Editar documentos existentes
- ✔️ Eliminar con confirmación
- ✔️ Filtros por tipo, categoría y subcategoría
- ✔️ Paginación de resultados
- ✔️ LocalStorage como sistema de persistencia
- ✔️ Hooks personalizados y tipado fuerte

---

## 📌 Requisitos

- Node.js 14+
- npm 7+


---

## 📄 Autor y Créditos
 kevin hernandez
