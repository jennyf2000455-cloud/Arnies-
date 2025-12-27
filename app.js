const CONFIG = {
  nombre: "Arnie’s Wing House",
  subtitulo: "Sports Bar & Grill • Wings • Burgers • Tex-Mex",
  historia: [
    "En Arnie’s Wing House nos enfocamos en comida con sabor grande: alitas con salsas intensas, burgers jugosas y opciones Tex-Mex para compartir.",
    "Somos el spot ideal para ver el juego, cenar con amigos y disfrutar un menú directo y delicioso.",
    "Siempre estamos mejorando: revisa promociones, happy hour y especiales en el restaurante."
  ],

  // (Del cover del menú)
  direccion: "812 South Arroyo Boulevard",
  ciudadEstado: "Los Fresnos, TX",
  telefono: "(956) 233-9038",

  // Edita tu WhatsApp real aquí:
  whatsapp: "9560000000",

  // Si tienes CRM, pega tu link. Si no, déjalo vacío.
  crmUrl: "",

  notasMenu: "Happy Hour: Lunes a Viernes 4–7 PM. Precios pueden variar.",

  menu: [
    {
      categoria: "Appetizers",
      hint: "Entradas para compartir",
      items: [
        { nombre: "Salsa & Chips", precio: "$2.99" },
        { nombre: "Queso & Chips", precio: "$3.99" },
        { nombre: "Queso, Salsa & Chips", precio: "$4.99" },
        { nombre: "Guacamole & Chips", precio: "$4.99" },
        { nombre: "Fried Pickles", precio: "$5.99" },
        { nombre: "Fried Mushrooms", precio: "$5.99" },
        { nombre: "Jalapeño Poppers", precio: "$5.99" },
        { nombre: "Cheese Sticks", precio: "$5.99" },
        { nombre: "Chili Cheese Fries", precio: "$5.99" },
        { nombre: "Bacon & Cheese Fries", precio: "$5.99" }
      ]
    },
    {
      categoria: "Samplers",
      items: [
        { nombre: "Fried Sampler Platter", precio: "$7.99" },
        { nombre: "Arnie’s Sampler", precio: "$8.99" }
      ]
    },
    {
      categoria: "Burgers",
      hint: "Add fries or tater tots for $2.75",
      items: [
        { nombre: "The Old Time Burger", precio: "$7.99" },
        { nombre: "Arnie’s Burger", precio: "$8.99" },
        { nombre: "Jalapeño Burger", precio: "$8.99" },
        { nombre: "The Chicken Burger", precio: "$8.99" },
        { nombre: "Buffalo Chicken Burger", precio: "$8.99" },
        { nombre: "Fajita Burger", precio: "$9.99" },
        { nombre: "Texas BBQ Burger", precio: "$8.99" },
        { nombre: "Texas Mushroom Melt", precio: "$8.99" },
        { nombre: "Chicken Fingers", precio: "$7.99" }
      ]
    },

    {
      categoria: "Wings (Original or Boneless)",
      hint: "Elige tu salsa • Dips extra disponibles",
      items: [
        { nombre: "10 Wings + Carrots & Celery + 1 Dip", precio: "$8.99" },
        { nombre: "20 Wings + Carrots & Celery + 2 Dips", precio: "$17.50" },
        { nombre: "35 Wings + Fries + Carrots & Celery + 4 Dips", precio: "$31.15" },
        { nombre: "50 Wings + Fries + Carrots & Celery + 5 Dips", precio: "$44.25" },
        { nombre: "Add 5 Wings", precio: "$4.99" }
      ]
    },
    {
      categoria: "Wing & Fries Combo",
      items: [
        { nombre: "4 Wings & Fries", precio: "$5.50" },
        { nombre: "6 Wings & Fries", precio: "$7.50" },
        { nombre: "8 Wings & Fries", precio: "$9.50" }
      ]
    },
    {
      categoria: "Wing Flavors",
      hint: "Lista (puedes editar nombres)",
      items: [
        { nombre: "Medium Hot", precio: "—" },
        { nombre: "Chipotle Mango", precio: "—" },
        { nombre: "Spicy BBQ", precio: "—" },
        { nombre: "Mexican Style", precio: "—" },
        { nombre: "Garlic Parmesan", precio: "—" },
        { nombre: "Arnie’s Special Hot", precio: "—" },
        { nombre: "Buffalo Hot", precio: "—" },
        { nombre: "Habanero Mango", precio: "—" },
        { nombre: "BBQ", precio: "—" },
        { nombre: "Lemon Pepper", precio: "—" },
        { nombre: "Raspberry Chipotle", precio: "—" },
        { nombre: "Sweet & Smoked", precio: "—" }
      ]
    },
    {
      categoria: "Sides",
      items: [
        { nombre: "Carrots & Celery", precio: "$2.75" },
        { nombre: "French Fries", precio: "$3.50" },
        { nombre: "Tater Tots", precio: "$3.75" },
        { nombre: "Onion Rings", precio: "$4.00" }
      ]
    },
    {
      categoria: "Extra Dips",
      items: [
        { nombre: "Wing Sauce / Ranch / Blue Cheese", precio: "$0.50" }
      ]
    },

    {
      categoria: "Salads",
      hint: "Algunas opciones tienen tamaño pequeño/grande",
      items: [
        { nombre: "Arnie’s Chicken Salad (Small)", precio: "$5.99" },
        { nombre: "Arnie’s Chicken Salad (Large)", precio: "$7.99" },
        { nombre: "Chicken Caesar Salad (Small)", precio: "$5.99" },
        { nombre: "Chicken Caesar Salad (Large)", precio: "$7.99" },
        { nombre: "Buffalo Chicken Salad (Small)", precio: "$5.99" },
        { nombre: "Buffalo Chicken Salad (Large)", precio: "$7.99" },
        { nombre: "Green Chef Salad (Small)", precio: "$4.99" },
        { nombre: "Green Chef Salad (Large)", precio: "$6.99" },
        { nombre: "Fish Salad", precio: "$9.99" },
        { nombre: "Grilled Shrimp Salad", precio: "$7.99" }
      ]
    },
    {
      categoria: "Soups",
      hint: "Cup/Bowl (ajusta si aplica)",
      items: [
        { nombre: "Arnie’s Tortilla Soup (Cup)", precio: "$3.99" },
        { nombre: "Arnie’s Tortilla Soup (Bowl)", precio: "$7.99" },
        { nombre: "Chicken Vegetable Soup (Cup)", precio: "$3.99" },
        { nombre: "Chicken Vegetable Soup (Bowl)", precio: "$7.99" }
      ]
    },
    {
      categoria: "Sandwiches",
      hint: "All sandwiches served with fries",
      items: [
        { nombre: "Patty", precio: "$7.99" },
        { nombre: "B.L.T.", precio: "$7.99" },
        { nombre: "Grilled Chicken", precio: "$7.99" },
        { nombre: "Ham & Cheese", precio: "$7.99" },
        { nombre: "Mexican", precio: "$7.99" }
      ]
    },
    {
      categoria: "Lite Meals",
      hint: "Ideal portions",
      items: [
        { nombre: "Soup & Salad", precio: "$8.99" },
        { nombre: "Soup & Sandwich", precio: "$8.99" }
      ]
    },

    {
      categoria: "Kids Meals",
      hint: "All kids meals include fries",
      items: [
        { nombre: "Corn Dog (2 pcs)", precio: "$3.25" },
        { nombre: "Cheeseburger", precio: "$4.95" },
        { nombre: "Hot Dog", precio: "$4.00" },
        { nombre: "Chicken Nuggets (6 pcs)", precio: "$4.99" },
        { nombre: "Grilled Ham & Cheese", precio: "$4.99" }
      ]
    },

    {
      categoria: "Tex Mex",
      items: [
        { nombre: "Arnie’s Super Nachos Deluxe (Half)", precio: "$6.99" },
        { nombre: "Arnie’s Super Nachos Deluxe (Full)", precio: "$9.99" },
        { nombre: "Arnie’s Super Quesadilla (Half)", precio: "$6.99" },
        { nombre: "Arnie’s Super Quesadilla (Full)", precio: "$9.99" },
        { nombre: "Chicken Flautas (4)", precio: "$7.99" },
        { nombre: "Chicken Taquitos (6)", precio: "$7.99" },
        { nombre: "Fajita Taquitos (6)", precio: "—" },
        { nombre: "Beef Fajita Tacos", precio: "$9.99" },
        { nombre: "Beef Fajita Plate", precio: "$9.99" },
        { nombre: "Chalupas (4)", precio: "—", nota: "Si quieres, dime el precio exacto y lo actualizo." }
      ]
    },

    {
      categoria: "Parrilladas (For Two)",
      items: [
        { nombre: "Fajita", precio: "$16.50" },
        { nombre: "Chicken", precio: "$13.50" },
        { nombre: "Chicken, Fajita & Sausage", precio: "$14.75" },
        { nombre: "Arnie’s Parrillada", precio: "$16.50" }
      ]
    },

    {
      categoria: "Desserts",
      items: [
        { nombre: "Cheesecake", precio: "$5.50" },
        { nombre: "Hot Brownie", precio: "$5.50" },
        { nombre: "Fried Ice Cream", precio: "$4.25" },
        { nombre: "Ice Cream Float", precio: "$3.75" }
      ]
    },

    {
      categoria: "Bottle Beer",
      hint: "Pregunta por precios/selección",
      items: [
        { nombre: "Domestic: Budweiser, Bud Light, Miller Lite, Coors Light, Shiner Bock, Michelob Ultra, Select 55, Landshark, O’Doul’s", precio: "—" },
        { nombre: "Imported: Corona, Tecate, XX Equis, Heineken", precio: "—" }
      ]
    },
    {
      categoria: "Draft Beer",
      hint: "16oz / 24oz / Pitcher",
      items: [
        { nombre: "Miller Lite", precio: "—" },
        { nombre: "Michelob Ultra", precio: "—" },
        { nombre: "Bud Light", precio: "—" },
        { nombre: "Budweiser", precio: "—" },
        { nombre: "XX Equis", precio: "—" }
      ]
    },
    {
      categoria: "Wine",
      items: [
        { nombre: "By the glass or bottle (ask for our selection)", precio: "—" }
      ]
    },
    {
      categoria: "Drinks",
      items: [
        { nombre: "Regular / Sweet Iced Tea", precio: "—" },
        { nombre: "Raspberry / Strawberry Tea", precio: "—" },
        { nombre: "Lemonade", precio: "—", nota: "(En menú aparece $3.00 refill, ajusta si aplica)" },
        { nombre: "Coffee / Water / Bottled Soda", precio: "—" }
      ]
    }
  ]
};

