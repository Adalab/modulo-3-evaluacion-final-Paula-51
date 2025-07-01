# 🧙‍♀️ Hogwarts Finder

¡Bienvenida/o a **Hogwarts Finder**! Esta es una aplicación interactiva desarrollada en **React** que permite explorar los personajes del universo de **Harry Potter**, filtrarlos por nombre o casa, y acceder a una ficha detallada de cada uno.

Diseñada con un estilo mágico en **modo oscuro**, incluye elementos visuales inspirados en el Mapa del Merodeador y animaciones que recrean la atmósfera del mundo mágico.

---

## ✨ Características

- 🔍 Búsqueda de personajes por nombre (input con reset automático al hacer clic).
- 🏠 Filtro por casa (Gryffindor, Hufflepuff, Ravenclaw, Slytherin).
- 🧩 Tarjetas de personajes dispuestas en un grid responsivo.
- 📋 Página de detalle individual por personaje.
- 📦 Imágenes por defecto para personajes sin foto.
- 🧭 Fondo personalizado con el **Mapa del Merodeador**.
- 👣 Animación de huellas mágicas en movimiento.
- 🪄 Tipografía ambientada al universo HP.

---

## 🚀 Tecnologías

- **React**
- **React Router DOM**
- **JavaScript (ES6+)**
- **HTML5 + SCSS (SASS)**
- **Vite**
- **API externa**: [`hp-api`](https://hp-api.onrender.com/api/characters)

---

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Paula-51/hogwarts-finder.git
   cd hogwarts-finder

   ```

2. Instala las dependencias

   npm install

3. Asegúrate de tener SASS instalado:

   npm install -D sass sass-embedded

4. Ejecuta el proyecto:

   npm run dev

🧪 Componentes principales

<App />: Lógica de rutas, estado global y filtrado.

<NameFilter />: Input para filtrar personajes por nombre.

<HouseFilter />: Botones para filtrar por casa.

<HogwartsGrid />: Grid de tarjetas con personajes.

<HogwartsCard />: Tarjeta individual con nombre, imagen y casa.

<CharacterDetail />: Página de detalle con información del personaje.

📁 Estructura del proyecto
src/
├── assets/
│ └── images/
├── components/
│ ├── NameFilter.jsx
│ ├── HouseFilter.jsx
│ ├── HogwartsGrid.jsx
│ ├── HogwartsCard.jsx
│ └── CharacterDetail.jsx
├── styles/
│ ├── App.scss
│ ├── CardGrid.scss
│ ├── CharacterDetails.scss
│ └── ...
├── App.jsx
└── main.jsx
