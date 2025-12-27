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
  whatsapp: "9562339038",
  crmUrl: "",
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
        { nombre: "50 Wings", precio: "$54.99" },
        { nombre: "Flavors", precio: "", nota: "Buffalo, BBQ, Lemon Pepper, Mango Habanero, Garlic Parmesan" }
      ]
    },
    {
      categoria: "Appetizers",
      items: [
        { nombre: "Chips & Salsa", precio: "$5.99" },
        { nombre: "Mozzarella Sticks", precio: "$7.99" },
        { nombre: "Fried Pickles", precio: "$6.99" },
        { nombre: "Onion Rings", precio: "$6.99" }
      ]
    },
    {
      categoria: "Burgers",
      items: [
        { nombre: "Classic Burger", precio: "$9.99" },
        { nombre: "Cheeseburger", precio: "$10.49" },
        { nombre: "Bacon Burger", precio: "$10.99" }
      ]
    },
    {
      categoria: "Sandwiches",
      items: [
        { nombre: "Grilled Chicken", precio: "$9.99" },
        { nombre: "Buffalo Chicken", precio: "$10.49" }
      ]
    },
    {
      categoria: "Kids Meals",
      items: [
        { nombre: "Corn Dog", precio: "$5.99" },
        { nombre: "Grilled Cheese", precio: "$5.99" }
      ]
    },
    {
      categoria: "Desserts",
      items: [
        { nombre: "Cheesecake", precio: "$4.99" },
        { nombre: "Ice Cream", precio: "$3.99" }
      ]
    }
  ]
};

/* ===== RENDER ===== */

// HERO
document.getElementById("restaurantName").textContent = CONFIG.nombre;
document.getElementById("restaurantSubtitle").textContent = CONFIG.subtitulo;

// HISTORIA
const historySection = document.querySelector(".section:nth-of-type(1)");
historySection.innerHTML = "<h2>Nuestra Historia</h2>";
CONFIG.historia.forEach(text => {
  const p = document.createElement("p");
  p.textContent = text;
  historySection.appendChild(p);
});

// DATOS GENERALES
const infoSection = document.querySelector(".section:nth-of-type(2)");
infoSection.innerHTML = `
  <h2>Datos Generales</h2>
  <p><strong>Dirección:</strong> ${CONFIG.direccion}, ${CONFIG.ciudadEstado}</p>
  <p><strong>Teléfono:</strong> ${CONFIG.telefono}</p>
`;

for (let dia in CONFIG.horarios) {
  const p = document.createElement("p");
  p.textContent = `${dia}: ${CONFIG.horarios[dia]}`;
  infoSection.appendChild(p);
}

// MENU
const menuSection = document.querySelector(".section:nth-of-type(3)");
menuSection.innerHTML = `<h2 style="text-align:center">MENU</h2>`;

CONFIG.menu.forEach(cat => {
  const catDiv = document.createElement("div");
  catDiv.innerHTML = `<h3>${cat.categoria}</h3>`;

  cat.items.forEach(item => {
    const row = document.createElement("div");
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.borderBottom = "1px dashed #ccc";
    row.style.padding = "6px 0";

    row.innerHTML = `
      <div>
        ${item.nombre}
        ${item.nota ? `<br><small>${item.nota}</small>` : ""}
      </div>
      <div>${item.precio}</div>
    `;
    catDiv.appendChild(row);
  });

  menuSection.appendChild(catDiv);
});

console.log("CONFIG cargado correctamente");
