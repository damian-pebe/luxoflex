export type PortfolioCase = {
  id: string;
  title: string;
  clientTag: string;
  sector: string;
  application: string;
  summary: string;
  image: string;
  material: string;
  finish: string;
  volume: string;
  leadTime: string;
  accent: string;
  imagePosition?: string;
  tags: string[];
  specs: {
    label: string;
    value: string;
  }[];
};

export type MaterialCardData = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bestFor: string;
  accent: string;
  tags: string[];
};

export const portfolioCases: PortfolioCase[] = [
  {
    id: "LX-01",
    title: "Manga 360 para tequila sabor mango",
    clientTag: "Cliente bebidas",
    sector: "Tequila y destilados",
    application: "Manga termocontraible",
    summary:
      "Manga envolvente de alto impacto para botella completa, pensada para temporadas, sabores especiales y exhibicion en anaquel.",
    image: "/manga_tequila.webp",
    material: "PVC / PETG",
    finish: "Brillante 360",
    volume: "5k-50k pzs",
    leadTime: "Respuesta 24h",
    accent: "#F59E0B",
    imagePosition: "center",
    tags: ["Manga 360", "Color intenso", "Botella completa"],
    specs: [
      { label: "Material", value: "PVC / PETG" },
      { label: "Uso", value: "Botella completa" },
      { label: "Acabado", value: "Brillo 360" },
      { label: "Color", value: "CMYK alta cobertura" },
    ],
  },
  {
    id: "LX-02",
    title: "Etiqueta premium para licor herbal",
    clientTag: "Cliente destilados",
    sector: "Licores y bebidas",
    application: "Etiqueta frontal",
    summary:
      "Etiqueta frontal con contraste alto, detalles finos y lectura limpia para botellas oscuras o empaques de presentacion premium.",
    image: "/flexo_img.webp",
    material: "BOPP blanco",
    finish: "Laminado brillante",
    volume: "10k-80k pzs",
    leadTime: "Produccion continua",
    accent: "#22C55E",
    imagePosition: "center",
    tags: ["Botella premium", "Detalle fino", "Alto contraste"],
    specs: [
      { label: "Material", value: "BOPP blanco" },
      { label: "Uso", value: "Botellas oscuras" },
      { label: "Acabado", value: "Brillo premium" },
      { label: "Adhesivo", value: "Permanente" },
    ],
  },
  {
    id: "LX-03",
    title: "Etiquetas autoadheribles en linea",
    clientTag: "Cliente consumo masivo",
    sector: "Alimentos y retail",
    application: "Produccion en rollo",
    summary:
      "Produccion de etiquetas en rollo para aplicacion automatica, con consistencia de color y lectura clara en volumen.",
    image: "/background.webp",
    material: "BOPP transparente",
    finish: "Barniz brillante",
    volume: "3k-40k pzs",
    leadTime: "Alta rotacion",
    accent: "#3B82F6",
    imagePosition: "center",
    tags: ["Aplicacion automatica", "Rollo impreso", "Alta rotacion"],
    specs: [
      { label: "Material", value: "BOPP transparente" },
      { label: "Uso", value: "Linea automatica" },
      { label: "Acabado", value: "Cristalino" },
      { label: "Resistencia", value: "Humedad" },
    ],
  },
  {
    id: "LX-04",
    title: "Etiqueta flexografica en prensa",
    clientTag: "Cliente alimentos",
    sector: "Salsas y conservas",
    application: "Impresion flexografica",
    summary:
      "Impresion en prensa para etiquetas de producto con color estable, buena definicion y preparado para tirajes continuos.",
    image: "/luxoflexImage1.webp",
    material: "BOPP blanco",
    finish: "Barniz UV",
    volume: "2k-30k pzs",
    leadTime: "Lotes flexibles",
    accent: "#F97316",
    imagePosition: "center",
    tags: ["Flexografia", "Color estable", "Tiraje medio"],
    specs: [
      { label: "Material", value: "BOPP blanco" },
      { label: "Uso", value: "Etiqueta producto" },
      { label: "Acabado", value: "Barniz UV" },
      { label: "Detalle", value: "Alta definicion" },
    ],
  },
  {
    id: "LX-05",
    title: "Rollo impreso listo para acabado",
    clientTag: "Cliente retail",
    sector: "Cuidado personal",
    application: "Rollo de etiquetas",
    summary:
      "Etiquetas impresas en rollo para lineas completas de producto, listas para laminado, suaje o acabado final.",
    image: "/luxoflexImage2.webp",
    material: "BOPP blanco",
    finish: "Laminado mate",
    volume: "1k-25k pzs",
    leadTime: "Campanas rapidas",
    accent: "#A855F7",
    imagePosition: "center",
    tags: ["Rollo impreso", "Linea completa", "Laminado"],
    specs: [
      { label: "Material", value: "BOPP blanco" },
      { label: "Uso", value: "Cuidado personal" },
      { label: "Acabado", value: "Mate sedoso" },
      { label: "Valor", value: "Consistencia visual" },
    ],
  },
  {
    id: "LX-06",
    title: "Etiqueta a color para producto alimenticio",
    clientTag: "Cliente gourmet",
    sector: "Alimentos y snacks",
    application: "Etiqueta a color",
    summary:
      "Etiqueta con colores vivos para destacar ingredientes, sabor y marca en empaques de alta rotacion.",
    image: "/luxoflexImage5.webp",
    material: "Papel / pelicula",
    finish: "Barniz brillante",
    volume: "Variable",
    leadTime: "Por proyecto",
    accent: "#EF4444",
    imagePosition: "center",
    tags: ["Color vivo", "Anaquel", "Empaque"],
    specs: [
      { label: "Material", value: "A la medida" },
      { label: "Uso", value: "Producto alimenticio" },
      { label: "Acabado", value: "Brillante" },
      { label: "Dato", value: "Tiraje flexible" },
    ],
  },
  {
    id: "LX-07",
    title: "Etiquetas en proceso de laminado",
    clientTag: "Cliente industrial",
    sector: "Logistica y manufactura",
    application: "Laminado en linea",
    summary:
      "Proceso de laminado para proteger la impresion y mejorar resistencia al manejo, humedad y friccion.",
    image: "/luxoflexImage3.webp",
    material: "BOPP blanco",
    finish: "Laminado brillante",
    volume: "Variable",
    leadTime: "Por proyecto",
    accent: "#06B6D4",
    imagePosition: "center",
    tags: ["Proteccion", "Laminado", "Proceso"],
    specs: [
      { label: "Material", value: "BOPP blanco" },
      { label: "Uso", value: "Proteccion" },
      { label: "Acabado", value: "Laminado" },
      { label: "Dato", value: "Alta resistencia" },
    ],
  },
  {
    id: "LX-08",
    title: "Suajadas a color para identificacion",
    clientTag: "Cliente industrial",
    sector: "Logistica y manufactura",
    application: "Etiqueta troquelada",
    summary:
      "Etiquetas con cortes personalizados para clasificar, identificar y mantener informacion clara en procesos internos o producto final.",
    image: "/suajadas_color.webp",
    material: "Papel / pelicula",
    finish: "Troquel a color",
    volume: "Variable",
    leadTime: "Por proyecto",
    accent: "#EAB308",
    imagePosition: "center",
    tags: ["Codigo QR", "Folio", "Control interno"],
    specs: [
      { label: "Material", value: "A la medida" },
      { label: "Uso", value: "Identificacion" },
      { label: "Acabado", value: "Suajado" },
      { label: "Dato", value: "Variable" },
    ],
  },
  {
    id: "LX-09",
    title: "Etiqueta holografica para promocion",
    clientTag: "Cliente promocional",
    sector: "Retail y lanzamientos",
    application: "Etiqueta de impacto",
    summary:
      "Efecto holografico para ediciones limitadas, promociones y piezas que necesitan una lectura mas memorable.",
    image: "/bopp_holografico.webp",
    material: "BOPP holografico",
    finish: "Reflejo prismatico",
    volume: "1k-25k pzs",
    leadTime: "Campanas rapidas",
    accent: "#8B5CF6",
    imagePosition: "center",
    tags: ["Holografico", "Promocion", "Edicion limitada"],
    specs: [
      { label: "Material", value: "BOPP holografico" },
      { label: "Uso", value: "Lanzamientos" },
      { label: "Acabado", value: "Prismatico" },
      { label: "Valor", value: "Diferenciacion" },
    ],
  },
  {
    id: "LX-10",
    title: "Preprensa para etiqueta premium",
    clientTag: "Cliente premium",
    sector: "Bebidas y cosmetica",
    application: "Preparacion de arte",
    summary:
      "Revision y preparacion del arte antes de imprimir para cuidar color, registro, sangrados y calidad final.",
    image: "/preprensa_img.webp",
    material: "Archivo aprobado",
    finish: "Preflight tecnico",
    volume: "Por proyecto",
    leadTime: "Revision 24h",
    accent: "#60A5FA",
    imagePosition: "center",
    tags: ["Preprensa", "Color", "Revision"],
    specs: [
      { label: "Material", value: "Arte final" },
      { label: "Uso", value: "Preparacion" },
      { label: "Acabado", value: "Preflight" },
      { label: "Valor", value: "Menos errores" },
    ],
  },
  {
    id: "LX-11",
    title: "BOPP transparente para no-label look",
    clientTag: "Cliente alimentos",
    sector: "Gourmet y refrigerado",
    application: "Etiqueta transparente",
    summary:
      "Solucion transparente para dejar ver el producto y conservar una imagen limpia en envases de vidrio o plastico claro.",
    image: "/bopp_transparente.webp",
    material: "BOPP transparente",
    finish: "Barniz brillante",
    volume: "3k-40k pzs",
    leadTime: "Alta rotacion",
    accent: "#14B8A6",
    imagePosition: "center",
    tags: ["No-label look", "Envase visible", "Refrigeracion"],
    specs: [
      { label: "Material", value: "BOPP transparente" },
      { label: "Uso", value: "Vidrio y PET" },
      { label: "Acabado", value: "Cristalino" },
      { label: "Resistencia", value: "Humedad" },
    ],
  },
  {
    id: "LX-12",
    title: "BOPP plata para botella premium",
    clientTag: "Cliente bebidas",
    sector: "Tequila, vino y destilados",
    application: "Etiqueta metalizada",
    summary:
      "Acabado metalizado con lectura limpia en anaquel, pensado para productos que necesitan presencia premium sin perder detalle.",
    image: "/bopp_plata.webp",
    material: "BOPP plata",
    finish: "Metalizado + barniz UV",
    volume: "5k-50k pzs",
    leadTime: "Respuesta 24h",
    accent: "#F59E0B",
    imagePosition: "center",
    tags: ["Anaquel premium", "Resistente a humedad", "Alto brillo"],
    specs: [
      { label: "Material", value: "BOPP plata" },
      { label: "Uso", value: "Botella y empaque" },
      { label: "Acabado", value: "Brillo controlado" },
      { label: "Color", value: "CMYK + tinta directa" },
    ],
  },
];

