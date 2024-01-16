const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthTag = document.getElementById("curr-month");
const datesTag = document.querySelector(".days");
let prevnexticons = Array.from(document.querySelectorAll('.icons'));

const date = new Date();

let curryear = date.getFullYear();
let currMonth = date.getMonth();
let currMonthName = months[date.getMonth()];
let currDate = date.getDate();

//function to add month and year to month tag
const addMonthYr = (year, month) => {
    monthTag.innerHTML = `${month} ${year}`;
}
addMonthYr(curryear, currMonthName);

//function to render calender of particular month
const renderCalender = (year, month) => {
    let stDay = new Date(year, month, 1).getDay(); //start day
    let lastDate = new Date(year, month + 1, 0).getDate(); //last date of month
    let lastDayOfMonth = new Date(year, month, lastDate).getDay(); //last day of month
    console.log(lastDayOfMonth)
    let lastDateOfPrevMonth = new Date(year, month , 0).getDate(); //last day of month
    // console.log(lastDateOfPrevMonth)
    let liTag = "";
    for (let i = stDay; i > 0; i--) {
        liTag += `<li class = "inactive">${lastDateOfPrevMonth - i + 1}</li>`
        
    }
    for (let i = 1; i < (lastDate + stDay); i++) {
        let val = i - stDay + 1;
        val = val <= 0 || val > lastDate ? " " : val;
        if (val == currDate) {
            liTag += `<li class="current-date">${val}</li>`;
        } 
        else 
        {
            liTag += `<li>${val}</li>`
        }
    }
    // console.log("loop done")
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class = "inactive">${i - lastDayOfMonth + 1}</li>`
        
    }
    month.innerHTML = `${months[month]} ${year}`;
    datesTag.innerHTML = liTag;
}
renderCalender(curryear, currMonth);

//adding functionalities to prev and next button
prevnexticons.forEach(icon => {
    icon.addEventListener("click", () => {
        if (icon.id === "prev") {
            if (currMonth === 0) {
                curryear--;
                currMonth = 11;
            }
            else {

                currMonth--;
            }

            currMonthName = months[currMonth];
            curryear = curryear;
        }
        else if (icon.id === "next") {
            if (currMonth === 11) {
                curryear++;
                currMonth = 0;
            } else {
                currMonth++;
            }
            currMonthName = months[currMonth];
            curryear = curryear;
        }
        addMonthYr(curryear, currMonthName);
        renderCalender(curryear, currMonth);
    });
});





