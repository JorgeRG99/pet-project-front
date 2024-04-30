import { PET_VALIDATION_REGEX } from "@/configs/validation-config"
import { Validator } from "@/utils/utility-classes/user-data-validator"

export function usePetValidation() {
    const validatePetUpdate = (pet) => {
        const isValidWeight = Validator.validateField(pet.weight, PET_VALIDATION_REGEX.weight)
        const isValidAdditionalInfo = Validator.validateField(pet.additionalInfo, PET_VALIDATION_REGEX.additionalInfo)

        return {
            weight: isValidWeight,
            additionalInfo: isValidAdditionalInfo
        }
    }

    return { validatePetUpdate}
}