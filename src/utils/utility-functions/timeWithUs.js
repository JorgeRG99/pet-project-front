export const timeWithUs = (date) => {
    const [year, month, day] = date.split("-");
    const currentDate = new Date();

    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    let result = ""

    const yearDiff = currentYear - +year;
    const monthDiff = Math.abs(currentMonth - +month);
    const dayDiff = Math.abs(currentDay - +day);

    if(yearDiff > 0) {
        result = `${yearDiff} año${yearDiff > 1 ? "s" : ""}`;

        if(monthDiff > 0) {
            result += `y ${monthDiff} mes${monthDiff > 1 ? "es" : ""}`;
        }
    } else if(monthDiff > 0) {
        result = `${monthDiff} mes${monthDiff > 1 ? "es" : ""}`;
    } else {
        result = `${dayDiff} dia${dayDiff > 1 ? "s" : ""}`
    }

    return result;
}