export function getCurrentDate(separator='.'){

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();


    let dateLength = date.toString().split('').length;
    let monthLength = month.toString().split('').length;



    return `${dateLength === 1 ? "0" + date: date}${separator}${monthLength === 1 ? "0" + month: month}${separator}${year}`
}