// Datos para el banner/slider
import {salas} from "./salas.ts";
import {tables} from "./tables.ts";

// Imágenes optimizadas para el banner principal
export const bannerProducts = [
    {
        id: 1,
        title: "Sala Moderna Elegante",
        subtitle: "Salas de Lujo",
        image: "https://res.cloudinary.com/dx9eu0yh1/image/upload/c_fill,w_1920,h_1080,q_auto:best,f_auto/v1757513041/sala_modern_fssjsa.png",
        category: "Salas"
    },
    {
        id: 2,
        title: "Sala Bella con Cojines", 
        subtitle: "Confort Premium",
        image: "https://res.cloudinary.com/dx9eu0yh1/image/upload/c_fill,w_1920,h_1080,q_auto:best,f_auto/v1757513040/sala_bella_cojines_cafe_owfnqq.png",
        category: "Salas"
    },
    {
        id: 3,
        title: "Mesa Silvania Elegante",
        subtitle: "Comedores Exclusivos", 
        image: "https://res.cloudinary.com/dx9eu0yh1/image/upload/c_fill,w_1920,h_1080,q_auto:best,f_auto/v1757512902/mesa_silvania_mitenampa_gtftwy.png",
        category: "Comedores"
    },
    {
        id: 4,
        title: "Mesa Familiar 4 Puestos",
        subtitle: "Comedores Familiares",
        image: "https://res.cloudinary.com/dx9eu0yh1/image/upload/c_fill,w_1920,h_1080,q_auto:best,f_auto/v1757512901/mesa_4puestos_rgnfuk.png",
        category: "Comedores"
    },
    {
        id: 5,
        title: "Alcoba Contemporánea",
        subtitle: "Descanso Perfecto",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1920&h=1080&fit=crop&q=80",
        category: "Alcobas"
    },
    {
        id: 6,
        title: "Decoración Hogareña",
        subtitle: "Detalles que Marcan",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1920&h=1080&fit=crop&q=80",
        category: "Decoración"
    }
];

// Catálogo completo de productos
export const catalogProducts = [ ...salas, ...tables,
    // Alcobas
    {
        id: 6,
        name: "Alcoba Contemporánea",
        category: "Alcobas",
        price: 3200000,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=400&fit=crop",
        description: "Set completo de alcoba con cama king, 2 mesas de noche y cómoda con espejo.",
        features: ["Cama King", "2 Mesas Noche", "Cómoda con Espejo", "Madera Premium"],
        inStock: true,
        isNew: true,
        isOnSale: false
    },
    {
        id: 7,
        name: "Juego de Alcoba Clásica",
        category: "Alcobas",
        price: 4200000,
        originalPrice: 4800000,
        image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=500&h=400&fit=crop",
        description: "Elegante juego de alcoba de estilo clásico con tallados artesanales y acabados dorados.",
        features: ["Tallados Artesanales", "Acabados Dorados", "Cama Queen", "Armario 4 Puertas"],
        inStock: false,
        isNew: false,
        isOnSale: true
    },

    // Decoración
    {
        id: 8,
        name: "Mesa de Centro Moderna",
        category: "Decoración",
        price: 850000,
        image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
        description: "Mesa de centro con diseño geométrico en madera y metal, perfecta para salas modernas.",
        features: ["Diseño Geométrico", "Madera y Metal", "Almacenamiento", "Fácil Montaje"],
        inStock: true,
        isNew: true,
        isOnSale: false
    },
    {
        id: 9,
        name: "Librero Minimalista",
        category: "Decoración", 
        price: 1200000,
        originalPrice: 1400000,
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=400&fit=crop",
        description: "Librero de diseño minimalista con 5 niveles, ideal para oficinas y estudios.",
        features: ["5 Niveles", "Diseño Minimalista", "Fácil Ensamble", "Múltiples Colores"],
        inStock: true,
        isNew: false,
        isOnSale: true
    },
    {
        id: 10,
        name: "Espejo Decorativo Grande",
        category: "Decoración",
        price: 650000,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
        description: "Espejo decorativo con marco dorado, perfecto para ampliar espacios y dar elegancia.",
        features: ["Marco Dorado", "120x80cm", "Biselado", "Instalación Incluida"],
        inStock: true,
        isNew: false,
        isOnSale: false
    }
];

