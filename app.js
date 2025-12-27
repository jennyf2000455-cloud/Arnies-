const CONFIG = {
  nombre: "Arnie's Wing House",
  subtitulo: "Sports Bar & Grill",
  historia: [
    "Arnie’s Wing House nació con la pasión de ofrecer las mejores alitas en un ambiente familiar y deportivo.",
    "Con recetas originales, salsas únicas y un servicio cercano, nos hemos convertido en un punto favorito de la comunidad.",
    "Aquí cada visita es una experiencia llena de sabor, deportes y buena compañía."
  ],
  direccion: "812 South Arroyo Blvd",
  ciudadEstado: "Los Fresnos, TX",
  telefono: "(956) 233-9038",
  horarios: {
    Lunes: "11:00 AM – 10:00 PM",
    Martes: "11:00 AM – 10:00 PM",
    Miércoles: "11:00 AM – 10:00 PM",
    Jueves: "11:00 AM – 10:00 PM",
    Viernes: "11:00 AM – 12:00 AM",
    Sábado: "11:00 AM – 12:00 AM",
    Domingo: "12:00 PM – 10:00 PM"
  },
  menu: [
    {
      categoria: "Wings (Original or Boneless)",
      items: [
        { nombre: "10 Wings", precio: "$12.99" },
        { nombre: "20 Wings", precio: "$23.99" },
        { nombre: "30 Wings", precio: "$34.99" },
        { nombre: "50 Wings", precio: "$54.99" }
      ]
    }
  ]
};

/* HERO */
document.getElementById("restaurantName").textContent = CONFIG.nombre;
document.getElementById("restaurantSubtitle").textContent = CONFIG.subtitulo;

/* HISTORIA */
const historiaDiv = document.getElementById("historiaSection");
CONFIG.historia.forEach(t => {
  const p = document.createElement("p");
  p.textContent = t;
  historiaDiv.appendChild(p);
});

/* INFO */
const infoDiv = document.getElementById("infoSection");
infoDiv.innerHTML += `
  <p><strong>Dirección:</strong> ${CONFIG.direccion}, ${CONFIG.ciudadEstado}</p>
  <p><strong>Teléfono:</strong> ${CONFIG.telefono}</p>
`;

Object.entries(CONFIG.horarios).forEach(([dia, hora]) => {
  const p = document.createElement("p");
  p.textContent = `${dia}: ${hora}`;
  infoDiv.appendChild(p);
});

/* MENU */
const menuDiv = document.getElementById("menuSection");
CONFIG.menu.forEach(cat => {
  const h3 = document.createElement("h3");
  h3.textContent = cat.categoria;
  menuDiv.appendChild(h3);

  cat.items.forEach(item => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.borderBottom = "1px dashed #ccc";
    row.innerHTML = `<span>${item.nombre}</span><span>${item.precio}</span>`;
    menuDiv.appendChild(row);
  });
});

console.log("Render OK");
