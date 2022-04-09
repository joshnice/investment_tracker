export function isValidDate(date: any) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

export function getDateString(date: Date) {
    return date.toLocaleDateString("en-GB");
}

// need function to take the column definitions and use the id from them to get the value out of the row definition