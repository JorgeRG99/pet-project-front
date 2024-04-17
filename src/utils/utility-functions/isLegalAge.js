export function isLegalAge(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    return birth <= eighteenYearsAgo;
}