export class Validator {
    static validateField(field, regex) {
        return regex.test(String(field));
    }
    static getValidationMessages(validationResultObject, customMessages) {
        const objectKeys = Object.keys(validationResultObject)
        const validationMessages = {}

        objectKeys.forEach(key => {
            if (!validationResultObject[key]) {
                validationMessages[key] = customMessages[key]
            }
        })

        return validationMessages
    }
}