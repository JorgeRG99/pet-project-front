export const PAGES_URLS = {
    home: '/',
    register: '/registro',
    login: '/acceso',
    pets: "/mascotas"
}

export const NAVBAR_PETS = [
    {
        title: "Perros",
        href: "/perros",
        description:
            "Leales y llenos de energía, descubre tu próximo compañero fiel.",
    },
    {
        title: "Gatos",
        href: "/gatos",
        description:
            "Elegantes y misteriosos, encuentra un compañero con estilo y carácter.",
    },
];

export const NAVBAR_SERVICES = [
    {
        title: "Hotel",
        href: "/hotel",
        description:
            "Atención experta para su bienestar, cuidamos de tu mascota como si fuera nuestra.",
    },
    {
        title: "Adiestramiento",
        href: "/adiestramiento",
        description:
            "Entrenamiento personalizado: fortalece el vínculo y mejora la conducta de tu amigo peludo.",
    },
    {
        title: "Educación animal",
        href: "/educacion",
        description:
            "Aprende sobre tu mascota: consejos y técnicas para una convivencia feliz y saludable.",
    },
];

export const HOME_SERVICES_CARD_CONTENTS = {
    hotel: {
        title: "Hotel de cuidados",
        description: "Entendemos lo importante que es tu mascota para ti, por eso ofrecemos un servicio de cuidado y atención personalizados.",
    },
    training: {
        title: "Adiestramiento",
        description: "Métodos amigables y positivos, asegurando que cada sesión sea divertida y educativa tanto para tu mascota como para ti.",
    },
    education: {
        title: "Educacion animal",
        description: "Aprenderás todo, desde la nutrición y el cuidado básico hasta el manejo del comportamiento y la salud.",
    }
}

export const HOME_ABOUT = {
    title: "¿Quienes somos?",
    paragraphs: [
        "Nuestra historia comenzó hace una década en el corazón de Córdoba, donde un pequeño grupo de amantes de los animales decidió convertir su pasión en una misión.",
        "Ofrecemos adopciones responsables, entrenamiento especializado y educación animal. Además, nuestro hotel de mascotas proporciona cuidados excepcionales para tu compañero peludo, asegurando su bienestar y felicidad mientras estás ausente.",
        "Estamos comprometidos a mejorar las vidas de los animales a través del amor y el cuidado. Cada día es una nueva oportunidad para hacer una diferencia, trabajando incansablemente para crear un futuro mejor para los animales y sus familias."
    ]
}

export const HOME_FAQ = [
    {
        question: "¿Cómo funciona el proceso de adopción?",
        answer: "Nuestro proceso de adopción comienza con una solicitud en línea, seguida de una entrevista para asegurarnos de que cada mascota va a un hogar amoroso y adecuado. Tras la aprobación, se organiza una reunión con la mascota y, si todo va bien, se completa la adopción."
    },
    {
        question: "¿Puedo adoptar si tengo otras mascotas?",
        answer: "Sí, aceptamos adoptantes que ya tengan mascotas. Recomendamos una reunión de introducción entre tu mascota actual y la nueva para asegurar una transición suave y segura para todos."
    },
    {
        question: "¿Cómo puedo ser voluntario o ayudar a la protectora?",
        answer: "Agradecemos cualquier ayuda que puedas ofrecer. Puedes ser voluntario en nuestra instalación, ayudar en eventos, o hacer una donación. Visita nuestra página de voluntarios para más información y para inscribirte."
    },
    {
        question: "¿Ofrecemos asesoramiento o apoyo después de la adopción?",
        answer: "Sí, proporcionamos asesoramiento y apoyo posadopción. Nuestro equipo está disponible para ayudarte con cualquier pregunta o inquietud sobre el cuidado y el ajuste de tu nueva mascota."
    },
    {
        question: "¿Cómo puedo preparar mi hogar para una nueva mascota?",
        answer: "Preparar tu hogar incluye asegurar un ambiente seguro y acogedor. Esto incluye tener las provisiones necesarias, como comida, una cama, juguetes, y asegurarte de que tu hogar es un espacio seguro para ellos."
    }
]


//Routes
const API_ORIGIN = import.meta.env.VITE_APP_API_ORIGIN


// ------------ USER -------------
export const USER_REGISTER = `${API_ORIGIN}/register`
export const USER_LOGIN = `${API_ORIGIN}/login`
export const USER = `${API_ORIGIN}/user`

// ------------ ADOPTIONS -------------
export const YOUR_ADOPTIONS = `${API_ORIGIN}/yourAdoptions`
export const REQUEST_ADOPTION = `${API_ORIGIN}/requestAdoption`
export const ADOPTION_BY_USER = `${API_ORIGIN}/adoptionsByUser/`
export const ADOPTION_BY_PET = `${API_ORIGIN}/adoptionsByPet/`
export const ACCEPT_ADOPTION = `${API_ORIGIN}/acceptAdoption/`
export const CONFIRM_ADOPTIONS = `${API_ORIGIN}/confirmAdoption/`
export const CANCEL_ADOPTION = `${API_ORIGIN}/cancelAdoption/`

// ------------ PETS -------------
export const ALL_PETS = `${API_ORIGIN}/pets`
export const PET_BY_ID = `${API_ORIGIN}/pet/`
export const ADD_PET = `${API_ORIGIN}/pet`
export const UPDATE_PET = `${API_ORIGIN}/pet/`
export const DELETE_PET = `${API_ORIGIN}/pet/`

// ------------ SPECIES -------------
export const ALL_SPECIES = `${API_ORIGIN}/species`
export const ADD_SPECIE= `${API_ORIGIN}/specie`
export const DELETE_SPECIE = `${API_ORIGIN}/specie/`

// ------------ CARE SERVICES -------------
export const CARE_SERVICE_BY_ID = `${API_ORIGIN}/service/`
export const ALL_CARE_SERVICES = `${API_ORIGIN}/services`
export const ADD_CARE_SERVICE = `${API_ORIGIN}/service`
export const UPDATE_CARE_SERVICE = `${API_ORIGIN}/service/`
export const DELETE_CARE_SERVICE = `${API_ORIGIN}/service/`
