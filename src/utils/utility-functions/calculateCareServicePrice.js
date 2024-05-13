export const calculateCareservicePrice = (days, pet) => {
    const discount = days > 30 ? 0.75 :
        days < 30 && days >= 7 ? 0.85
            : 1

    if (pet.specie === "dog") {
        const pricePerDay = pet.weight <= 10 ? 10 :
            pet.weight <= 25 ? 20 : 30

        return days * pricePerDay * discount
    } else {
        const pricePerDay = pet.weight <= 8 ? 10 : 13

        return days * pricePerDay * discount
    }
}