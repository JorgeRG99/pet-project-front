export function daysUntil(dateString) {
    const today = new Date();
    const targetDate = new Date(dateString);

    const diff = targetDate - today;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
}