export const materialLibrary: MaterialCardData[] = [
  {
    title: "BOPP plata",
    subtitle: "Metalizado premium",
    description:
      "Base plateada para etiquetas con presencia de lujo, brillo controlado y gran impacto en anaquel.",
    image: "/bopp_plata.webp",
    bestFor: "Bebidas, cosmetica y ediciones especiales",
    accent: "#F59E0B",
    tags: ["Metalizado", "Premium", "Humedad"],
  },
  {
    title: "BOPP blanco",
    subtitle: "Color limpio",
    description:
      "Superficie blanca de alta opacidad para imprimir colores consistentes y textos pequenos con buena lectura.",
    image: "/bopp_blanco.webp",
    bestFor: "Alimentos, salud, belleza y retail",
    accent: "#3B82F6",
    tags: ["Opaco", "CMYK", "Versatil"],
  },
  {
    title: "BOPP transparente",
    subtitle: "No-label look",
    description:
      "Pelicula clara para etiquetas que dejan ver el envase y mantienen una presentacion minimalista.",
    image: "/bopp_transparente.webp",
    bestFor: "Vidrio, PET y envases transparentes",
    accent: "#22C55E",
    tags: ["Cristalino", "Vidrio", "Refrigerado"],
  },
  {
    title: "Laminado mate",
    subtitle: "Tacto sofisticado",
    description:
      "Acabado suave que reduce reflejos y protege la etiqueta sin perder detalle de impresion.",
    image: "/laminadoMate.webp",
    bestFor: "Gourmet, cosmetica y productos premium",
    accent: "#A855F7",
    tags: ["Mate", "Proteccion", "Elegante"],
  },
  {
    title: "Laminado brillante",
    subtitle: "Mayor vivacidad",
    description:
      "Capa de proteccion que intensifica color, contraste y brillo para etiquetas mas llamativas.",
    image: "/laminadoBrillante.webp",
    bestFor: "Promociones, bebidas y consumo masivo",
    accent: "#EAB308",
    tags: ["Brillo", "Color", "Proteccion"],
  },
  {
    title: "Pelicula sellable",
    subtitle: "Empaque funcional",
    description:
      "Material para aplicaciones donde el sello, la barrera y la resistencia del empaque son prioridad.",
    image: "/PELICULA_DE_POLIPROPILENO_SELLABLE.webp",
    bestFor: "Alimentos, flow pack y empaque flexible",
    accent: "#EF4444",
    tags: ["Sellable", "Barrera", "Flexible"],
  },
  {
    title: "BOPP holografico",
    subtitle: "Efecto prismático",
    description:
      "Pelicula con reflejos dinamicos para marcas que necesitan destacar con una pieza memorable.",
    image: "/bopp_holografico.webp",
    bestFor: "Temporadas, lanzamientos y seguridad visual",
    accent: "#06B6D4",
    tags: ["Holografico", "Impacto", "Edicion"],
  },
  {
    title: "Suajadas a color",
    subtitle: "Forma personalizada",
    description:
      "Etiquetas troqueladas con siluetas especificas para reforzar identidad de marca y funcionalidad.",
    image: "/suajadas_color.webp",
    bestFor: "Retail, promociones y etiquetas de producto",
    accent: "#F97316",
    tags: ["Troquel", "Color", "Marca"],
  },
  {
    title: "Suajadas termicas",
    subtitle: "Operacion y control",
    description:
      "Etiquetas termicas para identificacion, folios, logistica y procesos con informacion variable.",
    image: "/suajada_termica.webp",
    bestFor: "Inventario, logistica y punto de venta",
    accent: "#94A3B8",
    tags: ["Termico", "Folio", "Operacion"],
  },
];
