export const calculateTrainingServicePrice = (pet) => {
    if (pet.specie === "dog") return pet.weight <= 25 ? 30 : 40
    else return pet.weight <= 8 ? 20 : 35
}