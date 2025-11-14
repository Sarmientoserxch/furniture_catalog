import type { CharacteristicSectionProps } from "../interfaces/CharacteristicSection.ts";
import {Constants} from "../utils/Constants.ts";

export const sectionCharacteristicSala: CharacteristicSectionProps = {
    title: "Diseñadas para Vivir",
    descriptionGeneral: "Cada sofá y sillón está pensado para ofrecer el equilibrio perfecto entre estilo, comodidad y durabilidad",
    characteristics: [
        {
            title: "Máximo Confort",
            description: "Espumas de alta densidad y materiales premium para el mejor descanso",
            svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        },
        {
            title: "Diseño Inteligente",
            description: "Funcionalidad pensada para el día a día sin sacrificar la elegancia",
            svgPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        },
        {
            title: "Durabilidad",
            description: "Estructuras sólidas garantizadas para años de uso intensivo",
            svgPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        }
    ]
}

export const sectionCharacteristicTable = {
    title: "El Arte de Reunirse",
    descriptionGeneral: Constants.CHARACTERISTICS_TABLE,
    characteristics: [
        {
            title: "Para Cada Familia",
            description: "Tamaños y configuraciones adaptadas a tu espacio y necesidades",
            svgPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        },
        {
            title: "Calidad Premium",
            description: "Maderas selectas y acabados resistentes al uso diario",
            svgPath: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        },
        {
            title: "Diseño Versátil",
            description: "Estilos que se adaptan desde lo casual hasta lo más elegante",
            svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }
    ]
}

export const sectionCharacteristicAlcobas = {
    title: "Diseñado para el Descanso",
    descriptionGeneral: "Cada mueble está pensado para crear un espacio armonioso donde puedas relajarte, \n" +
        "                            recargar energías y tener el mejor descanso",
    characteristics: [
        {
            title: "Descanso Profundo",
            description: "Camas y colchones diseñados para el mejor descanso nocturno",
            svgPath: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        },
        {
            title: "Organización Inteligente",
            description: "Armarios y nocheros con espacios optimizados para todo",
            svgPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            title: "Ambiente Sereno",
            description: "Colores y texturas que promueven la calma y relajación",
            svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }
    ]
}

export const sectionCharacteristicDecoracion = {
    title: "El Arte de los Detalles",
    descriptionGeneral: "Cada accesorio está cuidadosamente seleccionado para complementar y realzar la belleza natural de tu espacio",
    characteristics: [
        {
            title: "Impacto Visual",
            description: "Piezas que capturan la atención y definen el estilo de cada espacio",
            svgPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        },
        {
            title: "Personalidad Única",
            description: "Accesorios que reflejan tu estilo personal y hacen de tu hogar algo especial",
            svgPath: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        },
        {
            title: "Funcionalidad Elegante",
            description: "Decoración que no solo se ve bien, sino que también es práctica y útil",
            svgPath: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        }
    ]
}