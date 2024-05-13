export const datesArrayToUnixDateArray = (datesArray) => {
    return datesArray.map(date => {
        const [year, month, day] = date.split("-");
        const dateObject = new Date(year, month - 1, day, 0, 0, 0);
        return dateObject.getTime()
    })
}