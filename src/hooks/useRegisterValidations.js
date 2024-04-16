import { USER_VALIDATION_REGEX } from "@/configs/validation-config"
import { Validator } from "@/utils/utility-classes/user-data-validator"
import { isLegalAge } from "@/utils/utility-js/isLegalAge"

export function useRegisterValidation() {
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

    return { validateRegisterData }
}