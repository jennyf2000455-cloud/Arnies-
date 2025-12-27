const CONFIG = {
  nombre: "Nombre del Restaurante",
  subtitulo: "Sabores auténticos y hospitalidad cercana",
  historia: [
    "Escribe aquí la primera parte de la historia del restaurante.",
    "Comparte la inspiración detrás del menú y la experiencia.",
    "Cierra con una frase sobre la comunidad o la visión a futuro."
  ],
  direccion: "Calle Principal 123",
  ciudadEstado: "Ciudad, Estado",
  telefono: "+52 55 1234 5678",
  horarios: {
    Lunes: "12:00 - 22:00",
    Martes: "12:00 - 22:00",
    Miércoles: "12:00 - 22:00",
    Jueves: "12:00 - 22:00",
    Viernes: "12:00 - 23:00",
    Sábado: "13:00 - 23:00",
    Domingo: "13:00 - 20:00"
  },
  whatsapp: "525512345678",
  crmUrl: "",
  notasMenu: "Pregunta por nuestros especiales del día y opciones vegetarianas.",
  menu: [
    // Reemplaza estas categorías con el menú real completo.
    {
      categoria: "Entradas",
      items: [
        {
          nombre: "Papas crujientes",
          precio: "$85",
          nota: "Acompañadas con salsa de la casa"
        },
        {
          nombre: "Tiras de pollo",
          precio: "$120",
          nota: "Con aderezo ranch"
        }
      ]
    },
    {
      categoria: "Platos fuertes",
      items: [
        {
          nombre: "Hamburguesa clásica",
          precio: "$180",
          nota: "Carne 180 g, queso y vegetales"
        },
        {
          nombre: "Ensalada mediterránea",
          precio: "$160",
          nota: "Lechugas frescas, aceitunas y vinagreta"
        }
      ]
    }
  ]
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) {
    el.textContent = value || "";
  }
};

const renderHistoria = () => {
  const container = document.querySelector("#historia");
  if (!container) return;
  container.innerHTML = "";
  CONFIG.historia.filter(Boolean).forEach((texto) => {
    const p = document.createElement("p");
    p.textContent = texto;
    container.appendChild(p);
  });
};

const renderDatos = () => {
  setText("#direccion", `${CONFIG.direccion}, ${CONFIG.ciudadEstado}`.trim());
  setText("#telefono", CONFIG.telefono);

  const horariosList = document.querySelector("#horarios");
  if (horariosList) {
    horariosList.innerHTML = "";
    Object.entries(CONFIG.horarios).forEach(([dia, horario]) => {
      const li = document.createElement("li");
      li.textContent = `${dia}: ${horario}`;
      horariosList.appendChild(li);
    });
  }
};

const renderMenu = () => {
  const menuContainer = document.querySelector("#menu");
  if (!menuContainer) return;
  menuContainer.innerHTML = "";

  CONFIG.menu.forEach((categoria) => {
    const section = document.createElement("div");
    section.className = "menuCategory";

    const title = document.createElement("h3");
    title.textContent = categoria.categoria;
    section.appendChild(title);

    categoria.items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "menuItem";

      const row = document.createElement("div");
      row.className = "menuRow";

      const nombre = document.createElement("span");
      nombre.textContent = item.nombre;

      const precio = document.createElement("span");
      precio.textContent = item.precio || "";

      row.appendChild(nombre);
      row.appendChild(precio);

      itemDiv.appendChild(row);

      if (item.nota) {
        const nota = document.createElement("p");
        nota.className = "menuNote";
        nota.textContent = item.nota;
        itemDiv.appendChild(nota);
      }

      section.appendChild(itemDiv);
    });

    menuContainer.appendChild(section);
  });
};

const renderAcciones = () => {
  const whatsappBtn = document.querySelector("#whatsappBtn");
  if (whatsappBtn) {
    const numero = (CONFIG.whatsapp || "").replace(/\D/g, "");
    whatsappBtn.href = `https://wa.me/${numero}`;
  }

  const crmBtn = document.querySelector("#crmBtn");
  if (crmBtn) {
    if (CONFIG.crmUrl) {
      crmBtn.href = CONFIG.crmUrl;
      crmBtn.classList.remove("placeholder");
    } else {
      crmBtn.href = "#";
      crmBtn.classList.add("placeholder");
    }
  }

  setText("#notasMenu", CONFIG.notasMenu);
};

const init = () => {
  setText("#restaurantName", CONFIG.nombre);
  setText("#restaurantSubtitle", CONFIG.subtitulo);
  renderHistoria();
  renderDatos();
  renderMenu();
  renderAcciones();
};

document.addEventListener("DOMContentLoaded", init);
