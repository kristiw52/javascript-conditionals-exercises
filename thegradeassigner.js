/*
The Grade Assigner

- Write a function named assignGrade that:
  - takes 1 argument, a number score.
  - returns a grade for the score, either "A", "B", "C", "D", or "F".
- Call that function for a few different scores and log the result to make sure it works.
*/

// YOUR CODE GOES HERE
//score input should be a number
function assignGrade(score) {
	//this will hold the grade to return
var grade;
//calculate grade based on score
if (score < 60) {
	grade = "F";
} else if (score < 70) {
	grade = "D";
} else if (score < 80) {
	grade = "C";
} else if (score < 90) {
	grade = "B";
} else {
	grade = "A";
}	

//return the caluclated grade
return grade;
}

//this was added in to get a little more output
function logScore(score) {
	console.log("Score: " + score + " - Grade: " + assignGrade(score));
}

logScore(50);
logScore(60);
logScore(70);
logScore(80);
logScore(90);
logScore(100);