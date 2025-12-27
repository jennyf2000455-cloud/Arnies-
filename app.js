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
      categoria:"Wings (Original or Boneless)",
      items:[
        {nombre:"10 Wings",precio:"$12.99"},
        {nombre:"20 Wings",precio:"$23.99"},
        {nombre:"30 Wings",precio:"$34.99"},
        {nombre:"50 Wings",precio:"$54.99"},
        {nombre:"Flavors",precio:"",nota:"Buffalo, BBQ, Lemon Pepper, Mango Habanero, Garlic Parmesan"}
      ]
    }
  ]
};

/* HERO */
restaurantName.textContent = CONFIG.nombre;
restaurantSubtitle.textContent = CONFIG.subtitulo;

/* HISTORIA */
const historia = document.getElementById("historiaSection");
CONFIG.historia.forEach(t=>{
  const p=document.createElement("p");
  p.style.color="white";
  p.textContent=t;
  historia.appendChild(p);
});

/* INFO */
const info=document.getElementById("infoSection");
info.innerHTML+=`
  <div class="infoGrid">
    <div class="card">
      <strong>Dirección</strong>
      <p>${CONFIG.direccion}<br>${CONFIG.ciudadEstado}</p>
    </div>
    <div class="card">
      <strong>Horarios</strong>
      ${Object.entries(CONFIG.horarios).map(([d,h])=>`<p>${d}: ${h}</p>`).join("")}
    </div>
    <div class="card">
      <strong>Teléfono</strong>
      <p>${CONFIG.telefono}</p>
    </div>
  </div>
`;

/* MENU */
const menu=document.getElementById("menuSection");
CONFIG.menu.forEach(cat=>{
  const c=document.createElement("div");
  c.className="menuCategory";
  c.innerHTML=`<h3>${cat.categoria}</h3>`;
  cat.items.forEach(i=>{
    c.innerHTML+=`
      <div class="menuRow">
        <div>${i.nombre}${i.nota?`<div class="itemNote">${i.nota}</div>`:""}</div>
        <div>${i.precio}</div>
      </div>`;
  });
  menu.appendChild(c);
});

/* ACTIONS */
whatsappBtn.href=`https://wa.me/${CONFIG.whatsapp}`;
crmBtn.href=CONFIG.crmUrl||"#";
if(!CONFIG.crmUrl) crmBtn.onclick=e=>e.preventDefault();
