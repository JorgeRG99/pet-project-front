import { USER_VALIDATION_REGEX } from "@/configs/validation-config"
import { Validator } from "@/utils/utility-classes/user-data-validator"
import { isLegalAge } from "@/utils/utility-functions/isLegalAge"
import { isUndefined } from "@/utils/utility-functions/isUndefined"

export function useUserValidation() {
    const validateRegisterData = (data) => {
        const isValidDni = Validator.validateField(data.dni, USER_VALIDATION_REGEX.dni)
        const isValidName = Validator.validateField(data.name, USER_VALIDATION_REGEX.name)
        const isValidLastName = Validator.validateField(data.lastName, USER_VALIDATION_REGEX.name)
        const isValidEmail = Validator.validateField(data.email, USER_VALIDATION_REGEX.email)
        const isPasswordValid = Validator.validateField(data.password, USER_VALIDATION_REGEX.password)
        const isConfirmedPasswordValid = data.confirmedPassword === data.password ? true : false
        const isValidPhone = Validator.validateField(data.phone, USER_VALIDATION_REGEX.phone)
        const isValidBirthDate = Validator.validateField(data.birthDate, USER_VALIDATION_REGEX.birth) && isLegalAge(data.birthDate)

        return {
            dni: isValidDni,
            name: isValidName,
            lastName: isValidLastName,
            email: isValidEmail,
            password: isPasswordValid,
            confirmedPassword: isConfirmedPasswordValid,
            phone: isValidPhone,
            birthDate: isValidBirthDate
        }
    }

    const validatePassword = (password) => {
        const isPasswordValid = Validator.validateField(password, USER_VALIDATION_REGEX.password)
        return { password: isPasswordValid }
    }

    const validateEmail = (email) => {
        const isEmailValid = Validator.validateField(email, USER_VALIDATION_REGEX.email)
        return { email: isEmailValid}
    }

    const validateUserUpdate = (data) => {
        const isValidDni = data.dni && Validator.validateField(data.dni, USER_VALIDATION_REGEX.dni)
        const isValidName = data.name && Validator.validateField(data.name, USER_VALIDATION_REGEX.name)
        const isValidLastName = data.lastName && Validator.validateField(data.lastName, USER_VALIDATION_REGEX.name)
        const isValidPhone = data.phone && Validator.validateField(data.phone, USER_VALIDATION_REGEX.phone)
        const isValidBirthDate = data.birthDate && Validator.validateField(data.birthDate, USER_VALIDATION_REGEX.birth) && isLegalAge(data.birthDate)

        const validationResult = {
            dni: isValidDni,
            name: isValidName,
            lastName: isValidLastName,
            phone: isValidPhone,
            birthDate: isValidBirthDate
        }
        const validationResponse = {}

        Object.keys(validationResult).forEach((key) => {
            if(!isUndefined(validationResult[key])){
                validationResponse[key] = validationResult[key]
            }
        })

        return validationResponse
    }

    return { validateRegisterData, validatePassword, validateUserUpdate, validateEmail }
}