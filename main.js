
const ageCalculate = () => {

  // Selection of Date
  const input = document.querySelector("#date-input").value;



  // Todays Date
  const input_date = new Date(input);
  const currentDate = new Date();

  // Calculating Date
  const year = currentDate.getFullYear() - input_date.getFullYear();
  const month = currentDate.getMonth() - input_date.getMonth();
  const day = currentDate.getDate() - input_date.getDate();


  if (currentDate.getMonth() < input_date.getMonth() ||
    (currentDate.getMonth() === input_date.getMonth() && currentDate.getDate() < input_date.getDate())) {
    age--;
  }

  console.log(year, month, day);

  document.getElementById("years").innerHTML = year;
  document.getElementById("months").innerHTML = month;
  document.getElementById("days").innerHTML = day;



}
ageCalculate();

