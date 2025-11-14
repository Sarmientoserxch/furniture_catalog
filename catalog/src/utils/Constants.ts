export class Constants {
    static readonly MESSAGE_INFO_HOME: string = "Transforma tu hogar con nuestra exclusiva colección de muebles diseñados para crear espacios llenos de calidez y elegancia. Calidad artesanal que perdura en el tiempo.";

    static readonly MESSAGE_INFO_SALAS: string = "Descubre nuestra colección de sofás, sillones y muebles de sala diseñados para crear el corazón de tu hogar. Espacios donde cada conversación se convierte en un recuerdo."

    static readonly MESSAGE_INFO_TABLES: string = "Crea el escenario perfecto para compartir momentos especiales. Nuestros comedores \n" +
        "                            combinan funcionalidad y belleza para hacer de cada comida una celebración."

    static readonly MESSAGE_INFO_ALCOBAS: string = "Transforma tu dormitorio en el santuario perfecto para el descanso. Muebles diseñados \n" +
        "                            para crear un ambiente de tranquilidad, comodidad y estilo personal.\n"

    static readonly MESSAGE_INFO_DECORACION: string = "Los pequeños detalles marcan la gran diferencia. Descubre nuestra selección de piezas decorativas que dan vida, personalidad y carácter único a cada rincón de tu hogar."

    static readonly WHATSAPP_NUMBER: string = "573144766493";

    static readonly COMPANY_NAME: string = "Muebles Sarmiento Sanchez";

    static readonly CATEGORIES = {
        SALAS: "salas",
        COMEDORES: "comedores",
        ALCOBAS: "alcobas",
        DECORACION: "decoracion"
    } as const;

    static readonly ROUTES = {
        HOME: "/",
        SALAS: "/salas",
        COMEDORES: "/comedores",
        ALCOBAS: "/alcobas",
        DECORACION: "/decoracion"
    } as const;
    static CHARACTERISTICS_TABLE: string = "Cada mesa y silla está diseñada para crear el ambiente ideal donde la familia \n" +
        "                            y los amigos se reúnen para crear recuerdos inolvidables";
}