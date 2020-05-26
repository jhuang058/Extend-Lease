//Select Calendar Date and reserve
const date = new Date();
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

const renderDate = () => {
  document.getElementById("date").innerHTML = `Date: ${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getYear() + 1900}`;
};

const previousDay = () => {
  date.setDate(date.getDate() - 1);
  renderDate();
};

const nextDay = () => {
  date.setDate(date.getDate() + 1);
  renderDate();
};

const reserve = () => {
  const code = window.codes[date.getTime().toString()];
  console.log(window.codes, date.getTime().toString());
  if (code) {
    document.body.innerHTML = `Reservation confirmed! Code: ${code}`;
  } else {
    document.body.innerHTML = "Already reserved :(";
  }
};

renderDate();

//match key with name
let element = document.getElementById("btn1");
let key = keyNum.value;
function returnName(key) {
  let name;
  let leaseEndDate;
  if (key == "D1" || "d1") {
    name = "Josh";
    leaseEndDate = "May 16, 2021";
    document.getElementById(
      "greeting"
    ).innerHTML = `Hi ${name}! \n Your current lease ends on ${leaseEndDate}.`;
  } else if (key == "D2" || "d2") {
    name = "Jenn";
    leaseEndDate = "June 1, 2020";
    document.getElementById(
      "greeting"
    ).innerHTML = `Hi ${name}! \n Your current lease ends on ${leaseEndDate}.`;
  } else if (key == "D3" || "d3") {
    name = "Austin";
    leaseEndDate = "June 14, 2020";
    document.getElementById(
      "greeting"
    ).innerHTML = `Hi ${name}! \n Your current lease ends on ${leaseEndDate}.`;
  } else {
    document.getElementById("greeting").innerHTML = `Invalid Key Number`;
  }
}

element.addEventListener("click", returnName(key));
