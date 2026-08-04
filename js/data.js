const negocioData = {
  nombre: "Sabor & Carbón",
  logo: "assets/logo.png",
  slogan: "Las mejores hamburguesas artesanales de la ciudad",
  whatsapp: "18095550000", // Número para recibir pedidos
  moneda: "$", // Símbolo de moneda (RD$, $, €, etc.)
  colores: {
    primario: "bg-amber-600",
    hover: "hover:bg-amber-700",
    texto: "text-amber-600",
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
      popular: true, // Muestra una etiqueta de "Popular" o "Estrella"
      imagen: "assets/burger-doble.png"
    },
    {
      id: 2,
      categoria: "hamburguesas",
      nombre: "Chicken Crispy Burguer",
      descripcion: "Pechuga de pollo empanizada súper crujiente, pepinillos, lechuga y mayonesa ahumada.",
      precio: 380,
      popular: false,
      imagen: "assets/chicken-burger.png"
    },
    {
      id: 3,
      categoria: "entradas",
      nombre: "Papas Supremas con Queso y Bacon",
      descripcion: "Porción grande de papas rústicas bañadas en queso fundido y trozos de tocineta.",
      precio: 250,
      popular: true,
      imagen: "assets/papas-supremas.png"
    },
    {
      id: 4,
      categoria: "bebidas",
      nombre: "Limonada Natural Fría (16oz)",
      descripcion: "Preparada al instante con limones frescos y mucho hielo.",
      precio: 120,
      popular: false,
      imagen: "assets/limonada.png"
    }
  ],

  // Información de contacto y horario
  contacto: {
    ubicacion: "Av. Principal #88, Santo Domingo",
    horario: "Miércoles a Lunes: 6:00 PM - 11:30 PM",
    notaDelivery: "🚀 Envíos a domicilio disponibles a través de WhatsApp."
  },

  nosotros: {
    titulo: "Sobre Nosotros",
    subtitulo: "Pasión por el sabor auténtico",
    descripcion: "Nacimos con la misión de ofrecer las mejores hamburguesas artesanales de la ciudad. Seleccionamos carnes de primera calidad, horneamos nuestro propio pan todos los días y preparamos salsas caseras sin conservantes para brindarte una experiencia única en cada bocado.",
    imagen: "assets/nosotros.png", // Foto del equipo, cocina o preparación
    caracteristicas: [
      "🥩 Carne 100% Angus Seleccionada",
      "🍞 Pan Horneado Diariamente",
      "🌿 Ingredientes Frescos y Locales"
    ]
  }
};