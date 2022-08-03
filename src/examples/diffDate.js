// //YYYY-MM-DD === YYYY-MM-DD */
// // Difference between 2 days
function diffDate(date1, date2) {
    const time1 = new Date(date1).getTime();
    const time2 = new Date(date2).getTime();
    const diffInMs = time1 - time2;
    const toDays = (diffInMs / 1000) / 60 / 60 / 24;
    console.log(' toDays ', toDays);
    return toDays;
} 

console.log(diffDate("2022/07/23", "2022/07/22"));

