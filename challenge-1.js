// Prompt the user to input a student mark
// The grade is determined if A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40
// The grade is then displayed

// Checks the mark and outputs the right grade
let marks = prompt("Enter student mark (between 0 and 100):");

// Check if the marks are less than 0 or greater than 100
if (marks > 100 || marks < 0){
    alert("Error:Your grade should be between 0 and 100");
}
// If the marks are more than 79 and less than 100, assign the grade of A
if (marks > 79 && marks <= 100){
    alert("You got A");
    // If the marks are between 60 and 79, assign the grade of B
} else if (marks > 60 && marks < 79){
    alert("You got B");
    // If marks are between 49 and 59, assign the grade of C
} else if (marks > 49 && marks < 59){
    alert("You got C");
    // If marks are between 40 and 49, assign the grade of D
} else if (marks > 40 && marks < 49){
    alert("You got D");
    // If marks are less than 40, assign the grade of E
} else if (marks <40){
    alert("You got E");
};
