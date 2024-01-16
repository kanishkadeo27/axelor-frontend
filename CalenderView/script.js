const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthTag = document.getElementById("curr-month");
const datesTag = document.querySelector(".days");
let prevnexticons = Array.from(document.querySelectorAll('.icons'));

const date = new Date();

let curryear = date.getFullYear();
let currMonth = date.getMonth();
let currMonthName = months[date.getMonth()];
let currDate = date.getDate();
console.log(currDate);

//function to add month and year to month tag
const addMonthYr = (year, month) => {
    monthTag.innerHTML = `${month} ${year}`;
}
addMonthYr(curryear, currMonthName);

//function to render calender of particular month
const renderCalender = (year, month) => {
    let stDay = new Date(year, month, 1).getDay(); //start day
    let lastDate = new Date(year, month + 1, 0).getDate(); //last day of month
    let liTag = "";
    for (let i = 0; i <= (lastDate + stDay); i++) {
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





