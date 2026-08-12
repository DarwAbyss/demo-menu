/**
 * =============================================================
 *  DATOS DEL NEGOCIO — EDITA SOLO ESTE ARCHIVO
 * =============================================================
 *  Cambia aquí el nombre, logo, colores, categorías, productos
 *  y la información de contacto. El index.html lee todo desde
 *  este objeto y arma la página automáticamente.
 * =============================================================
 */

const negocioData = {
  nombre: "Sabor & Carbón",
  logo: "assets/logo.png", // Pon tu ruta, ej. "assets/logo.png". Déjalo vacío si no tienes logo
  slogan: "Las mejores hamburguesas artesanales de la ciudad",
  heroImagen: "assets/hero.png", // Foto grande de fondo del encabezado
  whatsapp: "18298887777", // Número para recibir pedidos (con código de país, sin + ni espacios)
  moneda: "$", // Símbolo de moneda (RD$, $, €, etc.)

  // Colores de acento. Usa clases de Tailwind. Cambia estos 4 valores
  // para adaptar el tema a tu marca sin tocar el resto del diseño.
  colores: {
    primario: "bg-amber-700",
    hover: "hover:bg-amber-800",
    texto: "text-amber-700",
    badge: "bg-amber-100 text-amber-800"
  },

  // Categorías para los botones de filtrado
  categorias: [
    { id: "todos", nombre: "Todos" },
    { id: "hamburguesas", nombre: "Hamburguesas" },
    { id: "entradas", nombre: "Entradas & Acompañantes" },
    { id: "bebidas", nombre: "Bebidas" }
  ],

  // Lista de productos del catálogo
  productos: [
    {
      id: 1,
      categoria: "hamburguesas",
      nombre: "Burguer Doble Queso & Tocineta",
      descripcion: "200g de carne angus, doble queso cheddar, tocineta crujiente y salsa especial de la casa.",
      precio: 450,
      popular: true,
      imagen: "assets/dish-1.png"
    },
    {
      id: 2,
      categoria: "hamburguesas",
      nombre: "Chicken Crispy Burguer",
      descripcion: "Pechuga de pollo empanizada súper crujiente, pepinillos, lechuga y mayonesa ahumada.",
      precio: 380,
      popular: false,
      imagen: "assets/dish-2.png"
    },
    {
      id: 3,
      categoria: "entradas",
      nombre: "Papas Supremas con Queso y Bacon",
      descripcion: "Porción grande de papas rústicas bañadas en queso fundido y trozos de tocineta.",
      precio: 250,
      popular: true,
      imagen: "assets/dish-3.png"
    },
    {
      id: 4,
      categoria: "bebidas",
      nombre: "Limonada Natural Fría (16oz)",
      descripcion: "Preparada al instante con limones frescos y mucho hielo.",
      precio: 120,
      popular: false,
      imagen: "assets/dish-4.png"
    }
  ],

  // Información de contacto y horario
  contacto: {
    ubicacion: "Av. Principal #88, Santo Domingo",
    horario: "Miércoles a Lunes: 6:00 PM - 11:30 PM",
    notaDelivery: "Envíos a domicilio disponibles a través de WhatsApp."
  },

  nosotros: {
    titulo: "Sobre Nosotros",
    subtitulo: "Pasión por el sabor auténtico",
    descripcion: "Nacimos con la misión de ofrecer las mejores hamburguesas artesanales de la ciudad. Seleccionamos carnes de primera calidad, horneamos nuestro propio pan todos los días y preparamos salsas caseras sin conservantes para brindarte una experiencia única en cada bocado.",
    imagen: "assets/dish-2.png",
    caracteristicas: [
      "Carne 100% Angus Seleccionada",
      "Pan Horneado Diariamente",
      "Ingredientes Frescos y Locales"
    ]
  }
};