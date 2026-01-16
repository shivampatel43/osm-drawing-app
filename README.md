🗺️ OSM Drawing App

An interactive web application built using OpenStreetMap, Leaflet, React, and Vite that allows users to draw geometric shapes (Polygon, Circle, Rectangle, Line) on a map and export them as GeoJSON.

🌐 Live Demo:
👉 https://osm-drawing-app.vercel.app/

🚀 Features

🗺️ OpenStreetMap integration

✏️ Draw shapes:

Polygon

Circle

Rectangle

Line

📤 Export drawn shapes as GeoJSON

📐 Geometry calculations using Turf.js

⚡ Fast build with Vite

☁️ Deployed on Vercel

🛠️ Tech Stack

Frontend: React + TypeScript

Map Library: Leaflet, React-Leaflet

Drawing Tools: leaflet-draw

Geospatial Utilities: Turf.js

Build Tool: Vite

Deployment: Vercel

📦 Installation (Local Setup)
git clone https://github.com/shivampatel43/osm-drawing-app.git
cd osm-drawing-app
npm install
npm run dev


Open in browser:

http://localhost:5173

🏗️ Build for Production
npm run build


Output will be generated in the dist/ folder.

☁️ Deployment

This project is deployed using Vercel with the following configuration:

Build Command: npm run build

Output Directory: dist

Framework: Vite

📂 Project Structure
osm-drawing-app/
├── src/
│   ├── components/
│   ├── assets/
│   ├── state/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md

👨‍💻 Author

Shivam Kumar
GitHub: https://github.com/shivampatel43

📜 License

This project is open-source and available for educational and learning purposes.