/* ---------------- RENDER ---------------- */

const $ = (id) => document.getElementById(id);

function safeText(el, txt) {
  if (!el) return;
  el.textContent = txt ?? "";
}

function renderHistoria() {
  safeText($("restaurant-name"), CONFIG.nombre);
  safeText($("restaurant-subtitle"), CONFIG.subtitulo);

  const wrap = $("historia");
  wrap.innerHTML = "";
  CONFIG.historia.forEach((p) => {
    const el = document.createElement("p");
    el.textContent = p;
    wrap.appendChild(el);
  });
}

function renderDatos() {
  safeText($("direccion"), CONFIG.direccion);
  safeText($("ciudadEstado"), CONFIG.ciudadEstado);

  const telLink = $("telefonoLink");
  telLink.textContent = CONFIG.telefono;
  const digits = String(CONFIG.telefono).replace(/[^\d]/g, "");
  telLink.href = digits ? `tel:${digits}` : "#";

  const hours = $("horarios");
  hours.innerHTML = "";
  Object.entries(CONFIG.horarios || {}).forEach(([dia, hora]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${dia}</strong><span>${hora}</span>`;
    hours.appendChild(li);
  });

  // Si no tienes horarios, dejamos un texto default
  if (!CONFIG.horarios || Object.keys(CONFIG.horarios).length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>Horario</strong><span>Actualiza en CONFIG</span>`;
    hours.appendChild(li);
  }

  safeText($("notasMenu"), CONFIG.notasMenu);
}

function renderMenu() {
  const container = $("menu");
  container.innerHTML = "";

  CONFIG.menu.forEach((cat) => {
    const card = document.createElement("section");
    card.className = "menuCategory";

    const head = document.createElement("div");
    head.className = "menuHead";
    head.innerHTML = `
      <h3>${cat.categoria}</h3>
      <p class="menuHint">${cat.hint ?? ""}</p>
    `;

    const body = document.createElement("div");
    body.className = "menuBody";

    (cat.items || []).forEach((it) => {
      const row = document.createElement("div");
      row.className = "menuRow";

      const price = (it.precio ?? "").trim();
      const priceClass = price === "—" || price === "" ? "itemPrice muted" : "itemPrice";

      row.innerHTML = `
        <div class="itemLeft">
          <p class="itemName">${it.nombre}</p>
          ${it.nota ? `<p class="itemNote">${it.nota}</p>` : ""}
        </div>
        <div class="${priceClass}">${price}</div>
      `;
      body.appendChild(row);
    });

    card.appendChild(head);
    card.appendChild(body);
    container.appendChild(card);
  });
}

function renderAcciones() {
  const wa = $("whatsappBtn");
  wa.href = `https://wa.me/${CONFIG.whatsapp}`;

  const crm = $("crmBtn");
  if (CONFIG.crmUrl && CONFIG.crmUrl.trim()) {
    crm.href = CONFIG.crmUrl;
    crm.classList.remove("disabled");
  } else {
    crm.href = "#";
    crm.classList.add("disabled");
  }
}

renderHistoria();
renderDatos();
renderMenu();
renderAcciones();
