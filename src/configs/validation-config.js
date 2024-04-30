// VALIDATION MESSAGES
export const USER_VALIDATION_MESSAGES = {
    email: "Formato de email inválido. Debe seguir el formato usuario@dominio.com. Admite caracteres alfanuméricos, puntos, guiones y subrayados.",
    password: "Formato de contraseña inválido. Debe tener al menos 8 caracteres e incluir al menos una letra mayúscula, una letra minúscula, un número y un símbolo especial (como !@#$%^&*()_+-=[]{};:\\|,.<>/?).",
    confirmedPassword: "Las contraseñas no coinciden. Asegúrate de escribir la misma contraseña en ambos campos.",
    name: "Formato de nombre inválido. Solo debe contener letras y espacios.",
    lastName: "Formato de apellido inválido. Solo debe contener letras y espacios.",
    phone: "Formato de teléfono inválido. Solo debe contener 9 dígitos.",
    dni: "Formato de DNI inválido. Debe contener 8 dígitos seguidos de una letra mayúscula (sin espacios ni guiones).",
    birthDate: "Formato de fecha de nacimiento inválido. Debe estar en formato DD/MM/YYYY (dia-mes-año), superando la mayoria de edad (18 años)."
}

export const PET_VALIDATION_MESSAGES = {
    additionalInfo: "El campo debe contener entre 10 y 150 caracteres.",
    weight: "El campo debe ser un número entre 1 y 50, con un decimal.",
}

// VALIDATION REGEX
export const USER_VALIDATION_REGEX = {
    name: /^[a-zA-Z\s]{3,}$/,
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};:\\|,.<>/?]).{8,}$/,
    dni: /^[0-9]{8}[A-Z]$/,
    phone: /^[0-9]{9}$/,
    birth: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
}

export const PET_VALIDATION_REGEX = {
    additionalInfo: /^.{10,150}$/,
    weight: /^(?:[1-9](?:\.\d)?|[1-4][0-9](?:\.\d)?|50(?:\.0)?)$/
}