// Lab 6: Arrays and Objects
// Author: Jack Grzegorzyk
// Date: April 29, 2024

//Array
const myTransport = ["walking", "Uber", "Taxi cab", "Biking", "Skateboarding", "car", "public transit"];

//Object
const myMainRide = {
  make: "Toyota",
  model: "Corolla Le",
  color: "pearlescent white",
  year: 2019,
  age: function () {
    return 2024- this.year;
  }
}

  //Output
  document.writeln ("How I get around town:" + myTransport + "<br>");

  //Object Output
  document.writeln ("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>")