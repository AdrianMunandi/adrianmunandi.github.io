//Write a program that takes as input the speed of a car e.g 80.If the speed is less than 70, it should print “Ok”.
//Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

//For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

// Define a function named demeritPoints that takes a parameter 'speed'

function demeritPoints(speed) {
    // Initialize a variable 'points' to 0
    let points = 0;

    // Check if speed is less than 70
    if (speed < 70) {
      // If speed is less than 70, return "OK"
      return "OK";
    } else {
      // If speed is greater than or equal to 70, calculate the demerit points
      // by subtracting the speed limit (70) from the actual speed and dividing
      // the result by 5
      points = Math.floor((speed - 70) / 5);

      // Check if the number of demerit points is greater than 12
      if (points > 12) {
        // If the number of demerit points is greater than 12, return "License suspended"
        return "License suspended";
      } else {
        // If the number of demerit points is less than or equal to 12, return the number of points
        return `Points: ${points}`;
      }
    }
  }

  // Call the demeritPoints function with a speed of 80 and log the output to the console
  console.log(demeritPoints(80)); // Output: Points: 2
